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

    const inputFields = {
        email: {
            labelFor: 'email',
            inputType: 'email',
            inputName: 'email',
            inputLabel: text.Contact_email_inputLabel,
            inputPlaceHolder: text.Contact_email_inputPlaceHolder,
            class: 'contact__email',
            inputArea: 'input',
        },
        topic: {
            labelFor: 'topic',
            inputType: 'text',
            inputName: 'topic',
            inputLabel: text.Contact_topic_inputLabel,
            inputPlaceHolder: text.Contact_topic_inputPlaceHolder,
            class: 'contact__topic',
            inputArea: 'input',
        },
        message: {
            labelFor: 'message',
            inputType: 'text',
            inputName: 'message',
            inputLabel: text.Contact_message_inputLabel,
            inputPlaceHolder: text.Contact_message_inputPlaceHolder,
            class: 'contact__message',
            inputArea: 'textarea',
        }
    }

    const printInputFields = (fieldsData) => {
        const form = Object.keys(fieldsData).map(el => {
            const CustomTag = `${fieldsData[el].inputArea}`
            return(
                <React.Fragment>
                    <label className="contact__label" for={fieldsData[el].labelFor}>{fieldsData[el].inputLabel}</label>
                    <CustomTag 
                        className={'contact__input' + ' ' + fieldsData[el].class}
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
    }

    const printModal = showModal ? <ContactModal changeStatus={modalOff} info={sendingStatus.success} /> : null;

    const [validFields, setValidFields] = useState({
        validEmail: false,
        validTopic: false,
        validMessage: false,
    })
    

    //ogólnie to tutaj nie działa, bo trzeba kliknąć wyślij drugi raz, żeby walidacja przeszła
    //korzysta z nieaktualnego stanu
    //próbowałeś juz zrobić validację na onChange ale wgl się sypało ostro xD
    const validateMessage = () => {
        let readyToSend;
        const copyValidFields = { ...validFields };
        
            if (messageToSend.email.length !== 0) { 
                setValidFields({
                ...copyValidFields,
                validEmail: true,
                });
            };

            if (messageToSend.topic.length !== 0) { 
                setValidFields({
                ...copyValidFields,
                validTopic: true,
                });
            };

            if (messageToSend.message.length !== 0) { 
                setValidFields({
                ...copyValidFields,
                validMessage: true,
                });
            };

        console.log(copyValidFields);

        if(validFields.validEmail && validFields.validTopic && validFields.validMessage) {
            readyToSend = true;
        } else {
            readyToSend = false;
        }
        return readyToSend;
    };

    const sendMessage = (event) => {
        event.preventDefault();
        if(validateMessage()) {        
        const userID = 'user_7fbn9gqTydDQy6qAVPjsx';
        emailjs.send('gmail', 'template_1jpadfx', messageToSend, userID)
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



    return(
        <div className="contact__wrap">
            <div className="contact">
                <form className="contact__form">
                    {printInputFields(inputFields)}
                </form>
                <button className="contact__button" onClick={(event) => sendMessage(event)}>{text.Contact_button}</button>
                {printModal}
            </div>
        </div>
    );
}

export default Contact;