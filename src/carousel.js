import React from 'react';
import Slider from 'react-slick';
import {Col,Row} from 'react-bootstrap';

class Carousel extends React.Component {
	render(){
		var itemStyle = {
			margin : "0px",
			padding : "0px",
			position : "relative",
		}
		var imgStyle = {
			width: "100%"
		}
		var capStyle = {
			position : "absolute",
			top : "50%",
			left : "30%",
			zIndex : "10000000",
		}
		var pStyle = {
			fontSize : "2.5vmax",
			color : "#fff",
			textAlign : "center",
			fontFamily : "Bodoni-stdroman",
			fontWeight : "500",
			whiteSpace : "nowrap",
		}
		var buttonStyle = {
			fontSize:"1.8vmax",
			fontFamily: "Tradegothic-stdbold", 
			padding : "3%",
			background:"#fff",
			color:"#111",
			whiteSpace: "nowrap",
		}
		var displayList = this.props.list.map((item)=>
			<div key={item.image}>
			  <h1 style={itemStyle}>
			    <img src={item.image} style={imgStyle}/>
			    <div style={capStyle}>
			    	<p style={pStyle} dangerouslySetInnerHTML={{__html: item.text}}></p>
			    	<div className="white-line centered50 margin-10"></div>
			    	<Row>
			    	<Col md={6}><p style={buttonStyle}>{item.button1}</p></Col>
			    	<Col md={6}><p style={buttonStyle}>{item.button2}</p></Col>
			    	</Row>
			    </div>
			  </h1>
			</div>);
		var settings = {
    		dots : true,
    		arrows : false,
    		autoplay : true,
    		autoplaySpeed : 5000,
    		draggable : false,
    	}
		return (
			<div>
				<Slider {...settings}>	
					{displayList}
				</Slider>
			</div>

		);
	}
}

export default Carousel;