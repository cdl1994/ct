import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, Clearfix } from 'react-bootstrap';
import { selectTemplate } from '../../actions/chooseTemplate/selectTemplate'
import { selectChange } from '../../actions/chooseTemplate/selectCategory'

class TemplateList extends Component {
  renderList() {
    return this.props.category.templates.map((template) => {      
      return (
        <Col md={3} sm={3} xs={6} key={template.image}>
          <img className = "templateImg" src = {template.image} alt = {template.image} onClick = {() => this.props.selectTemplate(template.image_blank)}></img>
        </Col>
      );
    });
  }
  render() {
    if (!this.props.category) {
      return (<div></div>);
    }
    return (
      <div>
        <img className = "step1img" src = {this.props.category.image} alt = {this.props.category.title}></img>
        <div className='categoryTitle'> {this.props.category.title}</div>
        {this.renderList()}
        <img src="/image/data/custom-tobacco/change-selection.png" onClick = {() => this.props.selectChange()}/>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    category: state.activeCategory
  };
}

function matchDispatchToProps(dispatch){
  return {
    selectTemplate: bindActionCreators(selectTemplate, dispatch),
    selectChange: bindActionCreators(selectChange, dispatch)
  };
}

export default connect(mapStateToProps,matchDispatchToProps)(TemplateList);