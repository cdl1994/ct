import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

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
      <div className='inlineBlockDis'>
        <Button href="#" onClick={() => this.handleClick()} className='step2WhiteButton2'>ADD MORE TEXT</Button>
        <div>
          <input type="text" value={this.state.data} onChange={(event) => this.handleChange(event)} />
          <Button onClick={() => this.handleSubmit()}>ADD</Button>
          <Button onClick={() => this.handleCancel()}>CANCEL</Button>
        </div>
      </div>
    );
  }
  render() {
    if (this.state.show) {
      return this.showInputText();
    }
    return (
        <Button href="#" onClick={() => this.handleClick()} className='step2WhiteButton2'>ADD MORE TEXT</Button>

    );
  }
}


export default AddText;