import React, { useState } from 'react';
import './Tag.scss';

const Tag = ({tagName, clickFunc}) => {
    const [checked, setChecked] = useState(false);

    const checkTag = () => {
        clickFunc(tagName);
        setChecked(!checked);
    }

    const tagClass = checked ? 'tag tag__active' : 'tag';

    return(
        <div className={tagClass} onClick={() => checkTag()}>
            <p className="tag__name">#{tagName}</p>
        </div>
    );
};

export default Tag;