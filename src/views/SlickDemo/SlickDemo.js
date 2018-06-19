import React, { Component } from 'react';
import Slider from "react-slick";
import './SlickDemo.scss';
import {
  Row,
  Button,
  Col,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  Table
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
      arrayColor : ['blue' , 'white', 'red', 'green', 'yellow'],
      arraySlide : [
        {text : '1' , style : {backgroundColor : 'blue', color : 'white' , borderColor : 'red'}},
        {text : '2' , style : {backgroundColor : 'yellow', color : 'green' , borderColor : 'red'}},
        {text : '3' , style : {backgroundColor : 'green', color : 'red' , borderColor : 'blue'}},
      ]
    };
    this.addSlide = this.addSlide.bind(this);
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
  loadSlide(arraySlide){
    return arraySlide.map( (item, index) => this.renderSlide(item, index) );
  };
  renderSlide(item, index) {
    return (
      <div className="divSlider" key={index}>
        <h3 style={item.style}>{item.text}</h3>
      </div>
    );
  };
  loadListDetail(arraySlide) {
    let listDetail = arraySlide.map( (item, index) =>
      <tr key={index}>
        <td className="text-center">{index + 1}</td>
        <td>{item.text}</td>
        <td>{JSON.stringify( item.style )}</td>
      </tr>
    );
    return listDetail;
  }
  addSlide() {
    let backgroundColor = this.randomColor();
    let color = this.randomColor();
    let borderColor = this.randomColor();
    this.state.arraySlide.push({text :this.state.arraySlide.length + 1 , style : {backgroundColor : backgroundColor, color : color , borderColor : borderColor}});
    this.setState({arraySlide: this.state.arraySlide});
  }
  randomColor(){
    let arrayColor = this.state.arrayColor;
    return arrayColor[Math.floor(Math.random() * arrayColor.length)];
  }
  render() {
    return (
      <div className="animated fadeIn">
        <Slider {...this.state.settings} className="slider-content">
          {this.loadSlide(this.state.arraySlide)}
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
                <Table bordered responsive size="sm" className="border-collapse">
                  <thead>
                  <tr>
                    <th className="text-center">#</th>
                    <th>Text</th>
                    <th>style</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.loadListDetail(this.state.arraySlide)}
                  </tbody>
                </Table>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary" onClick={this.addSlide}><i className="fa fa-dot-circle-o"></i> Add slide</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default SimpleSlider;