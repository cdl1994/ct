import React from 'react';
import {Col} from 'react-bootstrap';
import NavHeader from './navheader.js'

class Header extends React.Component{
	constructor(){
		super();
		this.state = {
			tobacco: {
				navTitle : ["ABOUT US", "CUSTOMIZE YOUR OWN", "EVENTS","ACCESSORIES"],
				navSubIndex : 2,
				navSubTitle : ["Bachelor Party Cigars","Birthday Cigars",
				"Corporate Event Cigars","Father's Day Cigars","Golf Tournament Cigars",
				"Groomsmen Cigars","Holiday Season Cigars","New Baby Cigars","Valentine's Day Cigars",
				"Wedding Cigars"]},
			spa: {
				navTitle : ["ABOUT US", "CHOOSE YOUR PRODUCT", "EVENTS"],
				navSubIndex : 1,
				navSubTitle : ["Wedding", "Baby Shower", "Birthday", "Anniversary", "Valentine's Day", "Mother's Day",
				"Bachelorette Party", "Spa Day"],
			}
		}
	}
	render(){
		var colStyle = {
			padding : "0",
			position : "absolute",
		}
		// var navHeader = <NavHeader list={this.state.spa.navTitle} navSubIndex={this.state.spa.navSubIndex} subList={this.state.spa.navSubTitle}/>;
		var navHeader = <NavHeader list={this.state.tobacco.navTitle} navSubIndex={this.state.tobacco.navSubIndex} subList={this.state.tobacco.navSubTitle}/>;
		return (
			<Col md={12} style={colStyle}>
				<TopHeader data={this.props.data} />
				{navHeader}
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