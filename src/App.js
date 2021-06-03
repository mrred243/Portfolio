import React from 'react';

import CoverPage from './views/CoverPage';
import MainPage from './views/MainPage';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

const App = () => {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path='/'>
						<Redirect to='/cover' />
					</Route>
					<Route exact path='/cover' component={CoverPage} />
					<Route exact path='/home' component={MainPage} />
					<Route render={() => <h1>Page not found</h1>} />
				</Switch>
			</Router>
		</>
	);
};

export default App;
