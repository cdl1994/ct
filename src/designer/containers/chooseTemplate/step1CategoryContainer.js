import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import { Row, Col, Clearfix } from 'react-bootstrap';
import { StepTitle } from '../../components/CPBody';

import {selectCategory} from '../../actions/chooseTemplate/selectCategory'



class CategoryList extends Component {

renderList() {
  return this.props.categoryData.map((category) => {
    return (
      <Col md={2} sm={3} xs={6} key={category.title} onClick={() => this.props.selectCategory(category)}>
        <img className = "step1img" src = {category.image} alt = {category.title}></img>
        <div className='categoryTitle'> {category.title} </div>
      </Col>
      ); 
  });
}

render() {
return (
  <div>
      {this.renderList()}
  </div>
);
}

}


function matchDispatchToProps(dispatch){
  return bindActionCreators({selectCategory: selectCategory}, dispatch);
}


export default connect(null,matchDispatchToProps)(CategoryList);









