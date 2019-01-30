import React, { Component } from 'react';
import {Link, Route, BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Home from './components/Home/Home';
import Weather from './components/weather/Weather';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        <>
        <Route exact path="/" component={Home}/>
        <Route path="/weather/:place?" component={Weather} />
        </>
        </Router>
      </div>
    );
  }
}

export default App;
