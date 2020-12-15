import React from 'react';
import './DropdownItem.scss';
import icons from '../../../../../assets/icons/sprite.svg';
import { navigate } from 'hookrouter';

const DropdownItem = (props) => {
    const goTo = (link) => {
        navigate(link);
        props.closeAfterNavigate();
    };

    return(
        <div className="DropdownItem" onClick={() => goTo(props.linkName)}>
            <svg className="DropdownItem__svg">
                <use xlinkHref={`${icons}#${props.iconName}`}></use>
            </svg>
            <span className="DropdownItem__label">{props.itemName}</span>
        </div>
    );
}

export default DropdownItem;