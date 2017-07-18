import React from 'react';
import {Col,Row} from 'react-bootstrap';

class CaptionButton extends React.Component {
	constructor(){
		super();
		this.state = {
			buttonBackground : "#fff",
			textColor : "#111",
		}
		this.onMouseOver = this.onMouseOver.bind(this);
		this.onMouseOut = this.onMouseOut.bind(this);
	}

	onMouseOver(){
		this.setState({buttonBackground : "transparent", textColor:"#fff"});
	}

	onMouseOut(){
		this.setState({buttonBackground : "#fff", textColor:"#111"});
	}

	render(){
		var buttonStyle = {
			fontSize:"1.8vmax",
			fontFamily: "Tradegothic-stdbold", 
			padding : "3%",
			background : this.state.buttonBackground,
			color:this.state.textColor ,
			whiteSpace: "nowrap",
			display : "block",
			margin : "0 0 10px",
		}
		var colStyle = {
	        float : "none",
	        display : "inline-block",
	    }
		return (
		<Col md={this.props.colNum} xs={this.props.colNum} style={colStyle}>
			<a href={this.props.link} style={buttonStyle} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>{this.props.btnText}</a>
		</Col>
		);
	}
}

export default CaptionButton;