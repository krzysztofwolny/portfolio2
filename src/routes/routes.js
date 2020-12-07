import React from 'react';
import AboutMe from '../components/AboutMe/AboutMe';
import ControlPanel from '../containers/ControlPanel/ControlPanel';

const routes = {
    "/": () => <div className="container"><ControlPanel /><AboutMe /></div>,
};

export default routes;