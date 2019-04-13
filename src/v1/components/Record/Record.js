import React, { Component } from 'react'
import Header from '../Header';
import CreateRecord from './CreateRecord';
import ListRecord from './ListRecord';
import {
  Row,
  Col
} from 'reactstrap';

class Record extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Row className='mt-2'>
          <Col sm={6}>
            <CreateRecord />
          </Col>
          <Col sm={6}>
          <ListRecord />
          </Col>
        </Row>
        </React.Fragment>
    )
  }
}

export default Record
