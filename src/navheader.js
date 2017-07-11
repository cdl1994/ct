import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

class NavHeader extends React.Component{
	constructor(){
		super();	
		this.state = {
			buttonOnSelect : -1,
			navSubIndex : 2,
		}	
	}

	mouseOverChange(value){
		console.log("over");
		this.setState({buttonOnSelect : value});
	}

	mouseOutChange(value){
		console.log("out");
		this.setState({buttonOnSelect : -1});
	}
	
	render(){
		var colStyle = {
			zIndex : "10000000",
		}
		var settings = {
			bsStyle : "pills",
		}
		var navTitleStyle = {
			color : "white",
			fontSize : "30px",
			fontFamily : "Tradegothic-stdbold",
			margin : "0",
		}
		var itemStyle = {
			backgroundColor : "transparent",
			marginLeft : "0px",
			display : "inline-block",
			float : "none",
		}
		var itemHighlightStyle = {
			backgroundColor : "#ccc",
			marginLeft : "0px",
			display : "inline-block",
			float : "none",
		}
		var subListStyle = {
			position : "absolute",
			position: "absolute",
			zIndex : "20",
			background : "rgba(0,0,0,.6)",
			padding : "10px",
			width : "330px",
			marginLeft : "-50px",
			marginTop: "10px",
		}
		var displayList = this.props.list.map((item,i)=>{
			if (i==this.state.buttonOnSelect){
				// hard code
				if (i==this.state.navSubIndex){
				var subList = this.props.subList.map((item)=><div style={navTitleStyle}>{item}</div>);
				return (
					<NavItem onMouseEnter={this.mouseOverChange.bind(this,i)} style={itemHighlightStyle}>
					<p style={navTitleStyle}>{item}</p>					
					<div onMouseLeave={this.mouseOutChange.bind(this,i)} style={subListStyle}>
						{subList}
					</div>
					</NavItem>);
				}
				return (<NavItem onMouseOver={this.mouseOverChange.bind(this,i)} onMouseOut={this.mouseOutChange.bind(this,i)} style={itemHighlightStyle}>
					<p style={navTitleStyle}>{item}</p></NavItem>);
			}
			else{
				return (<NavItem onMouseOver={this.mouseOverChange.bind(this,i)} onMouseOut={this.mouseOutChange.bind(this,i)} style={itemStyle}>
					<p style={navTitleStyle}>{item}</p></NavItem>);
			}
			});

		return (
			<Col md={12} style={colStyle}>
			<Grid style={colStyle}>
			<Nav {...settings} className="header-navigation">
				{displayList}
			</Nav>
			</Grid>
			</Col>
		);
	}
}

export default NavHeader;