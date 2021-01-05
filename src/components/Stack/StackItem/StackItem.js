import React from 'react';
import './StackItem.scss';
import * as logos from '../../../assets/img/stack';

const StackItem = (props) => {
    const imgSrc = logos.images[props.image].default;
    return(
        <div className="stackItem">
            <img src={imgSrc} alt={"this is " + props.name + " logo"} className="stackItem__img"></img>
        </div>
    );
};

export default StackItem;
