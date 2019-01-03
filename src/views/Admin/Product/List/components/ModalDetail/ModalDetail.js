import React, { Component } from 'react';


import { Button,
  Modal, ModalHeader, ModalBody, ModalFooter,
  Col, Form, FormGroup, Label, Input, FormText
} from 'reactstrap';


class ModalDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailInfo : {}
    };
    this.updateDetail = this.updateDetail.bind(this)
  }

  componentWillReceiveProps(nextProps) {
      this.setState({ detailInfo: nextProps.currentItem });
  }

  updateDetail() {
    console.log('aaaa', this.state.detailInfo);
  }

  render() {

    return (
      <div>
        <Modal isOpen={this.props.modalEdit} toggle={this.props.toggleModalEdit} className={'modal-lg'}>
          <ModalHeader toggle={this.props.toggleModalEdit}>Thông Tin Chi Tiết</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup row>
                <Label className="control-label" sm={2}>name</Label>
                <Col sm={10}>
                  <Input type="text" placeholder="Name"  defaultValue={this.state.detailInfo.name} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label className="control-label" sm={2}>color</Label>
                <Col sm={10}>
                  <Input type="text" placeholder="color" defaultValue={this.state.detailInfo.color}  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label className="control-label" sm={2}>brand</Label>
                <Col sm={10}>
                  <Input type="text" placeholder="brand" defaultValue={this.state.detailInfo.brand}   />
                </Col>
              </FormGroup>
            </Form>

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.updateDetail}>Xác nhận</Button>
            <Button color="secondary" onClick={this.props.toggleModalEdit}>Thoát</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}
export default ModalDetail;
