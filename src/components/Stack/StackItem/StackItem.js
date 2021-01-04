import React from 'react';
import Stack from '../Stack';
import './StackItem.scss';

const StackItem = (props) => {
    return(
        <div className="stackItem">
            {props.image}
            {props.name}
        </div>
    );
};

export default StackItem;
