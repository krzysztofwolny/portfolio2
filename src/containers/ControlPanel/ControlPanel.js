import React from 'react'
import './ControlPanel.scss';
import SwitchLanguage from '../../components/SwitchLanguage/SwitchLanguage';

import displayLanguage from '../../translations/translations';

const ControlPanel = () => {
    const text = displayLanguage();
    return(
        <div className="controlPanel">
            {text.test}
            <SwitchLanguage />
        </div>
    );
}

export default ControlPanel;