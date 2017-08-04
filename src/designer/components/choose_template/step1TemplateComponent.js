import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

class TemplateList extends Component {
  renderList() {
    return this.props.category.templates.map((template) => {      
      return (
        <Col md={3} sm={3} xs={6} key={template.sampleImageOnLocal}>
          <img className = "templateImg" src = {template.sampleImageOnLocal} alt = {template.sampleImageOnLocal} onClick = {() => this.props.selectTemplate(template.customizableImageOnLocal)}></img>
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

export default TemplateList;