import React from 'react';
import './DropdownItem.scss';
import icons from '../../../../../assets/icons/sprite.svg';
import { Link } from 'react-router-dom';

const DropdownItem = (props) => {
    const closeAfter = () => {
        props.closeAfterNavigate();
    };

    return(
        <div className="DropdownItem" onClick={() => closeAfter()}>
            <Link to={props.linkName} className="DropdownItem__link">
                <svg className="DropdownItem__svg">
                    <use xlinkHref={`${icons}#${props.iconName}`}></use>
                </svg>
                <span className="DropdownItem__label">{props.itemName}</span>
            </Link>
        </div>
    );
}

export default DropdownItem;