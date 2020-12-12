import React from 'react'
import './ControlPanel.scss';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import SwitchLanguage from '../../components/SwitchLanguage/SwitchLanguage';
import Logo from '../../components/Logo/Logo';
import Menu from '../../components/Menu/Menu';
import MobileMenu from '../../components/Menu/MobileMenu/MobileMenu';



const ControlPanel = () => {
    const { width } = useWindowDimensions();



    return(
        <div className="controlPanel">
            {width >= 650 ? <React.Fragment><Logo /><Menu /><SwitchLanguage /></React.Fragment> : <React.Fragment><Logo /><SwitchLanguage /><MobileMenu /></React.Fragment>}
        </div>
    );
}

export default ControlPanel;