import React from 'react';
import ReactDOM from 'react-dom';

class School extends React.Component{
  render(){
    return(
        <div> School is : {this.props.name}</div>
    );
  }
}

export default School;