import React, { Component } from 'react';
import { database, snapshotToArray } from "../../../../firebaseModule.js";
import ModalDetail from "./components/ModalDetail";


import {
  Row, Button, Table,
  Modal, ModalHeader, ModalBody, ModalFooter,
  Col, Form, FormGroup, Label, Input, FormText
} from 'reactstrap';


class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalEdit: false ,
      currentItem : {},
      arrayProduct : props.arrayProduct || []
    };
    this.toggleModalEdit = this.toggleModalEdit.bind(this);
    this.setCurrentItem = this.setCurrentItem.bind(this);


  }
  componentDidMount() {
    this.subscribeToFirebase();
  }
  // sự kiện hiện , tắt modal edit
  toggleModalEdit() {
    this.setState({
      modalEdit: !this.state.modalEdit
    });
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
  // sự kiện hiện , tắt modal edit
  setCurrentItem(item) {
    this.setState({
      currentItem: item
    });
  }
  // render từng dòng
  loadList(array){
    return array.map( (item, index) => {
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
            <Button color="primary" size="sm" onClick={ () => { this.setCurrentItem(item); this.toggleModalEdit() } } title="Chỉnh sửa"><i className="	icon-wrench"></i></Button>
            <Button color="danger" size="sm"  title="Xóa"><i className="	icon-trash" ></i></Button>
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

       <ModalDetail
         toggleModalEdit = {this.toggleModalEdit}
         modalEdit = {this.state.modalEdit}
         currentItem = {this.state.currentItem}
       />
      </div>
    )
  }
}
export default ProductList;
