import React, { Component } from 'react'
import {
  Row,
  Col
} from 'reactstrap';

class Header extends Component {
  render() {
    return (
        <Row className='bg-secondary text-white py-2 '>
          <Col sm={12}>
            <span className='h4'>Journal time</span>
          <span className='float-right'>logout</span>
          </Col>
        </Row>
    )
  }
}

export default Header;
