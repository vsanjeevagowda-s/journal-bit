import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './interceptor';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';
import {
  Container,
  Alert
} from 'reactstrap';

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

export default connect(mapStateToProps, null)(App);
