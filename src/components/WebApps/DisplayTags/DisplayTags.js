import React from 'react';
import './DisplayTags.scss';
import Tag from './Tag/Tag';

const DisplayTags = ({tagsToDisplay, chooseTags}) => {
    const showTags = () => {
        const tags = tagsToDisplay.map( el => <Tag tagName={el} clickFunc={chooseTags} />)
        return tags;
    };

    return(
        <div className="displayTags">
            DisplayTags
            {showTags()}
        </div>
    );
};

export default DisplayTags;