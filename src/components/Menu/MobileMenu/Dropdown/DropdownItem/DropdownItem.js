import React from 'react';
import './DropdownItem.scss';
import icons from '../../../../../assets/icons/sprite.svg';

const DropdownItem = (props) => {
    return(
        <div className="DropdownItem">
            <svg className="DropdownItem__svg">
                <use xlinkHref={`${icons}#${props.iconName}`}></use>
            </svg>
            <span className="DropdownItem__label">{props.itemName}</span>
        </div>
    );
}

export default DropdownItem;