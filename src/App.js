import React, { Component } from 'react'
import {Switch,Route} from "react-router-dom";

import Home from './components/Home';
import Post from './components/Post';

class App extends Component {
  render() {
    return (
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/post" component={Post}/>
      </Switch>
    );
  }
}

export default App;



 
