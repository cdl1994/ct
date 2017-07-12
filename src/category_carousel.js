import React from 'react';
import Slider from 'react-slick';
import {Grid, Row, Col} from 'react-bootstrap';

class CategoryCarousel extends React.Component {
    render() {
        var displayList = this.props.list.map((item) => 
            <div key={item.image} className="item">
                <div className="caption homepage-heading-font">
                    <h2>{item.title}</h2>
                </div>
                <div className="white-line margin-right"></div>
                <img src={item.image} />
                <div className="customizebutton-1">
                    <a href={item.buttonUrl}>{item.buttonText}</a>
                </div>
            </div>
        );
        var settings = {
            dots : false,
            slidesToShow : 2,
            arrows : true,
            autoplay : true, 
            centerMode : false,
            infinite : true,
            speed : 600,
            autoplaySpeed:5000,
        }
        return (
            <Grid><Row id="customize-carousel"><Col>
                <Slider {...settings}>        
                  {displayList}
                </Slider>
            </Col></Row></Grid>
        );
    }
}

export default CategoryCarousel;