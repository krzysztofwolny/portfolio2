import { render } from '@testing-library/react';
import React from 'react';
import './MainLabel.scss';
import displayLanguage from '../../../translations/translations';

const MainLabel = () => {
    const text = displayLanguage();
    return(
        <div className='mainLabel'>
            <h1 className="mainLabel__h1">{text.AboutMe_mainLabel}</h1>
        </div>
    );
};

export default MainLabel;