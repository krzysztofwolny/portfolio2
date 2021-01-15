import langEN from './EN';
import langPL from './PL';
import { useSelector } from 'react-redux';

const DisplayLanguageHandler = () => {
    const lgn = useSelector(state => state.language);
    const textData = (lgn) => {
        switch (lgn) {
            case 'pl': return langPL;
            case 'en' : return langEN;
            default: return langPL;
        }
    };
    return textData(lgn);
}

export default DisplayLanguageHandler;
