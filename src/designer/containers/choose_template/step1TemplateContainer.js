import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TemplateList from '../../components/choose_template/step1TemplateComponent';
import { selectTemplate } from '../../actions/choose_template/selectTemplate';
import { selectChange } from '../../actions/choose_template/selectCategory';


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