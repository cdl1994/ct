import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

class InsertText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      insertData: this.props.selectedText,
    }
  }
  
  handleChange(event) {
    // this.setState({
    //   insertData: event.target.value
    // });
    if (this.props.functionType == "ADD") {
      this.props.onChangeAddText(event.target.value);
    } else {
      if (event.target.value == "") {
        this.props.onChangeDeleteText(this.props.id);
      } else {
        this.props.onChangeTextContent(event.target.value, this.props.id);
      }
    }
  }

  render() {
    console.log(this.props);
    return (
      <Col md={12}>
        <input type="text" 
          placeholder='&nbsp;&nbsp;Insert Your Text Here'
          className='textInput'
          value={this.props.selectedText}
          onChange={(event) => this.handleChange(event)} />
      </Col>
    );
  }
}

export default InsertText;