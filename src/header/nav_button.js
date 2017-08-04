import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import NavSub from './nav_sub.js';

// header navigation button(horizontal)
class NavButton extends React.Component{
	constructor(){
		super();
		this.state = {
			navTitleColor : "white",
			selected : false,
		}
		this.mouseOverChange = this.mouseOverChange.bind(this);
		this.mouseOutChange = this.mouseOutChange.bind(this);
	}

	mouseOverChange(){
		this.setState({navTitleColor : "rgb(0,255,247)", selected : true});
	}

	mouseOutChange(){
		this.setState({navTitleColor : "white", selected : false});
	}

	render(){
		var itemStyle = {
			backgroundColor : "transparent",
			marginLeft : "0px",
			display : "inline-block",
			float : "none",
		}
		var navTitleStyle = {
			color : this.state.navTitleColor,
			fontSize : "30px",
			fontFamily : "Tradegothic-stdbold",
			textAlign : "center",
		}
		var subTitleStyle = {
			color : "white",
			fontSize : "30px",
			fontFamily : "Tradegothic-stdbold",
			textAlign : "left",
		}
		var subListStyle = {
			position : "absolute",
			zIndex : "50",
			background : "rgba(0,0,0,.6)",
			padding : "10px",
			width : "330px",
			marginLeft : "-50px",
			marginTop: "10px",
		}
		var text = this.props.text;
		// if this button have sublist and selected
		if (this.props.subList!=null && this.state.selected){
			var subList = this.props.subList.map((item)=><NavSub key={item.title} text={item.title} link={item.link}/>);
			return (
			<NavItem href={this.props.link} key={text} onMouseEnter={this.mouseOverChange} onMouseLeave={this.mouseOutChange} style={itemStyle}>
				<div style={navTitleStyle}>{text}</div>					
				<div style={subListStyle}>
					{subList}
				</div>
			</NavItem>);
		}
		return (<NavItem href={this.props.link} onMouseEnter={this.mouseOverChange} onMouseLeave={this.mouseOutChange} style={itemStyle}> 
			<div style={navTitleStyle}>{text}</div></NavItem>);
	}


}

export default NavButton;