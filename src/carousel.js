import React from 'react';
import Slider from 'react-slick';
import {Col,Row} from 'react-bootstrap';
import CaptionButton from './caption_button.js';

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
			left : "20%",
			zIndex : "10000000",
			width : "60%",
			fontFamily : this.props.font,
		}
		var pStyle = {
			fontSize : "2.5vmax",
			color : "#fff",
			textAlign : "center",
			fontFamily : this.props.font,
			fontWeight : "500",
			whiteSpace : "nowrap",
		}
		var rowStyle = {
			textAlign : "center",
		}
		var buttonList = this.props.data.buttons.map((item)=>
			<CaptionButton colNum={5} key={item.buttonText} btnText={item.buttonText} link={item.link}/>
			);
		var displayList = this.props.data.banners.map((item)=>
			<div key={item.image}>
			  <h1 style={itemStyle}>
			    <img src={item.image} style={imgStyle}/>
			    <div style={capStyle}>
			    	<p style={pStyle} dangerouslySetInnerHTML={{__html: item.text}}></p>
			    	<div className="white-line centered50 margin-10"></div>
			    	<Row style={rowStyle}>
			    		{buttonList}
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