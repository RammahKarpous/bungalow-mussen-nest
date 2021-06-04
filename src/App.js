import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navigation from './components/navigation/Navigation';
import OpenNav from './components/navigation/OpenNav';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <OpenNav />

      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
