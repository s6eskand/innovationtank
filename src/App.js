import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
        <div className="App">
            <Navbar/>
            <Header/>
        </div>
    );
  }
}

export default App;
