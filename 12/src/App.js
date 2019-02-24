import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import Recipes from './components/Recipes/Recipes';
import AddRecipe from './components/AddRecipe/AddRecipe';
import Recipe from './components/Recipe/Recipe';
import { auth } from './firebaseConfig/firebase';




class App extends Component {

  state = {
    isUser: false,
    user: {}

  }
  componentDidMount = () => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ isUser: true, user })
      } else {
        this.setState({ isUser: false })
      }
    })
  }

  render() {
    return <Router>
      <>
        <Route path="/" exact render={(props)=><Home {...props} {...this.state} />}></Route>
        <Route path="/recipes" render={(props) => <Recipes {...props} {...this.state} />}></Route>
        <Route path="/addrecipe" component={AddRecipe}></Route>
        <Route path="/recipe/:id?" render={(props) => <Recipe {...props} {...this.state} />}></Route>
      </>
    </Router>
  }
}

export default App;
