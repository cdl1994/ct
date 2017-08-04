import React, { Component } from 'react';
import { Col, FormGroup, FormControl } from 'react-bootstrap';
import Select from 'react-select';

class ChooseFont extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontData: []
    };
  }
  componentWillMount() {
    const url = 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyA__ZQ9MxzyhcA8OX-ZcNG8FkveTEmvzsM';
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const fontItems = data['items'];
        this.setState({
          fontData: fontItems
        });
      })
      .catch((error) => console.error(error));
  }
  handleChange(value) {
    return this.props.onChangeFont(value, this.props.id);
  }
  render() {
    const fontList = this.state.fontData.map((value) => {
      return {value:value.family, label:value.family}
    });
    var fontLinkList = this.state.fontData.reduce((font, value) => 
      font + value.family + "|", "");
    fontLinkList = fontLinkList.replace(/\s/g,'+');
    var link = fontLinkList == "" ? null : 
      <link href={"https://fonts.googleapis.com/css?family="+fontLinkList} type="text/css" rel="stylesheet"/>;
    return (
      <Col md={12}>
        <Select name="formControlsSelect"
          placeholder="Choose Your Font"
          value={this.props.selectedTextFont}
          options={fontList}
          onChange={(value) => this.handleChange(value)}
          simpleValue
          searchable={true}
          matchPos="start" />
        {link}
      </Col>
    );
  }
}

export default ChooseFont;
