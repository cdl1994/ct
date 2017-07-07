import React from 'react';
import {Row, Col} from 'react-bootstrap';

class Header extends React.Component{
	constructor(){
		super();
		this.state = {
			logoURL : "/image/data/ct-logo.png"
		}
	}

	render(){
		return (
			<div>
				<TopHeader />
				<BottomHeader />
			</div>
		);
	}
}

function TopHeader(props){
	var imgStyle = {
		width : "57px"
	}
	var containerStyle = {
	}
	return (
		<div style={containerStyle}>
		<Row>
			<Col md={1}>
				<div><img src="/image/data/ct-logo.png" alt="Custom Tobacco Logo" style={imgStyle}/></div>
			</Col>
			<Col md={3}>
				<div><span className="brightblue">10% off your first order</span></div>
			</Col>
			<Col md={6}>
				<p>Free concierge design service : <a href="tel:4242268612">(424) 226-8612</a></p>
			</Col>
			<Col md={2}>
				<ul>
					<li><a href="#">Sign In</a></li>
					<li><a href="#">Register</a></li>
					<li><span id="header"></span></li>
				</ul>
			</Col>
		</Row>
		</div>
	);
}

function BottomHeader(props){
	return (
		<div>
		<Row>
			<Col md={2} mdOffset={2}>
				<p>ABOUT US</p>
			</Col>
			<Col md={3}>
				<p>CUSTOMIZE YOUR OWN</p>
			</Col>
			<Col md={1}>
				<p>EVENTS</p>
			</Col>
			<Col md={2}>
				<p>ACCESSORIES</p>
			</Col>
		</Row>
		</div>
	);
}

export default Header;