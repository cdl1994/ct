import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

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

export default CategoryList;