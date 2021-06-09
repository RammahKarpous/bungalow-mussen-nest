import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SideNavigation from './components/SideNavigation';
import Gallerij from './pages/Gallerij';
import Tuin from './pages/gallerij/Tuin';
import Home from './pages/Home';
import Woonkamer from './pages/gallerij/Woonkamer';
import IncludeFooter from './components/templates/IncludeFooter';
import OverDeBungalow from './pages/OverDeBungalow';

function App() {
	return (
		<BrowserRouter>
			<div className="grid grid-cols-6 lg:grid-cols-8 min-h-full h-full">
				<SideNavigation />

				<Switch>
					<Route exact path="/" component={Home} />

					<IncludeFooter>
						<Route
							exact
							path="/gallerij/tuin"
							component={() => (
								<Gallerij active="Tuin">
									<Tuin />
								</Gallerij>
							)}
						/>

						<Route
							exact
							path="/gallerij/woonkamer"
							component={() => (
								<Gallerij active="Woonkamer">
									<Woonkamer />
								</Gallerij>
							)}
						/>

						<Route exact path="/over-de-bungalow" component={OverDeBungalow} />
					</IncludeFooter>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
