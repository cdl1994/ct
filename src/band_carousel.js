import React from 'react';
import Slider from 'react-slick';

class BandCarousel extends React.Component {
	render(){		
		var titleStyle={
			"text-align" : "center",
		}
		var bandStyle={
			"padding" : "40px",
		}
		var containerStyle = {
			"padding" : "40px",
			"width" : "90%",
			"margin" : "0 auto",
		}
		var displayList = this.props.list.map((item) => 
			<div style={bandStyle}>
			    <img src={item.image} />
			    <p>{item.buttonText}</p>
			</div>);
		var settings = {
			dots : false,
			slidesToShow : 3,
			arrows : true,
			autoplay : true, 
			centerMode : false,
			infinite : true,
			speed : 600,
			autoplaySpeed:5000,
		}
		return (
			<div>
			  <h2 style={titleStyle}>Most Popular Cigar Bands</h2>
			  	<div style={containerStyle}>
				    <Slider {...settings}>	    
				      {displayList}
				    </Slider>
				</div>
			</div>
		);
	}
}

export default BandCarousel;