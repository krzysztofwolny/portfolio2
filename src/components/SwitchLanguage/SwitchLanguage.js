import React from 'react';
import displayLanguage from '../../translations/translations';
import * as langAction from '../../store/actions/actions';
import { useDispatch } from 'react-redux'

const SwitchLanguage = () => {
    const onLanguageChange = useDispatch();
    const text = displayLanguage();
    return(
        <div>
            <p>{text.SwitchLanguage_chooseLanguage}</p>
            <label for="language"></label>
                <select className="language" name="cars">
                    <option value="english" onClick={() => onLanguageChange(langAction.changeLanguageAction('en'))}>English</option>
                    <option value="polish" onClick={() => onLanguageChange(langAction.changeLanguageAction('pl'))}>Polski</option>
                </select>
        </div>
    );
}

export default SwitchLanguage;