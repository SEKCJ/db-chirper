import * as React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Chirps from './Components/chirps'
import FormPost from './Components/formpost';
import SingleChirp from './Components/singlechirp';
// import { RouteComponentProps } from 'react-router-dom'


const App: React.FC<blankProps> = props => {

	return (
		<Router>
			<Switch>
				<Route exact path="/post" component={FormPost} />
				<Route exact path="/admin/:id" component={SingleChirp}/>
				<Route path="/" component={Chirps} />
			</Switch>
		</Router>
	);

}

export interface blankProps {

}

export default App;
