import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

import Dashboard from '../../views/Admin/Dashboard/';
import FirstDemo from '../../views/Admin/FirstDemo/';
import ProductList from '../../views/Admin/Product/List/';


class Full extends Component {

  render() {
    return (
      <div className="app">
        <Header/>
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb/>
            <Container fluid>
              <Switch>
                <Route path="/admin/first-demo" name="FirstDemo" component={FirstDemo}/>
                <Route path="/admin/product-list" name="ProductList" component={ProductList}/>
                <Route path="/admin" name="Dashboard" component={Dashboard}/>
                <Redirect from="/" to="/admin"/>
              </Switch>
            </Container>
          </main>
          <Aside/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Full;
