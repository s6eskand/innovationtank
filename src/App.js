import React from 'react';
import './App.css';
import './css/styles.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Products from './components/Products';
import GoFundMe from './components/GoFundMe';
import Team from './components/Team';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "./components/Contact";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Navbar />
				<Header />
				<About />
				<Products />
				<GoFundMe />
				<Team />
				<Contact/>
			</div>
		);
	}
}

export default App;
