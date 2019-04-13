import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
import Signin from '../Signin';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Signin} />
      </Switch>
    )
  }
}

export default Main;
