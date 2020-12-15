import React from 'react'
import './AboutMe.scss';
import CV from './CV/CV';
import FavouriteWorks from './FavouriteWorks/FavouriteWorks';
import Introduction from './Introduction/Introduction';

const AboutMe = () => {
    return(
        <div className="aboutMe">
            <Introduction />
            <FavouriteWorks />
            <CV />
        </div>
    );
}

export default AboutMe;