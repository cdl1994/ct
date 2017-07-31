import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

import Step1 from './CPStep1'
import { Step2 } from './CPStep2'

import { createStore } from 'redux';
import { Provider } from 'react-redux';

// import { fontReducer } from '../reducers/design_tool/FontReducer'

import allReducers from '../reducers';

const customData = require('../custompage.json');
document.body.style.backgroundColor = customData.Theme.background_color; //get the background color (pink)
document.body.style.color = customData.Theme.dark_text_color; //get the background color (brown)


const store = createStore(allReducers);
const state = store.getState();
console.log(state);


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

class StepTitle extends Component {
  render() {
    return (
      <h3>{this.props.children}</h3>
    );
  }
}


export { CPBody, StepTitle, customData };