import React, { Component } from 'react';
import { database, snapshotToArray } from "../../../firebaseModule";


import {
  Row,
  Button,
  Modal, ModalHeader, ModalBody, ModalFooter,
  Table
} from 'reactstrap';


class EFT extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalEdit: false ,
      arrayProduct : props.arrayProduct || []
    };
    this.toggleModalEdit = this.toggleModalEdit.bind(this);


  }
  componentDidMount() {
    this.subscribeToFirebase();
  }

  subscribeToFirebase() {
    // load data  from firebase
    database.ref("products").on('value', (snapshot) => {
      this.setState({
        arrayProduct: snapshotToArray(snapshot)
      });
    });
  }


  // sự kiện hiện , tắt modal edit
  toggleModalEdit() {
    this.setState({
      modalEdit: !this.state.modalEdit
    });
  }
  // render từng dòng
  loadList(array){
    return array.map( (item, index) => {
      console.log(item)
      return (
        <tr key={index}>
          <td className="text-center">{index + 1}</td>
          <td>{item.name}</td>
          <td>{item.brand}</td>
          <td>{item.color}</td>
          <td className="text-center">{item.inprice}</td>
          <td className="text-center">{item.price}</td>
          <td className="text-center">{item.sale_price}</td>
          <td className="text-center">
            <Button color="primary" size="sm"  onClick={this.toggleModalEdit}><i className="	icon-wrench"></i></Button>
            <Button color="danger" size="sm"><i className="	icon-trash"></i></Button>
          </td>
        </tr>
      );
    });


  };


  render() {


    return (
      <div className="animated fadeIn">
        <Row>
          <Table bordered responsive size="sm" className="border-collapse">
            <thead>
            <tr>
              <th className="text-center">#</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Color</th>
              <th className="text-center">Inprice</th>
              <th className="text-center">Price</th>
              <th className="text-center">Sale Price</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            {this.loadList(this.state.arrayProduct)}
            </tbody>
          </Table>
        </Row>

        {/* modal chỉnh sửa */}
        <Modal isOpen={this.state.modalEdit} toggle={this.toggleModalEdit} className={this.props.className}>
          <ModalHeader toggle={this.toggleModalEdit}>Thông Tin Chi Tiết</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleModalEdit}>Xác nhận</Button>
            <Button color="secondary" onClick={this.toggleModalEdit}>Thoát</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}
export default EFT;
