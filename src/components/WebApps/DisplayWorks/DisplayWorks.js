import React from 'react';
import './DisplayWorks.scss';
import WorkItem from './WorkItem/WorkItem';

const DisplayWorks = (props) => {

    const printWorks = (works) => {
        return(
            works.map(el => {
                if(el.display) {
                    return(
                        <WorkItem work={el} />
                    );
                }
            })
        );
    }

    return(
        <div className="displayWorks">
            {printWorks(props.works)}
        </div>
    );
};

export default DisplayWorks;