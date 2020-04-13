import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Products from "./components/Products";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
        <div className="App">
            <Navbar/>
            <Header/>
            <About/>
            <Products/>
        </div>
    );
  }
}

export default App;
