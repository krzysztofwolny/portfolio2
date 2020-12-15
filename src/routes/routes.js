import React from 'react';
import AboutMe from '../components/AboutMe/AboutMe';
import Stack from '../components/Stack/Stack';
import Contact from '../components/Contact/Contact';
import ControlPanel from '../containers/ControlPanel/ControlPanel';

const routes = {
    "/": () => <div className="container"><ControlPanel /><AboutMe /></div>,
    "/stack": () => <div className="container"><ControlPanel /><Stack /></div>,
    "/contact": () => <div className="container"><ControlPanel /><Contact /></div>,
};

export default routes;