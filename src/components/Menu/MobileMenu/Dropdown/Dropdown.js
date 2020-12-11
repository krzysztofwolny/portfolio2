import React from 'react';
import './Dropdown.scss';
import DropdownItem from './DropdownItem/DropdownItem';
import useMenuItemsList from '../../../../hooks/useMenuItemsList';

const Dropdown = () => {
    const itemsList = useMenuItemsList();

    const itemsGenerator = (itemsList) => {
        const output = Object.keys(itemsList).map(item => {
            console.log(itemsList[item].itemName);
            return <DropdownItem key={item} iconName={itemsList[item].iconName} itemName={itemsList[item].itemName} />
        }); 
        return output;
     }

    return(
        <div className="Dropdown">
            {itemsGenerator(itemsList)}
        </div>
    );
}

export default Dropdown;