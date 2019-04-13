import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './interceptor';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';
import {
  Container,
  Alert,
  Spinner,
  Row,
  Col
} from 'reactstrap';


const styles = {
  'spinner-align': {
    'display': 'flex',
    'height': '100vh',
    'alignItems': 'center',
    'justifyContent': 'center'
  }
}


const LoadingSpinner = () => {
  return (
    <Row>
      <Col xs={12} sm={12} style={styles["spinner-align"]}>
        <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />
      </Col>
    </Row>
  )
}

const AlertWrapper = ({ message, error }) => {
  if (message) {
    return <Alert className='text-center mb-0' color='success'>{message}</Alert>
  } else if (error) {
    return <Alert className='text-center mb-0' color='danger'>{error}</Alert>
  } else {
    return '';
  }
}

class App extends Component {

  render() {
    const { error, message, pending } = this.props;
    return (
      <Fragment>
        {(message || error) && <AlertWrapper message={message} error={error} />}
        <Container fluid>
          {pending ? <LoadingSpinner /> : <Main />}
        </Container>

      </Fragment>
    );
  }
};

const mapStateToProps = state => {
  console.log('this: ', this);
  console.log('mapStateToProps / app.js', state);
  const { message, error } = state.alert;
  const { pending } = state.helper;
  return { message, error, pending };
}


export default connect(mapStateToProps, null)(App);
