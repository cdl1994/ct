import React from 'react';
import Slider from 'react-slick';
import {Col,Row} from 'react-bootstrap';
import CaptionButton from './caption_button.js';

class SpaCarousel extends React.Component {
	render(){
		var data=[
                {
                    "image":"image/data/custom-spa/home_banner/banner-2.jpg",
                    "text":"Give the gift of relaxation.<br>Premium Personalized Spa Products.",
                    "button1":"Choose Your product >",
                },
                {
                    "image":"image/data/custom-spa/home_banner/banner-1.jpg",
                    "text":"Give the gift of relaxation.<br>Premium Personalized Spa Products.",
                    "button1":"Choose Your product >",
                },
                {
                    "image":"image/data/custom-spa/home_banner/banner-3.jpg",
                    "text":"Give the gift of relaxation.<br>Premium Personalized Spa Products.",
                    "button1":"Choose Your product >",
                }
            ];
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
		var displayList = data.map((item)=>
			<div key={item.image}>
			  <h1 style={itemStyle}>
			    <img src={item.image} style={imgStyle}/>
			    <div style={capStyle}>
			    	<p style={pStyle} dangerouslySetInnerHTML={{__html: item.text}}></p>
			    	<div className="white-line centered50 margin-10"></div>
			    	<Row>
			    		<CaptionButton colNum={6} btnText={item.button1} />
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

export default SpaCarousel;