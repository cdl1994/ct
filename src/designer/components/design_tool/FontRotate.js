import React, { Component } from 'react';
import { Col, Button } from 'react-bootstrap';

class FontRotate extends Component {
  handleClickCW() {
    var degree = this.props.selectedTextRotate + 5;
    return this.props.onChangeDegree(degree, this.props.id);
  }
  handleClickCounterCW() {
    var degree = this.props.selectedTextRotate - 5;
    return this.props.onChangeDegree(degree, this.props.id);
  }
  render() {
    return (
      <Col md={4}>
        <p className='rotateText'>ROTATE</p>
        <Button href="#"
          onClick={() => this.handleClickCW()} className='step2Button'>
          &#8631;
        </Button>
        <Button href="#"
          onClick={() => this.handleClickCounterCW()} className='step2Button'>
          &#8630;
        </Button>
      </Col>
    );
  }
}


export default FontRotate;