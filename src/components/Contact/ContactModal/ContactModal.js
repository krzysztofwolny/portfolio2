import React from 'react';
import './ContactModal.scss';
import displayLanguage from '../../../translations/translations';

const ContactModal = (props) => {
    const text = displayLanguage();

    const textClass = props.status ? "contactModal__success" : "contactModal__fail";

    return(
        <div className="contactModal" onClick={props.closeModal}>
            <p className={"contactModal__info " + textClass}>{props.status ? text.ContactModal_Response_Success : text.ContactModal_Response_Fail}</p>
        </div>
    );
}

export default ContactModal;