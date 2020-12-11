import React, { useState } from 'react';
import './MobileMenu.scss';
import MobileMenuButton from './MobileMenuButton/MobileMenuButton';
import Dropdown from './Dropdown/Dropdown';

const MobileMenu = () => {
    const [ iconClicked, setIconClicked ] = useState(false);
    const showDropdown = iconClicked ? <Dropdown /> : null;
    return(
        <div className="MobileMenu">
            <MobileMenuButton active={iconClicked} clicked={() => setIconClicked(!iconClicked)} />
            {showDropdown}
        </div>
    );
}

export default MobileMenu;