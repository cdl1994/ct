import React from 'react';
import ReactDOM from 'react-dom';
import School from './school.js';

// class User extends React.Component{
//   render(){
//     return(
//       <div> User is : {this.props.name} </div>
//     );
//   }
// }

function User(props){
  return(
    <div> User is : {props.name} </div>
  );
}

// class School extends React.Component{
//   render(){
//     return(
//         <div> School is : {this.props.name}</div>
//     );
//   }
// }

class Blend extends React.Component{
  constructor(){
    super();
    // this.state={
    //   name:this.props.blend_name,
    //   type:this.props.blend_type,
    // }
  }

  handleClick = () =>{
    alert(this.props.blend_name);
  }

  render(){
    return(
      <div className="col-md-6 option_blend" onClick={this.handleClick}>
        <div> {this.props.blend_name}</div>
        <div> {this.props.blend_type}</div>
      </div>
    );
  }
}


class HelloWorld extends React.Component{
  constructor(){
    super();
    this.state={
      school_name:"USC",
      user_name:"Trojan",
    };
    this.handleSchoolChange = this.handleSchoolChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    // (optional) this.handleClick = this.handleClick.bind(this);
  }

  handleSchoolChange(e){
    this.setState({
      school_name: e.target.value
    });
  }

  handleUserChange(e){
    this.setState({
      user_name: e.target.value
    });
  }


  handleClick = () => {
    alert("School is "+this.state.school_name + "\nStudent is "+this.state.user_name);  
    alert("prop author is "+this.props.author);
  }

  render() {
    return (
      <div>
        <School name={this.state.school_name}> </School>
        <User name={this.state.user_name}> </User>
        <div> Enter School: <input type = "text" value = {this.state.school_name} onChange={this.handleSchoolChange} /> </div>
        <div> Enter User: <input type = "text" value = {this.state.user_name} onChange={this.handleUserChange} /> </div>
        <button id="my-button" onClick={this.handleClick} />
        <div className="row">
            <Blend blend_name="classic" blend_type="cigar" />
            <Blend blend_name="limited" blend_type="cigar" />
        </div>

      </div>
    );
  }
}

export default HelloWorld;
