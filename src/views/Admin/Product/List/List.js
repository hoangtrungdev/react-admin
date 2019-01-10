import React, { Component } from 'react';
import { database, snapshotToArray } from "../../../../firebaseModule.js";
import ModalDetail from "./components/ModalDetail";
import numeral from 'numeral';

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'

import toastr from 'toastr'
import 'toastr/build/toastr.min.css'

import { Row, Button, Table } from 'reactstrap';


class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalEdit: false ,
      currentItem : {},
      arrayProduct : []
    };
    this.toggleModalEdit = this.toggleModalEdit.bind(this);
    this.setCurrentItem = this.setCurrentItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);


  }
  componentDidMount() {
    database.ref("products").on('value', (snapshot) => {
      this.setState({
        arrayProduct: snapshotToArray(snapshot)
      });
    });
  }

  componentWillUnmount() {
    database.ref("products").off('value');
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
      currentItem: JSON.parse(JSON.stringify(item))
    });
  }
  deleteItem(item){
    confirmAlert({
      title: 'Xác nhận xóa !!!!',
      message: 'Bạn thực sự muốn xóa thông tin này .',
      buttons: [
        {
          label: 'Có',
          onClick: () => database.ref('products/' + item.key).remove( (error) => {
            if (error) {
              toastr.error(`Xóa không thành công !`, 'Thông Báo !');
            } else {
              toastr.success(`Xóa thành công !`, 'Thông Báo !');
            }
          })
        },
        {
          label: 'Không'
        }
      ]
    })
  }

  // render từng dòng
  loadList(array){
    return array.map( (item, index) => {
      return (
        <tr key={index}>
          <td className="text-center">{index + 1}</td>
          <td>{item.name}</td>
          <td>{item.color}</td>
          <td className="text-center">{numeral(item.inprice).format('0,0')}</td>
          <td className="text-center">{numeral(item.price).format('0,0')}</td>
          <td className="text-center">{numeral(item.sale_price).format('0,0')}</td>
          <td className="text-center">
            <Button color="primary" size="sm" onClick={ () => { this.setCurrentItem(item); this.toggleModalEdit() } } title="Chỉnh sửa"><i className="	icon-wrench"></i></Button>
            <Button color="danger" size="sm" onClick={ this.deleteItem.bind(this, item) } title="Xóa"><i className="	icon-trash" ></i></Button>
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
