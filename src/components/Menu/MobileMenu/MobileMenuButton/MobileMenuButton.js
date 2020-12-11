import React from 'react';
import './MobileMenuButton.scss';

const MobileMenuButton = (props) => {
    const ifClicked = props.active ? "MobileMenuButton MobileMenuButton--active" : "MobileMenuButton";
    return(
        <div className="MobileMenuButton__wrap" onClick={props.clicked}>
            <span className={ifClicked}>
            </span>
        </div>

    );
}

export default MobileMenuButton;