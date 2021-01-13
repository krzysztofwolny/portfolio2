import React, { useState, useEffect } from 'react';
import './WebApps.scss';
import DisplayTags from './DisplayTags/DisplayTags';
import DisplayWorks from './DisplayWorks/DisplayWorks';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

const WebApps = () => {
    const [tagsState, setTagsState] = useState([]);
    const [myWorks, setMyWorks] = useState([
        {
            workID: 1,
            workName: 'glosscosmetics.no',
            description: 'WebApps_work1_description',
            img: 'glosscosmetics.jpg',
            liveLink: 'https://www.glosscosmetics.no',
            githubLink: null,
            tags: ['prestashop', 'commercial', 'html', 'react'],
            display: true
        },
        {
            workID: 2,
            workName: 'scandiroom.no',
            description: 'WebApps_work2_description',
            img: 'scandiroom.jpg',
            liveLink: 'https://www.scandiroom.no',
            githubLink: 'link',
            tags: ['wordpress', 'commercial', 'css'],
            display: true
        },
        {
            workID: 3,
            workName: 'sweetkiddy.pl',
            description: 'WebApps_work3_description',
            img: 'sweetkiddy.jpg',
            liveLink: 'https://www.sweetkiddy.pl',
            githubLink: null,
            tags: ['react', 'javascript', 'own project', 'css'],
            display: true
        },
    ]);
    const [freshTagsState, setFreshTagsState] = useState(true);

    const [rerenderAllWorkItems, setRerenderAllWorkItems] = useState(true);

    const tagsInputCreator = (worksInput) => {
        const tagsArray = [];
        worksInput.map(el => {
            el.tags.map( tag => {
                return tagsArray.push(tag);
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
        setRerenderAllWorkItems(!rerenderAllWorkItems);
    };

    //set display property to true only for works which have tags that are choosen
    const prepWorksToDisplay = () => {
        if(tagsState.length > 0) {
            const copyMyWorks = [...myWorks];
            const copyTagsState = [...tagsState];
            let newState = [];
            copyMyWorks.map( el => {
                const check = copyTagsState.some(val => el.tags.indexOf(val) !== -1);
                if(check) {
                    const newItem = {
                        ...el,
                        display: true
                    };
                    return newState.push(newItem);
                } else {
                    const newItem = {
                        ...el,
                        display: false
                    };
                    return newState.push(newItem);
                }
            });
            setMyWorks(newState);
        }
    };
    //change all display properties to false if some tags are choosen and set them back to true if no tags are choosen
    const hideAllWorks = () => {
        const copyMyWorks = [...myWorks];
        if(tagsState.length > 0 && freshTagsState) {
            let newState = [];
            copyMyWorks.map(el => {
                const newEl = {
                    ...el,
                    display: false
                };
                return newState.push(newEl);
            });
            setMyWorks(newState);
            setFreshTagsState(false);
        } else if(tagsState.length === 0) {
            let newState = [];
            copyMyWorks.map(el => {
                const newEl = {
                    ...el,
                    display: true
                };
                return newState.push(newEl);
            });
            setMyWorks(newState);
            setFreshTagsState(true);
        };
    };

    useEffect(() => {
        hideAllWorks();
        prepWorksToDisplay();
    }, [tagsState]);

    console.log(rerenderAllWorkItems);

    return(
        <div className="webApps">
            <DisplayTags 
            tagsToDisplay={uniqueTagsFilter()} 
            chooseTags={chooseTagsHandler} />
            <DisplayWorks 
            works={myWorks}
            rerender={rerenderAllWorkItems} />
        </div>
    );
};

export default WebApps;