import React, { useState } from 'react';
import './WebApps.scss';
import DisplayTags from './DisplayTags/DisplayTags';
import DisplayWorks from './DisplayWorks/DisplayWorks';

const WebApps = () => {
    const [tagsState, setTagsState] = useState([]);
    const [myWorks, setMyWorks] = useState([
        {
            workID: 1,
            workName: 'glosscosmetics.no',
            tags: ['prestashop', 'commercial', 'html', 'react'],
            display: true
        },
        {
            workID: 2,
            workName: 'glosskurssenter.no',
            tags: ['wordpress', 'commercial', 'css'],
            display: true
        },
        {
            workID: 3,
            workName: 'burger builder app',
            tags: ['react', 'javascript', 'own project', 'css'],
            display: true
        },
    ]);
    const [freshTagsState, setFreshTagsState] = useState(true);

    const tagsInputCreator = (worksInput) => {
        const tagsArray = [];
        worksInput.map(el => {
            el.tags.map( tag => {
                tagsArray.push(tag);
            });
        });
        return tagsArray;
    };

    const uniqueTagsFilter = () => {
        const copyMyWorks = [...myWorks];
        const uniqueTags = tagsInputCreator(copyMyWorks).filter((el, index, self) => {
            return index === self.indexOf(el);
        });
        return uniqueTags;
    };

    const chooseTagsHandler = (choosenTagName) => {
        const tagsStateCopy = [...tagsState];
        if(tagsStateCopy.includes(choosenTagName)) {
            const tagIndex = tagsStateCopy.indexOf(choosenTagName);
            tagsStateCopy.splice(tagIndex, 1);   
            setTagsState([...tagsStateCopy]);
        } else {
            tagsStateCopy.push(choosenTagName);
            setTagsState([...tagsStateCopy]);
        };
    };

    console.log(tagsState);

    return(
        <div className="webApps">
            <DisplayTags tagsToDisplay={uniqueTagsFilter()} chooseTags={chooseTagsHandler}/>
            <DisplayWorks />
        </div>
    );
};

export default WebApps;