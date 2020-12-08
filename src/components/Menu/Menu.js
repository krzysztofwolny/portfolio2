import React from 'react';
import displayLanguage from '../../translations/translations';
import './Menu.scss';
import MenuItem from './MenuItem/MenuItem';

const Menu = () => {
    const text = displayLanguage();
    return(
    <nav className="menu">
        <ul className="menu__nav">
            <MenuItem iconName="icon-user" itemName={text.MenuItem_itemName_AboutMe} />
            <MenuItem iconName="icon-rocket" itemName={text.MenuItem_itemName_Stack} />
            <MenuItem iconName="icon-image" itemName={text.MenuItem_itemName_Gallery} />
            <MenuItem iconName="icon-laptop" itemName={text.MenuItem_itemName_WebDev} />
            <MenuItem iconName="icon-paper-plane" itemName={text.MenuItem_itemName_Contact} />
        </ul>
    </nav>
    );
}

export default Menu;