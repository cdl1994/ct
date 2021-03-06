import React from 'react';
import {Col} from 'react-bootstrap';
import NavHeader from './nav_header.js'

class Header extends React.Component{
	constructor(){
		super();
		this.state = null;
	}
	render(){
		var colStyle = {
			padding : "0",
			position : "absolute",
		}
		if (this.props.showBG){
			colStyle.position = "relative";
			colStyle.backgroundImage = "url("+this.props.data.headerImage+")";
			colStyle.paddingBottom = "40px";
			colStyle.marginBottom = "40px";
			colStyle.backgroundSize = "cover";
		}
		var navHeader = <NavHeader data={this.props.data.nav} />;
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