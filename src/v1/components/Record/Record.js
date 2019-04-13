import React, { Component } from 'react'
import Header from '../Header';
import {
  Row,
  Col
} from 'reactstrap';

class Record extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Row>
          <Col sm={4}>
            Create record
          </Col>
          <Col sm={8}>
          List record
          </Col>
        </Row>
        </React.Fragment>
    )
  }
}

export default Record
