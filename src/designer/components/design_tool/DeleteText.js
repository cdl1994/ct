import React, { Component } from 'react';
import { Button, Col } from 'react-bootstrap';

class DeleteText extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     show: false,
  //     data: '',
  //   }
  // }
  handleClick(id) {
    this.props.onClickDeleteText(id);
    // var selectedID = this.findLargestID();
    // this.props.onChangeSelected(selectedID);
  }
  findLargestID() {
    var textList = this.props.textList;
    var maxID;
    if (textList == null || textList.length == 0) {
      maxID = null;
    } else {
      maxID = textList[0].id;
      for (var i = 0; i < textList.length; i++) {
        if (textList[i].isSelected === false && textList[i].id > maxID) {
          maxID = textList[i].id;
        }
      }
    }
    return maxID;
  }
  render() {
    return (
      <Col md={6}>
        <Button href="#" onClick={() => this.handleClick(this.props.id)} className='step2WhiteButton1'>DELETE TEXT</Button>
      </Col>
    );
  }

}

export default DeleteText;