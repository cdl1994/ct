import React, { Component } from 'react';
import { Button, Col } from 'react-bootstrap';

class AddText extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      data: '',
    }
  }
  handleClick() {
    this.setState({
      show: !this.state.show
    });
  }
  handleChange(event) {
    this.setState({
      data: event.target.value
    })
  }
  handleCancel() {
    this.setState({
      show: false
    });
  }
  handleSubmit() {
    var data = this.state.data;
    this.setState({
      show: false,
      data: '',
    });
    this.props.onChangeAddText(data);
  }
  showInputText() {
    return (
      <Col md={6} className='inlineBlockDis'>
        <Button href="#" onClick={() => this.handleClick()} className='step2WhiteButton2'>ADD MORE TEXT</Button>
        <div>
          <input type="text" value={this.state.data} onChange={(event) => this.handleChange(event)} className='textInput'/>
          <Col md={4} mdOffset={4}>
            <Button onClick={() => this.handleSubmit()} className='step2Button'>ADD</Button>
          </Col>
          <Col md={4}>
            <Button onClick={() => this.handleCancel()} className='step2Button'>CANCEL</Button>
          </Col>
        </div>
      </Col>
    );
  }
  render() {
    if (this.state.show) {
      return this.showInputText();
    }
    return (
      <Col md={6}>
        <Button href="#" onClick={() => this.handleClick()} className='step2WhiteButton2'>ADD MORE TEXT</Button>
      </Col>
    );
  }
}


export default AddText;