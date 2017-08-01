import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col, Button, DropdownButton, MenuItem } from 'react-bootstrap';

import { StepTitle } from './CPBody';
import PresntStep2 from '../containers/Step2Presnt';
import ModifText from '../containers/ModifText';
import ModifColor from './ModifColor';
import ModifImage from './ModifImage';

// Step2 Class: main component for step2
// Step2 is design tool, including two parts: design part and modification part
class Step2 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Row>
          <Col sm={6} md={6}>
            <StepTitle>STEP2: CUSTOMIZE YOUR BAND</StepTitle>
          </Col>
          <Col sm={6} md={6}>
            <h3 className='dragItemsTo'>Drag Items to Position on Label</h3>
          </Col>
        </Row>
        <PresntStep2 designBackground = {this.props.design_background} />
        <Step2Modif />
      </div>
    );
  }
}

// Step2 Modificatio part main component
// Step2Modif includes three parts: modify text, modify image color, and upload/delete image
class Step2Modif extends Component {
  render() {
    return (
      <Row>
        <Col sm={6} md={6}>
          <ModifText>1.TEXT</ModifText>
        </Col>
        <Col sm={6} md={3}>
          <ModifColor>2.COLOR</ModifColor>
        </Col>
        <Col sm={6} md={3}>
          <ModifImage>3.OPTIONAL IMAGE OR LOGO</ModifImage>
        </Col>
      </Row>
    );
  }
}

export default Step2;