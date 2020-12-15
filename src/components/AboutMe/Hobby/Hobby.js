import React from 'react';
import './Hobby.scss';

import HobbyItem from './HobbyItem/HobbyItem';

const Hobby = () => {
    return(
        <div className="hobby">
            <HobbyItem iconName="icon-embed2" itemName="Hobby1" />
        </div>
    );
}

export default Hobby;