import React from 'react';
import myPhoto from '../../../../assets/img/me.jpg'
import './IntroductionPhoto.scss';

const IntroductionPhoto = () => {
    return(
        <img src={myPhoto} className="introductionPhoto"></img>
    );
}

export default IntroductionPhoto;