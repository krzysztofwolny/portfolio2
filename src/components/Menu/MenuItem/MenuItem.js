import React from 'react';
import './MenuItem.scss';

import icons from '../../../assets/icons/sprite.svg'

import { navigate } from 'hookrouter';

const MenuItem = (props) => {
    const goTo = (link) => {
        navigate(link);
    };
    
    return(
        <li className="MenuItem">
            <div className="MenuItem__wrap">
                <a href="#" className="MenuItem__link" onClick={() => goTo(props.linkName)}>
                    <svg className="MenuItem__svg">
                        <use xlinkHref={`${icons}#${props.iconName}`}></use>
                    </svg>
                    <p className="MenuItem__desc">{props.itemName}</p>
                </a> 
            </div>
        </li>
    );
}

export default MenuItem;