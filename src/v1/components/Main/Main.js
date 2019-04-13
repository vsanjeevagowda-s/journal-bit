import React, { Component } from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import Signin from '../Signin';
import Record from '../Record';

const PrivateRoute = ({ component: Component, token, ...rest }) => {
  return <Route {...rest} render={(props) => {
    if (token) {
      return <Component {...props} />
    } else {
      return <Redirect to='/' />
    }
  }
  } />
}
class Main extends Component {
  render() {
    const { token } = this.props;
    return (
      <Switch>
        <Route exact path="/" component={Signin} />
        <PrivateRoute token={token} exact path="/records" component={Record} />
      </Switch>
    )
  }
}

const mapStateToProps = state => {
  console.log('mapStateToProps / Main', state);
  const { token } = state.signIn;
  return { token };
}

const actions = {}

export default connect(mapStateToProps, actions)(Main);
