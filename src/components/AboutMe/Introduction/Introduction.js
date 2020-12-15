import React from 'react';
import './Introduction.scss';
import IntroductionPhoto from './IntroductionPhoto/IntroductionPhoto';
import IntroductionText from './IntroductionText/IntroductionText';

const Introduction = () => {
    return(
        <div className="introduction">
            <IntroductionPhoto />
            <IntroductionText />
        </div>
    );
}

export default Introduction;