import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navigation from './components/Navigation';
import Home from './pages/Home';

function App() {

  return (
    <BrowserRouter>
      <div className="grid grid-cols-5 min-h-full h-full">
        <Navigation />

        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
