import React, { Component } from 'react';
import { Col, FormGroup, FormControl } from 'react-bootstrap';
import Select from 'react-select';


class FontSize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontSizeOptions: [
        {value:'12', label:"12"},
        {value:'13', label:"13"}, 
        {value:'14', label:"14"}, 
        {value:'18', label:"18"}, 
        {value:'24', label:"24"}, 
        {value:'36', label:"36"}, 
        {value:'48', label:"48"}, 
        {value:'64', label:"64"}, 
        {value:'72', label:"72"}, 
        {value:'96', label:"96"}
      ]
    };
  }
  // componentWillMount() {
  //   const size = [
      
  //   ];
  //   this.setState({
  //     fontSize: size
  //   });
  // }
  handleChange(value) {
    return this.props.onChangeFontSize(value, this.props.id);
  }
  render() {
    // const sizeList = this.state.fontSize.map((value) => {
    //   var fontStyle = {
    //     fontSize: value
    //   };
    //   return (<option value={value}>{value}</option>);
    // });
    return (
      <Col md={4}>
        <Select name="form-field-name"
          placeholder="Font Size"
          value={this.props.selectedTextSize}
          options={this.state.fontSizeOptions}
          onChange={(value) => this.handleChange(value)}
          simpleValue
          searchable={true}
          matchPos="start" />
      </Col>
    );
    // return (
    //   <Col md={4}>
    //     <FormGroup controlId="formControlsSelect" onChange={(event) => this.handleChange(event)}>
    //       <FormControl componentClass="select">
    //         <option value="select">Font Size</option>
    //         {sizeList}
    //       </FormControl>
    //     </FormGroup>
    //   </Col>
    // );
  }
}

// FontSize.propTypes = {
//   onChangeFontSize: PropTypes.func.isRequired
// }

export default FontSize;