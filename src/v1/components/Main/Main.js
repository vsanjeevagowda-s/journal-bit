import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import Signin from '../Signin';
import Record from '../Record';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={(props) => {
    if (localStorage.getItem('token')) {
      return <Component {...props} />
    } else {
      return <Redirect to='/' />
    }
  }
  } />
}
const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Signin} />
      <PrivateRoute exact path="/records" component={Record} />
    </Switch>
  )
}

export default Main;
