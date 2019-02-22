import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import Recipes from './components/Recipes/Recipes';
import AddRecipe from './components/AddRecipe/AddRecipe';
import Recipe from './components/Recipe/Recipe';




class App extends Component {
  render() {
    return <Router>
      <>
        <Route path="/" exact component={Home}></Route>
        <Route path="/recipes" component={Recipes}></Route>
        <Route path="/addrecipe" component={AddRecipe}></Route>
        <Route path="/recipe/:id?" component={Recipe}></Route>
      </>
    </Router>
  }
}

export default App;
