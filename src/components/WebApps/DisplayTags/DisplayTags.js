import React from 'react';
import './DisplayTags.scss';
import Tag from './Tag/Tag';
import displayLanguage from '../../../translations/translations';
import { setLinkProps } from 'hookrouter';

const DisplayTags = ({tagsToDisplay, chooseTags}) => {
    const text = displayLanguage();

    const showTags = () => {
        const tags = tagsToDisplay.map( el => <Tag key={el} tagName={el} clickFunc={chooseTags}/>)
        return tags;
    };

    return(
        <div className="displayTags">
            <p className="displayTags__mainLabel">{text.WebApps_mainLabel}</p>
            <div className="displayTags__tagsContainer">{showTags()}</div>
        </div>
    );
};

export default DisplayTags;