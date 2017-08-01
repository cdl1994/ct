import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Step1 from './CPStep1'
import Step2 from './CPStep2'

// redux: import reducers
import allReducers from '../reducers';

// import json file
const customData = require('../custompage.json');

// set background color
document.body.style.backgroundColor = customData.Theme.background_color; // get the background color (pink)
document.body.style.color = customData.Theme.dark_text_color; // get the background color (brown)

// redux: create store for the whole website
const store = createStore(allReducers);
const state = store.getState();
console.log(state);

// CPBody Class: main component of the customize page
class CPBody extends Component {
  constructor() {
    super();
    this.state = {
      data: customData,
    };
  }
  render() {
    return (
      <Provider store = {store}>
        <Grid>
          <h1>Personalize Your Cigars</h1>
            <Step1 categoryData = {this.state.data.Categories}/>
            <Step2 design_background = {this.state.data.Design_background}/>
        </Grid>
      </Provider>
    );
  }
}
// CPBody Class end

// StepTitle Class: child component for step titles
class StepTitle extends Component {
  render() {
    return (
      <h3>{this.props.children}</h3>
    );
  }
}
// StepTitle Class end

export { CPBody, StepTitle, customData };