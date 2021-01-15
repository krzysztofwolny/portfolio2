import './App.scss';
import { BrowserRouter, Route } from "react-router-dom";

import AboutMe from './components/AboutMe/AboutMe';
import Stack from './components/Stack/Stack';
import Contact from './components/Contact/Contact';
import ControlPanel from './containers/ControlPanel/ControlPanel';
import Gallery from './components/Gallery/Gallery';
import WebApps from './components/WebApps/WebApps';


const home = () => <AboutMe />;
const stack = () => <Stack />;
const contact = () => <Contact />;
const gallery = () => <Gallery />;
const webApps = () => <WebApps />;

function App() {
  //const routeResult = useRoutes(routes);
  return(
    <BrowserRouter basename="/portfolio">
      <div className="container">
        <ControlPanel />
        <Route exact path="/" component={home} />
        <Route path="/portfolio" component={home} />
        <Route path="/stack" component={stack} />
        <Route path="/gallery" component={gallery} />
        <Route path="/webapps" component={webApps} />
        <Route path="/contact" component={contact} />
      </div>
    </BrowserRouter>
  );
}

export default App;
