import React from 'react'
import './AboutMe.scss';
import CV from './CV/CV';
import Hobby from './Hobby/Hobby';
import Introduction from './Introduction/Introduction';
import MainLabel from './MainLabel/MainLabel';

const AboutMe = () => {
    return(
        <div className="aboutMe">
            <MainLabel />
            <Introduction />
            <Hobby />
            <CV />
        </div>
    );
}

export default AboutMe;