import React from 'react';
import './MenuItem.scss';

import icons from '../../../assets/icons/sprite.svg'

const MenuItem = (props) => {
    
    return(
        <li className="MenuItem">
            <div className="menuTest">
                <a href="#" className="MenuItem__link">
                    <svg className="MenuItem__svg">
                        <use xlinkHref={`${icons}#${props.iconName}`}></use>
                    </svg>
                    <span className="MenuItem__desc">{props.itemName}</span>
                </a> 
            </div>
        </li>
    );
}

export default MenuItem;