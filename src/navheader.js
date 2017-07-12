import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import NavButton from './nav_button.js'

class NavHeader extends React.Component{
	constructor(){
		super();	
		this.state = {
			buttonOnSelect : -1,
			titleColor : "#fff",
		}	
	}

	mouseOverChange(value){
		this.setState({buttonOnSelect : value, titleColor:"rgb(0,255,247)"});
	}

	mouseOutChange(value){
		this.setState({buttonOnSelect : -1, titleColor:"rgb(0,255,247)"});
	}
	
	render(){
		var colStyle = {
			zIndex : "50",
		}
		var settings = {
			bsStyle : "pills",
		}
		var displayList = this.props.list.map((item,i)=>{
			if (i==this.props.navSubIndex){
				return (<NavButton text={item} subList={this.props.subList} />);
			}
			else{
				return (<NavButton text={item}/>);
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