import React from 'react';
import './App.css';
import './css/styles.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/sections/About';
import Products from './components/sections/Products';
import GoFundMe from './components/sections/GoFundMe';
import Team from './components/sections/Team';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact';
import Request from './components/sections/Request';
import { BrowserRouter, Route, Link } from 'react-router-dom';
class App extends React.Component {
	renderContent = () => (
		<div>
			<Link to="/request">
				<button class="ui instagram fluid button">
					<i class="hand point right icon" style={{ marginRight: '3px' }} />
					Create a new request
					<i class="hand point left   icon" style={{ marginLeft: '2.5px' }} />
				</button>
			</Link>
			<About />
			<Products />
			<GoFundMe />
			<Team />
		</div>
	);
	render() {
		return (
			<div className="App">
				<Navbar />
				<Header />
				<BrowserRouter>
					<div className="container">
						<Route path="/" exact component={this.renderContent} />
						<Route path="/request" exact component={Request} />
					</div>
				</BrowserRouter>
				<Contact />
			</div>
		);
	}
}

export default App;
