import React from 'react';
import Slider from 'react-slick';
import {Grid, Row, Col} from 'react-bootstrap';

class CategoryCarousel extends React.Component {
    render() {
        var containerStyle = {
            padding : "40px",
            width : "100%",
            margin : "0 auto",
        }
        var catStyle = {
            padding : "20px"
        }
        var imgStyle = {
            width : "90%",
            height : "40%",
        }
        var titleStyle = {
            color : this.props.titleColor,
        }
        var displayList = this.props.list.map((item) => 
            <div key={item.image} style={catStyle}>
                <div className="caption homepage-heading-font">
                    <h2 style={titleStyle}>{item.title}</h2>
                </div>
                <div className="white-line margin-right"></div>
                <img src={item.image} style={imgStyle}/>
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
            responsive : [{breakpoint:768, settings:{slidesToShow:1}}],
        }
        return (
            <Grid>
                <div style={containerStyle}>
                <Slider {...settings}>        
                  {displayList}
                </Slider>
                </div>
            </Grid>
        );
    }
}

export default CategoryCarousel;