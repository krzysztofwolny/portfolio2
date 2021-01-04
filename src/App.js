import './App.scss';
import routes from './routes/routes';
import { useRoutes } from 'hookrouter';

function App() {
  const routeResult = useRoutes(routes);
  return routeResult;
}

export default App;
