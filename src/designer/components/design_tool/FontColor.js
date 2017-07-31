import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Col, Button, Overlay } from 'react-bootstrap';
import { ChromePicker, SketchPicker } from 'react-color';

class FontColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    }
  }
  handleClick() {
    this.setState({
      show: !this.state.show
    });
  }
  changeColor(color) {
    return this.props.onChangeFontColor(color.hex, this.props.id);
  }
  render() {
    return (
      <Col md={4}>
        <Button ref="FontColor"
          onClick={() => this.handleClick()} className='step2Button'>
          TEXT COLOR
        </Button>
        <Overlay show={this.state.show}
          onHide={() => this.setState({show: false})}
          rootClose={true}
          container={this}
          placement='right'
          target={() => ReactDOM.findDOMNode(this.refs.FontColor)}>
          <SketchPicker disableAlpha={true} color={ this.props.selectedTextColor } onChange={(color) => this.changeColor(color)}/>
        </Overlay>
      </Col>
    );
  }
}

export default FontColor;
