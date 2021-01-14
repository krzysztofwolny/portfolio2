import React from 'react';
import './WorkItem.scss';
import displayLanguage from '../../../../translations/translations';
import * as screens from '../../../../assets/img/WebApps';

const WorkItem = ({work, rerender}) => {
    const text = displayLanguage();
    const imgSrc = screens.images[work.img].default;
    const printTags = () => {
        return work.tags.map( el => {
                return(
                    <div key={el} className="workItem__tag">
                        <p>#{el}</p>
                    </div>
                );
            });
    };

    let rerenderItemOnChoose = rerender ? " workItem__rerender" : " workItem__rerender1";

    const deactivateButtonLive = work.liveLink != null ? null : "workItem__button-inactive";
    const deactivateButtonGithub = work.githubLink != null ? null : "workItem__button-inactive";

    return(
        <div className={"workItem" + rerenderItemOnChoose}>
            <img src={imgSrc} alt={"this is " + work.workName + " screen"} className="workItem__screen"></img>
            <p className="workItem__desc">{text[work.description]}</p>
            <div className="workItem__buttons">
                <button className={"workItem__button " + deactivateButtonLive}><a href={work.liveLink} target="_blank" rel="noreferrer">Live</a></button>
                <button className={"workItem__button " + deactivateButtonGithub}><a href={work.githubLink} target="_blank" rel="noreferrer">Github</a></button>
            </div>
            <div className="workItem__tags">
                {printTags()}
            </div>
        </div>
    );
};

export default WorkItem;