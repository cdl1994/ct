import React, { Component } from 'react';

import { connect } from 'react-redux'
import { Row, Col, Button, DropdownButton, MenuItem } from 'react-bootstrap';

import { StepTitle } from './CPBody';
import TextPresnt from '../containers/Step2Presnt';
import ModifText from '../containers/ModifText';
import ModifColor from './ModifColor';

// function reducer(state = {}, action) {
//   return action;
// }

// let store = createStore(reducer);


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
        <TextPresnt designBackground = {this.props.design_background} />
        <br />
        <br />
        <Step2Modif />
      </div>
    );
  }
}

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



// class ModifText extends Component {
//   render() {
//     return (
//       <div>
//         <p>{this.props.children}</p>
//         <TextFont />
//         <TextSize />
//         <TextRotate />
//         <Col xs={4} md={4}>
//           <TextColor />
//         </Col>
//         <Col xs={12} md={12}>
//           <DeleteText />
//           <TextAdd />
//         </Col>
//       </div>
//     );
//   }
// }





// class ModifColor extends Component {
//   render() {
//     return (
//       <div>
//         <p>{this.props.children}</p>
//       </div>
//     );
//   }
// }

class ModifImage extends Component {
  render() {
    return (
      <div >
        <p className='step2Title'>{this.props.children}</p>
        <Button className='step2ButtonBorder'>UPLOAD IMAGE OR LOGO</Button>
        <Button className='step2ButtonBorder'>SELECT FROM GALLERY</Button>
        <Button className='step2ButtonBorder'>DELETE SELECTED IMAGE</Button>
      </div>
    );
  }
}

export { Step2 };