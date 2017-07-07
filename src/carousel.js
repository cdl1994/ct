import React from 'react';
import Slider from 'react-slick';

class Carousel extends React.Component {
	render(){
		var displayList = this.props.list.map((item)=>
			<div key={item.image}>
			  <h1>
			    <img src={item.image}/>
			    <p>{item.text}</p>
			  </h1>
			</div>);
		var settings = {
    		dots : true
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