import React from 'react'
import './ControlPanel.scss';
import SwitchLanguage from '../../components/SwitchLanguage/SwitchLanguage';
import Logo from '../../components/Logo/Logo';
import Menu from '../../components/Menu/Menu';



const ControlPanel = () => {
    return(
        <div className="controlPanel">
            <Logo />
            <Menu />
            <SwitchLanguage />
        </div>
    );
}

export default ControlPanel;