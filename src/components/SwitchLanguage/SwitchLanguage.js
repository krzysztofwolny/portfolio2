import React from 'react';
import './SwitchLanguage.scss'
import displayLanguage from '../../translations/translations';
import * as langAction from '../../store/actions/actions';
import { useDispatch } from 'react-redux'

const SwitchLanguage = () => {
    const onLanguageChange = useDispatch();
    const text = displayLanguage();
    const options = [
        {
            value: 'en',
            label: 'English'
        },
        {
            value: 'pl',
            label: 'Polski'
        }
    ];

    const chandleChange = (event) => {
        onLanguageChange(langAction.changeLanguageAction(event.target.value));
    };
    
    return(
        <div className="SwitchLanguage">
            <p className="SwitchLanguage__label">{text.SwitchLanguage_chooseLanguage}</p>
            <select className="SwitchLanguage__select" onChange={chandleChange}>
                {options.map(option => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
};

export default SwitchLanguage;

/*
<option value="english" onClick={() => onLanguageChange(langAction.changeLanguageAction('en'))}>English</option>
                    <option value="polish" onClick={() => onLanguageChange(langAction.changeLanguageAction('pl'))}>Polski</option>
*/