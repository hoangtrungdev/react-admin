import React, { Component } from 'react';
import { database } from "../../../../../../firebaseModule.js";

import toastr from 'toastr'
import 'toastr/build/toastr.min.css'

import numeral from 'numeral';

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




  handleChangeDetailInfo(key) {
    return (event) => {
      let value = event.target.value;
      if(['inprice', 'price', 'sale_price'].includes( key )){
        let valueFormat = value.replace(new RegExp(',', 'g'), '');
        this.state.detailInfo[key] = valueFormat;
        event.target.value = numeral(valueFormat).format('0,0');
      } else {
        this.state.detailInfo[key] = value;
      }
      this.setState({detailInfo: this.state.detailInfo});
    }
  }
  handleSubmit() {
      database.ref('products/' + this.props.currentItem.key).update(this.state.detailInfo, (error) => {
        if (error) {
          toastr.error(`Cập nhật không thành công !`, 'Thông Báo !');
        } else {
          this.props.toggleModalEdit();
          toastr.success(`Cập nhật thành công !`, 'Thông Báo !');
        }
      })

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
                  <Input type="text" placeholder="Name"  defaultValue={this.props.currentItem.name} onChange={this.handleChangeDetailInfo('name')} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label className="control-label" sm={2}>color</Label>
                <Col sm={10}>
                  <Input type="text" placeholder="color" defaultValue={this.props.currentItem.color}  onChange={this.handleChangeDetailInfo('color')} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label className="control-label" sm={2}>inprice</Label>
                <Col sm={10}>
                  <Input type="text" placeholder="brand"  defaultValue={numeral(this.props.currentItem.inprice).format('0,0')} onChange={this.handleChangeDetailInfo('inprice')} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label className="control-label" sm={2}>price</Label>
                <Col sm={10}>
                  <Input type="text" placeholder="brand"  defaultValue={numeral(this.props.currentItem.price).format('0,0')}  onChange={this.handleChangeDetailInfo('price')} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label className="control-label" sm={2}>sale_price</Label>
                <Col sm={10}>
                  <Input type="text" placeholder="brand"  defaultValue={numeral(this.props.currentItem.sale_price).format('0,0')}  onChange={this.handleChangeDetailInfo('sale_price')} />
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
