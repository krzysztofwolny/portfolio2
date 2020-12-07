import langEN from './EN';
import langPL from './PL';
import { useSelector } from 'react-redux';

const DisplayLanguageHandler = () => {
    const lgn = useSelector(state => state.language);
    const textData = (lgn) => {
        switch (lgn) {
            case lgn = 'pl': return langPL;
            case lgn = 'en' : return langEN;
            default: return langPL;
        }
    };

    return textData(lgn);
}

export default DisplayLanguageHandler;
