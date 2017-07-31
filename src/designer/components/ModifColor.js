import React, { Component } from 'react';
import { SliderPicker, CirclePicker } from 'react-color';
import { Col } from 'react-bootstrap';
 import ColorPicker from '../containers/MyColorPicker';

class ModifColor extends Component {
  
  render() {
    return(
      <div>
        <p className='step2Title'>{this.props.children}</p>
        <ColorPicker />
      </div>
    );
  }
}

export default ModifColor;
