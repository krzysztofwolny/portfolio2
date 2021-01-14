import React, { useState } from 'react';
import './Contact.scss';
import emailjs from 'emailjs-com';
import displayLanguage from '../../translations/translations';
import ContactModal from './ContactModal/ContactModal';

const Contact = () => {
    const text = displayLanguage();
    const [messageToSend, setMessageToSend] = useState({
        email: '',
        topic: '',
        message: '',
    });
    const [showModal, setShowModal] = useState(false);
    const [sendingStatus, setSendingStatus] = useState({
        responseStatus: '',
        success: false,
    });
    const [validFields, setValidFields] = useState({
        validEmail: 0,
        validTopic: 0,
        validMessage: 0,
    });

    const inputFields = {
        email: {
            labelFor: 'email',
            inputType: 'email',
            inputName: 'email',
            inputValue: messageToSend.email,
            inputLabel: text.Contact_email_inputLabel,
            inputPlaceHolder: text.Contact_email_inputPlaceHolder,
            class: 'contact__email',
            inputArea: 'input',
            validationMessage: text.Contact_validation_email,
            validationStateKey: validFields.validEmail,
        },
        topic: {
            labelFor: 'topic',
            inputType: 'text',
            inputName: 'topic',
            inputValue: messageToSend.topic,
            inputLabel: text.Contact_topic_inputLabel,
            inputPlaceHolder: text.Contact_topic_inputPlaceHolder,
            class: 'contact__topic',
            inputArea: 'input',
            validationMessage: text.Contact_validation_topic,
            validationStateKey: validFields.validTopic,
        },
        message: {
            labelFor: 'message',
            inputType: 'text',
            inputName: 'message',
            inputValue: messageToSend.message,
            inputLabel: text.Contact_message_inputLabel,
            inputPlaceHolder: text.Contact_message_inputPlaceHolder,
            class: 'contact__message',
            inputArea: 'textarea',
            validationMessage: text.Contact_validation_message,
            validationStateKey: validFields.validMessage,
        }
    }

    const printInputFields = (fieldsData) => {
        const form = Object.keys(fieldsData).map(el => {
            const CustomTag = `${fieldsData[el].inputArea}`;
            const fieldValidation = fieldsData[el].validationStateKey >= 2 ? <span className="contact__validation">{fieldsData[el].validationMessage}</span> : null;
            return(
                <React.Fragment>
                    <label className="contact__label" for={fieldsData[el].labelFor}>{fieldsData[el].inputLabel} {fieldValidation}</label>
                    <CustomTag 
                        className={`contact__input ${fieldsData[el].class}`}
                        value={fieldsData[el].inputValue}
                        type={fieldsData[el].inputType} 
                        id={fieldsData[el].inputName} 
                        name={fieldsData[el].inputName} 
                        placeholder={fieldsData[el].inputPlaceHolder} 
                        onChange={(event) => saveMessage(event, fieldsData[el].inputName)}>
                    </CustomTag>
                </React.Fragment>
            );
        });
        return form
    };

    const saveMessage = (el, id) => {
        const copyMessageToSend = {...messageToSend};
        setMessageToSend({
            ...copyMessageToSend,
            [id]: el.target.value,
        });
        console.log(messageToSend);
    };

    const modalOff = () => {
        setShowModal(false);
        setMessageToSend({
            email: '',
            topic: '',
            message: '',
        });
        setValidFields({
            validEmail: 0,
            validTopic: 0,
            validMessage: 0,
        });
        setSendingStatus({
            responseStatus: '',
            success: false,
        });
    }

    const printModal = showModal ? <ContactModal 
                                    closeModal={modalOff}  
                                    status={sendingStatus.success}
                                    /> : null;
    
    const validateMessage = () => {
        let readyToSend;
        const copyValidFields = { ...validFields };
        
        //  0 - never used, 1- valid, 2 - invlid
        const emailValidator = () => {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            const validationEmailCheck = re.test(String(messageToSend.email).toLowerCase());
            console.log(validationEmailCheck);
            if (validationEmailCheck) {
                return 1;
            } else {
                return 2;
            }
        };

        const validEmail = emailValidator();
        const validTopic = messageToSend.topic.length >= 5 ? 1 : 2;
        const validMessage = messageToSend.message.length >= 10 ? 1 : 2;

        if(validEmail === 1 && validTopic === 1 && validMessage === 1) {
            readyToSend = true;
        } else {
            readyToSend = false;
        }

        const validationInformation = () => {
                setValidFields({
                    ...copyValidFields,
                    validEmail: validEmail,
                    validTopic: validTopic,
                    validMessage: validMessage,
                });
        }
        validationInformation();
        console.log(readyToSend);
        return readyToSend;
    };

    const sendMessage = async (event) => {
        //event.preventDefault();
        if(validateMessage()) {        
        const userID = 'user_7fbn9gqTydDQy6qAVPjsx';
        await emailjs.send('gmail', 'template_1jpadfx', messageToSend, userID)
        .then( response => {
            setShowModal(true);
            setSendingStatus({
                responseStatus: response.status,
                success: true,
            });
            console.log('SUCCESS!', response.status, response.text);
        }, error => {
            setShowModal(true);
            setSendingStatus({
                responseStatus: error,
                success: false,
            });
            console.log('FAILED...', error);
        });
        }
    }

//pamiętaj, że modal musi ustawiać state do stanu domyślnego!

    return(
        <div className="contact__wrap">
            <div className="contact">
                {printModal}
                <form className="contact__form">
                    {printInputFields(inputFields)}
                </form>
                <button className="contact__button" onClick={(event) => sendMessage(event)}>{text.Contact_button}</button>
            </div>
        </div>
    );
}

export default Contact;