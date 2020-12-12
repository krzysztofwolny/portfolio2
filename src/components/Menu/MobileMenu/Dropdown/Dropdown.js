import React, { useEffect } from 'react';
//import './Dropdown.scss';
import styled from 'styled-components';
import DropdownItem from './DropdownItem/DropdownItem';
import useMenuItemsList from '../../../../hooks/useMenuItemsList';

const Dropdown = (props) => {

    useEffect(() => {}, [props.goingToUnmount]);

    const itemsList = useMenuItemsList();

    const itemsGenerator = (itemsList) => {
        const output = Object.keys(itemsList).map(item => {
            console.log(itemsList[item].itemName);
            return <DropdownItem key={item} iconName={itemsList[item].iconName} itemName={itemsList[item].itemName} />
        }); 
        return output;
     };

     let Top1 = props.goingToUnmount ? '-55.8rem' : '5.8rem';
     let animation0a = props.goingToUnmount ? 'opacity: 1' : 'opacity: 0';
     let animation0b = props.goingToUnmount ? 'top: 5.8rem' : 'top: -55.8rem';
     let animation100a = props.goingToUnmount ? 'opacity: 0' : 'opacity: 1';
     let animation100b = props.goingToUnmount ? 'top: -55.8rem' : 'top: 5.8rem';
     

     let StyledDropdown = styled.div`
     background-color: black;
     box-shadow: -1px 2px 5px black;
 
     width: 50vw;
     position: absolute;
     top: ${Top1};
     right: -3rem;
 
     animation-name: dropdownEnter;
     animation-duration: .5s;
 
     display: flex;
     flex-direction: column;
     justify-content: center;
 
     @keyframes dropdownEnter {
         0% {
             ${animation0a};
             ${animation0b};
         }
         100% {
             ${animation100a};
             ${animation100b};
         }
     }

     @media only screen and (max-width: 29.125em) {
        width: 60vw;
    }
     `;

    return(
        <StyledDropdown>
            {itemsGenerator(itemsList)}
        </StyledDropdown>
    );
}

export default Dropdown;