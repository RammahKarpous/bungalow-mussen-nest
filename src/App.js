import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navigation from './components/navigation/Navigation';
import Home from './pages/Home';

function App() {

  return (
    <BrowserRouter>
      <Navigation />

      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
