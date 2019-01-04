import React, { Component } from 'react';
import { database } from "../../../../../../firebaseModule.js";

import toastr from 'toastr'
import 'toastr/build/toastr.min.css'


import { Button,
  Modal, ModalHeader, ModalBody, ModalFooter,
  Col, Form, FormGroup, Label, Input
} from 'reactstrap';


class ModalDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailInfo : {}
    };
    toastr.options = {
      hideDuration: 300,
      timeOut: 5000
    };
    this.handleChangeDetailInfo = this.handleChangeDetailInfo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentWillReceiveProps(nextProps) {
    let detailInfo = JSON.parse(JSON.stringify(nextProps.currentItem));
    this.setState({ detailInfo: detailInfo });
  }

  handleChangeDetailInfo(key) {
    return (event) => {
      this.state.detailInfo[key] = event.target.value;
      this.setState({detailInfo: this.state.detailInfo});
    }
  }
  handleSubmit() {
    database.ref('products/' + this.state.detailInfo.key).set(this.state.detailInfo, (error) => {
      if (error) {
      } else {
        toastr.success(`Cập nhật thành công !`, 'Thông Báo !');
        this.props.toggleModalEdit();
      }
    });
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
                  <Input type="text" placeholder="Name"  value={this.state.detailInfo.name} onChange={this.handleChangeDetailInfo('name')} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label className="control-label" sm={2}>color</Label>
                <Col sm={10}>
                  <Input type="text" placeholder="color" value={this.state.detailInfo.color}  onChange={this.handleChangeDetailInfo('color')} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label className="control-label" sm={2}>inprice</Label>
                <Col sm={10}>
                  <Input type="text" placeholder="brand"  value={this.state.detailInfo.inprice}  onChange={this.handleChangeDetailInfo('inprice')} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label className="control-label" sm={2}>price</Label>
                <Col sm={10}>
                  <Input type="text" placeholder="brand"  value={this.state.detailInfo.price}  onChange={this.handleChangeDetailInfo('price')} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label className="control-label" sm={2}>sale_price</Label>
                <Col sm={10}>
                  <Input type="text" placeholder="brand"  value={this.state.detailInfo.sale_price}  onChange={this.handleChangeDetailInfo('sale_price')} />
                </Col>
              </FormGroup>
            </Form>

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleSubmit}>Xác nhận</Button>
            <Button color="secondary" onClick={this.props.toggleModalEdit}>Thoát</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}
export default ModalDetail;
