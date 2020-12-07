import * as actionTypes from './actionTypes';

export const changeLanguageAction = (language) => {
    return {
        type: actionTypes.CHANGE_LANGUAGE,
        curLang: language
    }
};