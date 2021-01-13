import React from 'react';
import AboutMe from '../components/AboutMe/AboutMe';
import Stack from '../components/Stack/Stack';
import Contact from '../components/Contact/Contact';
import ControlPanel from '../containers/ControlPanel/ControlPanel';
import Gallery from '../components/Gallery/Gallery';
import WebApps from '../components/WebApps/WebApps';
import Footer from '../components/Footer/Footer';

const routes = {
    "/": () => <div className="container"><ControlPanel /><AboutMe /></div>,
    "/stack": () => <div className="container"><ControlPanel /><Stack /></div>,
    "/contact": () => <div className="container"><ControlPanel /><Contact /></div>,
    "/gallery": () => <div className="container"><ControlPanel /><Gallery /></div>,
    "/webapps": () => <div className="container"><ControlPanel /><WebApps /></div>,
};

export default routes;