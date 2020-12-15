import React from 'react'
import './AboutMe.scss';
import CV from './CV/CV';
import Hobby from './Hobby/Hobby';
import Introduction from './Introduction/Introduction';

const AboutMe = () => {
    return(
        <div className="aboutMe">
            <Introduction />
            <Hobby />
            <CV />
        </div>
    );
}

export default AboutMe;