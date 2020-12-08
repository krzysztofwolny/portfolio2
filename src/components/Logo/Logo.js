import React from 'react'
import myphoto from '../../assets/img/me.jpg';
import './Logo.scss';

const Logo = () => {
    return(
        <div className="logo">
            <img src={myphoto} className="logo__photo"></img>
            <p className="logo__name">Krzysztof Wolny</p>
        </div>
    );
}

export default Logo;