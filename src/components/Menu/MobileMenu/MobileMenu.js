import React, { useState } from 'react';
import './MobileMenu.scss';
import MobileMenuButton from './MobileMenuButton/MobileMenuButton';
import Dropdown from './Dropdown/Dropdown';

const MobileMenu = () => {
    const [ dropdownWillUnmount, setDropdownWillUnmount ] = useState(false);
    const [ iconClicked, setIconClicked ] = useState(false);
    const showDropdown = iconClicked ? <Dropdown goingToUnmount={dropdownWillUnmount} /> : null;

    const mountUnmountHandler = (iconClicked) => {
        if(iconClicked) {
            setDropdownWillUnmount(true);
            setTimeout(() => {
                setIconClicked(false);
                setDropdownWillUnmount(false);
            }
            , 600);
        } else if (!iconClicked) {
            setIconClicked(true);
        }
    };

    return(
        <div className="MobileMenu">
            <MobileMenuButton active={iconClicked} clicked={() => mountUnmountHandler(iconClicked)} />
            {showDropdown}
        </div>
    );
}

export default MobileMenu;