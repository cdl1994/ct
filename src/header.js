import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import NavHeader from './navheader.js'

class Header extends React.Component{
	constructor(){
		super();
		this.state = {
			navTitle : ["ABOUT US", "CUSTOMIZE YOUR OWN", "EVENTS","ACCESSORIES"],
			navSubTitle : ["Bachelor Party Cigars","Birthday Cigars",
			"Corporate Event Cigars","Father's Day Cigars","Golf Tournament Cigars",
			"Groomsmen Cigars","Holiday Season Cigars","New Baby Cigars","Valentine's Day Cigars",
			"Wedding Cigars"]
		}
	}
	render(){

		var colStyle = {
			padding : "0",
			position : "absolute",
		}
		return (
			<Col md={12} style={colStyle}>
				<TopHeader data={this.props.data}/>
				<NavHeader list={this.state.navTitle} navSubIndex="2" subList={this.state.navSubTitle}/>
			</Col>
		);
	}
}

function TopHeader(props){
	var imgStyle = {
		width : "57px",
		margin : "0",
	}
	var containerStyle = {
	}
	var liStyle = {
		display : "inline-block",
		float : "left",
	}
	return (
		<div style={containerStyle} className="top-header">
			<Col md={1}>
				<div><img src={props.data.logo} alt="Custom Tobacco Logo" style={imgStyle}/></div>
			</Col>
			<Col md={3} className="text-center">
				<p><span className="brightblue">{props.data.discountText}</span></p>
			</Col>
			<Col md={6} className="conceirge-text text-center">
				<p>{props.data.conciergeText}<a href="#">{props.data.phone}</a></p>
			</Col>
			<Col md={3} className="text-right">
				<ul className="sign-in-list">
					<li style={liStyle}><a href="#">Sign In</a></li>
					<li style={liStyle}><a href="#">Register</a></li>
					<li><span id="header"></span></li>
				</ul>
			</Col>
		</div>
	);
}




export default Header;