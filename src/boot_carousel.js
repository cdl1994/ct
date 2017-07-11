import React from 'react';
import Slider from 'react-slick';
import {Carousel} from 'react-bootstrap'

class BootCarousel extends React.Component {
	render(){
		var displayList = this.props.list.map((item)=>
			<Carousel.Item key={item.image}>
			  <h1>
			    <img src={item.image}/>
			    <p>{item.text}</p>
			  </h1>
			</Carousel.Item>);
		var settings = {
    	}
		return (
			<div>
				<Carousel {...settings}>	
					{displayList}
				</Carousel>
			</div>

		);
	}
}

export default BootCarousel;