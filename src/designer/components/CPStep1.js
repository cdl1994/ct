import React, { Component } from 'react';
import { Row, Col, Clearfix } from 'react-bootstrap';
import { StepTitle } from './CPBody';
import {connect} from 'react-redux';
import CategoryList from '../containers/chooseTemplate/step1CategoryContainer';
import TemplateList from '../containers/chooseTemplate/step1TemplateContainer';






class Step1 extends Component {
  constructor() {
    super();
  }

  showTemplate() {    
    return (
    <div>
      <StepTitle>STEP 1: CHOOSE YOUR TEMPLATE</StepTitle>
      <TemplateList />
      <Clearfix></Clearfix>
    </div>
    );
  }

  showCategoty() {  
    return (
    <div>
      <StepTitle>STEP 1: CHOOSE YOUR TEMPLATE</StepTitle>
      <CategoryList categoryData = {this.props.categoryData} />
      <Clearfix></Clearfix>
    </div>
    );
  }

  render() {

      if (this.props.data == null) {
        return this.showCategoty();
      }
      return this.showTemplate(); 
 
  }
}

function mapStateToProps(state) {
  //console.log("Step1");
  //console.log(state);
    return {
        data : state.activeCategory
    };
}

export default connect(mapStateToProps)(Step1);