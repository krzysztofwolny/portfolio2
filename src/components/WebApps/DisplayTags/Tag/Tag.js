import React from 'react';
import './Tag.scss';

const Tag = ({tagName, clickFunc}) => {
    return(
        <div className="tag" onClick={() => clickFunc(tagName)}>
            <p>{tagName}</p>
        </div>
    );
};

export default Tag;