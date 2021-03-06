import React from 'react';
import './Menu.scss';
import MenuItem from './MenuItem/MenuItem';
import useMenuItemsList from '../../hooks/useMenuItemsList';

const Menu = () => {
    const itemsList = useMenuItemsList();
    const itemsGenerator = (itemsList) => {
       const output = Object.keys(itemsList).map(item => {
           return <MenuItem 
                    key={item} 
                    iconName={itemsList[item].iconName} 
                    itemName={itemsList[item].itemName} 
                    linkName={itemsList[item].linkName}
                    />
       }); 
       return output;
    }
    return(
    <nav className="menu">
        <ul className="menu__nav">
            {itemsGenerator(itemsList)}
        </ul>
    </nav>
    );
}

export default Menu;