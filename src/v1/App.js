import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './interceptor';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';
import {
  Container,
  Alert
} from 'reactstrap';
import {
  storeEmailToken
} from './actions/signin.actions';

const AlertWrapper = ({ message, error }) => {
  if (message) {
    return <Alert className='text-center' color='success'>{message}</Alert>
  } else if (error) {
    return <Alert className='text-center' color='danger'>{error}</Alert>
  } else {
    return '';
  }
}

class App extends Component {

  componentDidMount() {
    const { storeEmailToken } = this.props;
    storeEmailToken();
  }

  render() {
    const { error, message } = this.props;
    return (
      <Fragment>
        {(message || error) && <AlertWrapper message={message} error={error} />}
        <Container>

          <Main />
        </Container>
      </Fragment>
    );
  }
};

const mapStateToProps = state => {
  console.log('this: ', this);
  console.log('mapStateToProps / app.js', state);
  const { message, error } = state.alert;
  return { message, error };
}

const actions = {
  storeEmailToken
}

export default connect(mapStateToProps, actions)(App);
