import React from 'react';
import './Hobby.scss';

import HobbyItem from './HobbyItem/HobbyItem';

import displayLanguage from '../../../translations/translations';

const Hobby = () => {
    const text = displayLanguage();

    return(
        <div className="hobby">
            <p className="hobby__label">{text.Hobby_label}</p>
            <div className="hobby__after"></div>
            <div className="hobby__items">
                <HobbyItem iconName="icon-embed2" itemName={text.HobbyItem_itemName_Coding} />
                <HobbyItem iconName="icon-pencil2" itemName={text.HobbyItem_itemName_Graphics} />
                <HobbyItem iconName="icon-camera" itemName={text.HobbyItem_itemName_Photography} />
                <HobbyItem iconName="icon-library" itemName={text.HobbyItem_itemName_History} />
                <HobbyItem iconName="icon-sphere" itemName={text.HobbyItem_itemName_Physics} />
                <HobbyItem iconName="icon-brightness-contrast" itemName={text.HobbyItem_itemName_Astronomy} />
            </div>
        </div>
    );
}

export default Hobby;