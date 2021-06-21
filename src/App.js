import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import SideNavigation from './components/SideNavigation';
import Gallerij from './pages/Gallerij';
import Tuin from './pages/gallerij/Tuin';
import Home from './pages/Home';
import Woonkamer from './pages/gallerij/Woonkamer';
import IncludeFooter from './components/templates/IncludeFooter';
import OverDeBungalow from './pages/OverDeBungalow';
import Contact from './pages/Contact';
import Keuken from './pages/gallerij/Keuken';
import Slaapkamer from './pages/gallerij/Slaapkamer';
import Badkamer from './pages/gallerij/Badkamer';
import Hal from './pages/gallerij/Hal';
import Activiteiten from './pages/Activiteiten';
import Toeristisch from './pages/activiteiten/Toeristisch';
import Winkels from './pages/activiteiten/Winkels';
import Horeca from './pages/activiteiten/Horeca';
import Reserveren from './pages/Reserveren';

function App() {
	return (
		<BrowserRouter>
			<div className="grid grid-cols-6 lg:grid-cols-8 min-h-full h-full">
				<SideNavigation />
				<AnimatePresence initial={false} exitBeforeEnter>
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

							<Route
								exact
								path="/gallerij/keuken"
								component={() => (
									<Gallerij active="Keuken">
										<Keuken />
									</Gallerij>
								)}
							/>

							<Route
								exact
								path="/gallerij/slaapkamer"
								component={() => (
									<Gallerij active="Slaapkamer">
										<Slaapkamer />
									</Gallerij>
								)}
							/>

							<Route
								exact
								path="/gallerij/badkamer"
								component={() => (
									<Gallerij active="Badkamer">
										<Badkamer />
									</Gallerij>
								)}
							/>

							<Route
								exact
								path="/gallerij/hal"
								component={() => (
									<Gallerij active="Hal">
										<Hal />
									</Gallerij>
								)}
							/>

							<Route exact path="/over-de-bungalow" component={OverDeBungalow} />
							<Route exact path="/reserveren" component={Reserveren} />

							<Route
								exact
								path="/activiteiten/winkels"
								component={() => (
									<Activiteiten active="Winkels">
										<Winkels />
									</Activiteiten>
								)}
							/>

							<Route
								exact
								path="/activiteiten/toeristisch"
								component={() => (
									<Activiteiten active="Toeristisch">
										<Toeristisch />
									</Activiteiten>
								)}
							/>

							<Route
								exact
								path="/activiteiten/horeca"
								component={() => (
									<Activiteiten active="Horeca">
										<Horeca />
									</Activiteiten>
								)}
							/>

							<Route exact path="/contact-ons" component={Contact} />
						</IncludeFooter>
					</Switch>
				</AnimatePresence>
			</div>
		</BrowserRouter>
	);
}

export default App;
