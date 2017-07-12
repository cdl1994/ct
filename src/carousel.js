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
		var displayList = this.props.list.map((item)=>
			<div key={item.image}>
			  <h1 style={itemStyle}>
			    <img src={item.image} style={imgStyle}/>
			    <div style={capStyle}>
			    	<p style={pStyle} dangerouslySetInnerHTML={{__html: item.text}}></p>
			    	<div className="white-line centered50 margin-10"></div>
			    	<Row>
			    		<CaptionButton colNum={6} btnText={item.button1} />
			    		<CaptionButton colNum={6} btnText={item.button2} />
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