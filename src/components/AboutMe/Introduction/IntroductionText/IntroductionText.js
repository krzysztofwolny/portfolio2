import React from 'react';
import './IntroductionText.scss';

import displayLanguage from '../../../../translations/translations';

const IntroductionText = () => {
    const text = displayLanguage();

    return(
        <p className="introductionText">
            {text.Introduction_Text}
        </p>
    );
}

export default IntroductionText;