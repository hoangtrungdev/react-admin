import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import dataDemo from './_demo';

import {
  Row,
  Button,
  Modal, ModalHeader, ModalBody, ModalFooter,
  Table
} from 'reactstrap';


class FirstDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalEdit: false
    };
    this.toggleModalEdit = this.toggleModalEdit.bind(this);
  }

  // sự kiện hiện , tắt modal edit
  toggleModalEdit() {
    this.setState({
      modalEdit: !this.state.modalEdit
    });
  }

  render() {
    
    // render từng dòng
    const renderRow = (item, index) => {
      return (
        <tr key={index}>
          <td className="text-center">{index + 1}</td>
          <td>{item.title?'Title - ':''}{item.name}</td>
          <td>
            { item.url ? <span>{item.url} -- <NavLink to={item.url}>Go to page</NavLink></span> : ''}
            </td>
          <td>
            { item.icon ? <span><i className={item.icon}></i> --- {item.icon}</span> : ''}
          </td>
          <td className="text-center">
            <Button color="primary" size="sm"  onClick={this.toggleModalEdit}><i className="	icon-wrench"></i></Button>
            <Button color="danger" size="sm"><i className="	icon-trash"></i></Button>
          </td>
        </tr>
      );
    };

    // load list data
    const loadList = (items) => {
      return items.map( (item, index) => renderRow(item, index) );
    };

    return (
      <div className="animated fadeIn">
        <Row>
            <Table bordered responsive size="sm" className="border-collapse">
              <thead>
              <tr>
                <th className="text-center">#</th>
                <th>Name</th>
                <th>Url</th>
                <th>Icon</th>
                <th></th>
              </tr>
              </thead>
              <tbody>
               {loadList(dataDemo.items)}
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
            <Button color="primary" onClick={this.toggleModalEdit}>Xác nhận</Button>{' '}
            <Button color="secondary" onClick={this.toggleModalEdit}>Thoát</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}
export default FirstDemo;
