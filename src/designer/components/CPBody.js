import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';
import ReactLoading from 'react-loading';
import DocumentTitle from 'react-document-title';

import Step1 from './CPStep1'
import Step2 from './CPStep2'

// redux: import reducers
import allReducers from '../reducers/reducerMain';

// set background color
//document.body.style.backgroundColor = customData.Theme.background_color; // get the background color (pink)
//document.body.style.color = customData.Theme.dark_text_color; // get the background color (brown)

// redux: create store for the whole website
const store = createStore(allReducers);
const state = store.getState();

// CPBody Class: main component of the customize page
class CPBody extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
  }

  axiosRequest(){
    let address;
    var suffix = "";
    if (process.env.NODE_ENV === 'production') {
        address = window.location.origin;
    }
    else {
        address = "http://52.53.152.61:8080";
        suffix = "&store_id=1";
    }
    axios({
        method: "get",
        url: address + "/index.php?route=product/cp_designer/api" + suffix,
    })
    .then((response)=>{            
        this.setState({data: response.data});
    });
  }

  componentWillMount(){
    this.axiosRequest();
  }

  render() {
    console.log(this.state.data);
    if (this.state.data != null) {
      return (
        <Provider store = {store}>
          <Grid>
            <h1>{this.state.data.design_info.title}</h1>
              <Step1 categoryData = {this.state.data.categories}/>
              <Step2 design_background_left = {this.state.data.design_info.leftMirror}
                design_background_right = {this.state.data.design_info.rightMirror}/>
          </Grid>
        </Provider>
      );
    }
    else{
      var center = {
        position: 'absolute',
        margin: 'auto',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: '100px',
        height: '100px'
      };
      return (
          <DocumentTitle title="Loading">
              <div style={center}><ReactLoading type="spokes" color="#444" /></div>
          </DocumentTitle>
      );
    }
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

export default CPBody;
export { StepTitle };
