import * as actionType from '../actions/actionTypes';

const initialState = {
    language: 'en'
}

const changeLaunguage = (state, curLang) => {
    let updatedState = { ...state };
    updatedState = { language: curLang};
    return updatedState;
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.CHANGE_LANGUAGE: return changeLaunguage(state, action.curLang);
        default: return state;
    } 
};

export default reducer;