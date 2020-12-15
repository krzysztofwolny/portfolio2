import React from 'react';
import './HobbyItem.scss';
import icons from '../../../../assets/icons/sprite.svg';

const HobbyItem = (props) => {
    return(
        <div className="hobbyItem">
            <svg className="hobbyItem__svg">
                <use xlinkHref={`${icons}#${props.iconName}`}></use>
            </svg>
            <span className="hobbyItem__label">{props.itemName}</span>
        </div>
    );
}

export default HobbyItem;