import React from 'react'
import myphoto from '../../assets/img/me.jpg';
import displayLanguage from '../../translations/translations';
import './Logo.scss';

const Logo = () => {
    const text = displayLanguage();
    return(
        <div className="logo">
            <img src={myphoto} className="logo__photo"></img>
            <p className="logo__name">Krzysztof Wolny</p>
            <p>{text.test}</p>
        </div>
    );
}

export default Logo;