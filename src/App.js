import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SideNavigation from './components/SideNavigation';
import Gallerij from './pages/Gallerij';
import Tuin from './pages/gallerij/Tuin';
import Home from './pages/Home';

function App() {

  return (
    <BrowserRouter>
      <div className="grid grid-cols-6 lg:grid-cols-8 min-h-full h-full">
        <SideNavigation />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/gallerij/tuin" component={() => 
            <Gallerij active="Tuin">
              <Tuin />
            </Gallerij>} />
            
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
