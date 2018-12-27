import React, { Component } from 'react';
import './App.css';
import {  Route, BrowserRouter as Router } from "react-router-dom"
import Home from './component/Home';
import Contact from './component/Contact';
import Products from "./component/Products";
import NavBar from "./component/NavBar";
import { MapView } from './component/MapView/MapView';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <>
            <Route path="/"  component={NavBar} />
            <Route path="/" exact component={Home} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Products/:productId?" component={Products} />
          </>
        </Router>
      </div>
    );
  }
}

export default App;
