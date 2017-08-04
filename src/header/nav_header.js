import React from 'react';
import {Grid, Col} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
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
		var displayList = this.props.data.map((item,i)=>{
			if (item.dropdown!=null){
				return (<NavButton key={item.tabText} text={item.tabText} link={item.link} subList={item.dropdown} />);
			}
			else{
				return (<NavButton key={item.tabText} text={item.tabText} link={item.link} />);
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