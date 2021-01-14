import React from 'react';
import './MenuItem.scss';
import { Link } from 'react-router-dom';

import icons from '../../../assets/icons/sprite.svg'

const MenuItem = (props) => {
    
    return(
        <li className="MenuItem">
            <div className="MenuItem__wrap">
                <Link to={props.linkName}>
                    <a href={props.linkName} className="MenuItem__link" >
                        <svg className="MenuItem__svg">
                            <use xlinkHref={`${icons}#${props.iconName}`}></use>
                        </svg>
                        <p className="MenuItem__desc">{props.itemName}</p>
                    </a> 
                </Link>
            </div>
        </li>
    );
}

export default MenuItem;