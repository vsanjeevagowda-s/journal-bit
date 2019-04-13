import React, { Component } from 'react'
import {
  Form,
  FormGroup,
  Label,
  Input,
  Collapse,
  Row,
  Col,
  Button
} from 'reactstrap';



class CreateRecord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createRecordFormOpen: true
    }
  }

  createRecordForm = () => {
    const { createRecordFormOpen } = this.state;
    this.setState({
      createRecordFormOpen: !createRecordFormOpen
    })
  }

  render() {
    const { createRecordFormOpen } = this.state;
    return (
      <Row>
        <Col>
          <Button onClick={this.createRecordForm} color="primary" block>Create Record</Button>
          <div>
            <Collapse style={{ height: '100vh', overflow: 'scroll' }} isOpen={createRecordFormOpen}>

              <Form>
                <Row form>
                  <Col sm={6} xs={6}>
                    <FormGroup>
                      <Label for="exampleEmail">Date</Label>
                      <Input type="date" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </FormGroup>
                  </Col>
                  <Col sm={6} xs={6}>
                    <FormGroup>
                      <Label for="exampleEmail">Wake up time</Label>
                      <Input type="time" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </FormGroup>
                  </Col>
                  <Col xs={12} sm={8}>
                    <FormGroup>
                      <Label for="exampleEmail">Morning food</Label>
                      <Input type="text" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </FormGroup>
                  </Col>
                  <Col xs={12} sm={4}>
                    <FormGroup>
                      <Label for="exampleEmail">Went Outside</Label>
                      <Input type="select" name="select" >
                        <option>YES</option>
                        <option>NO</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col xs={12} sm={12}>
                    <FormGroup>
                      <Label for="exampleEmail">Went outside details</Label>
                      <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
              <p></p>
            </Collapse>
          </div>
        </Col>
      </Row>
    )
  }
}

export default CreateRecord;