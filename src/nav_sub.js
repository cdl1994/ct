import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';

// header navigation button (vertical)
class NavSub extends React.Component{
	constructor(){
		super();
		this.state = {
			navTitleColor : "white",
			selected : false,
			navBg : "transparent",
		}
		this.mouseOverChange = this.mouseOverChange.bind(this);
		this.mouseOutChange = this.mouseOutChange.bind(this);
	}

	mouseOverChange(){
		this.setState({navTitleColor : "rgb(0,255,247)", navBg : "white", selected : true});
	}

	mouseOutChange(){
		this.setState({navTitleColor : "white", navBg : "transparent", selected : false});
	}

	render(){
		var subTitleStyle = {
			color : this.state.navTitleColor,
			fontSize : "30px",
			fontFamily : "Tradegothic-stdbold",
			textAlign : "left",
			background : this.state.navBg,
			display : "block"
		}
		return (<Link to={'/'+this.props.link} style={subTitleStyle} onMouseEnter={this.mouseOverChange} onMouseLeave={this.mouseOutChange} >{this.props.text}</Link>);		
	}
}

export default NavSub;