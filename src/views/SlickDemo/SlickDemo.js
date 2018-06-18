import React, { Component } from 'react';
import Slider from "react-slick";
import './SlickDemo.scss';
import {
  Row,
  Col,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Collapse,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from 'reactstrap';

class SimpleSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settings : {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
      },
      arraySlide : [
        {text : '1' , style : {backgroundColor : 'blue', color : '#DDD' , borderColor : 'red'}},
        {text : '2' , style : {backgroundColor : 'green', borderColor : 'yellow'}},
        {text : '3' , style : {backgroundColor : 'blue', color : 'red' , borderColor : 'yellow'}},
        {text : '4' , style : {backgroundColor : 'blue', color : 'red' , borderColor : 'yellow'}}
      ]
    };
  }
  loadSetting(objSetting){
    return Object.keys(objSetting).map(keyName =>this.renderSetting(keyName, objSetting[keyName]))
  };
  renderSetting(keyName, keyValue){
    return (
      <FormGroup row key={keyName}>
        <Col md="3">
          <Label htmlFor="hf-email">{keyName}</Label>
        </Col>
        <Col xs="12" md="9">
          <Input
            type="text"
            placeholder={'Enter ' + keyName}
            defaultValue={keyValue}
            keyname={keyName}
          />
          <FormText className="help-block">Please enter your {keyName}</FormText>
        </Col>
      </FormGroup>
    );
  };
  loadList(arraySlide){
    return arraySlide.map( (item, index) => this.renderSlide(item, index) );
  };
  renderSlide(item, index) {
    console.log(item)
    return (
      <div className="divSlider" key={index}>
        <h3 style={item.style}>{item.text}</h3>
      </div>
    );
  };
  render() {
    return (
      <div className="animated fadeIn">
        <Slider {...this.state.settings} className="slider-content">
          {this.loadList(this.state.arraySlide)}
        </Slider>
        <Row >
          <Col xs="12" md="4">
            <Card>
              <CardHeader>
                <strong>Setting</strong> Values
              </CardHeader>
              <CardBody>
                <Form  className="form-horizontal">
                  {this.loadSetting(this.state.settings)}
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="8">
            <Card>
              <CardHeader>
                <strong>Array Slide</strong>
              </CardHeader>
              <CardBody>
                <Form  className="form-horizontal">
                  {this.loadSetting(this.state.settings)}
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default SimpleSlider;