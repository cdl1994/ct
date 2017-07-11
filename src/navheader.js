import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

class NavHeader extends React.Component{
	constructor(){
		super();	
		this.state = {
			buttonOnSelect : -1,
		}	
	}

	changeButtonBG(value){
		if (this.state.buttonOnSelect<0) {
			this.setState({buttonOnSelect : value});
		}
		else{
			this.setState({buttonOnSelect : -1});
		}	
		console.log(this.state.buttonOnSelect);
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
			fontSize : "20px",
			fontFamily : "Tradegothic-stdbold",
			margin : "0",
		}
		var itemStyle = {
			backgroundColor : "transparent",
		}
		var itemHighlightStyle = {
			backgroundColor : "#ccc"
		}
		var displayList = this.props.list.map((item,i)=>{
			if (i==this.state.buttonOnSelect){
				// hard code
				if (i==2){
				var subList = this.props.subList.map((item)=><li><span style={navTitleStyle}>{item}</span></li>);
				return (<NavItem onMouseOver={this.changeButtonBG.bind(this,i)} onMouseOut={this.changeButtonBG.bind(this,i)} style={itemHighlightStyle}>
					<p style={navTitleStyle}>{item}</p>
						<ul>
						{subList}
						</ul>
					</NavItem>)
				}
				return (<NavItem onMouseOver={this.changeButtonBG.bind(this,i)} onMouseOut={this.changeButtonBG.bind(this,i)} style={itemHighlightStyle}>
					<p style={navTitleStyle}>{item}</p></NavItem>);
			}
			else{
				return (<NavItem onMouseOver={this.changeButtonBG.bind(this,i)} onMouseOut={this.changeButtonBG.bind(this,i)} style={itemStyle}>
					<p style={navTitleStyle}>{item}</p></NavItem>);
			}
			});

		return (
			<Col md={12} style={colStyle}>
			<Grid style={colStyle}>
			<Nav {...settings}>
				{displayList}
			</Nav>
			</Grid>
			</Col>
		);
	}
}

export default NavHeader;