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
      // let fontStyle = {
      //   fontFamily: value.family
      // };
      // return (<option value={value.family} style={fontStyle}>{value.family}</option>);
      return {value:value.family, label:value.family}
    });
    var fontLinkList = this.state.fontData.reduce((font, value) => 
      font + value.family + "|", "");
    fontLinkList = fontLinkList.replace(/\s/g,'+');
    
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
        <link href={"https://fonts.googleapis.com/css?family="+fontLinkList} type="text/css" rel="stylesheet"/>
      </Col>
    );
  }
}

export default ChooseFont;

// <FormGroup controlId="formControlsSelect" onChange={(event) => this.handleChange(event)}>
        //   <FormControl componentClass="select" defaultValue={this.props.selectedTextFont}>
        //     <option value="select">Choose Your Font</option>
        //     {fontList}
        //   </FormControl>
        // </FormGroup>


    // let linkElement = document.createElement("link")
    //   .setAttribute('href', "https://fonts.googleapis.com/css?family=" + fontLinkList)
    //   .setAttribute('type', 'text/css')
    //   .setAttribute('rel', 'stylesheet');
    // document.body.appendChild(linkElement);
    // console.log(linkElement);
    
    // ReactDOM.render(<CPBody />, document.getElementById('cpbody'));

    // !!!
    // let appendStr;
    // let len = 0;
    // let df=document.createDocumentFragment();
    //     var fonts=new Array();
    //     for(var j=0;j<fontArray.length;j++){
    //       fonts[j]=fontArray[j];
    //       if(len<100){
    //         appendStr+=fonts[j]+"|";
    //         len++;
    //       }
    //       if(len==100||j==fontArray.length-1){
    //         appendStr+=fonts[j];
    //         len=0;
    //         appendStr=appendStr.replace(/\s/g,'+');
    //         var ele=document.createElement("link");
    //         ele.setAttribute('href',fontString+appendStr);
    //         ele.setAttribute('type','text/css');
    //         ele.setAttribute('rel','stylesheet');
    //         df.appendChild(ele);
    //         appendStr="";
    //       }
    //     }
    //     document.body.appendChild(df);
    // !!!