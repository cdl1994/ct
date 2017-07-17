import React from 'react';
import Slider from 'react-slick';
import {Grid, Row, Col} from 'react-bootstrap';

class BandCarousel extends React.Component {
    render(){
        var titleStyle={
            textAlign : "center",
        }
        var bandStyle={
            padding : "40px",
        }
        var containerStyle = {
            padding : "40px",
            width : "90%",
            margin : "0 auto",
        }
        var displayList = this.props.list.map((item) => 
            <div key={item.image} style={bandStyle}>
                <a href={item.link}>
                    <img src={item.image} />
                    <p className="customizebutton-2">Customize yours ></p>
                </a>
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
            responsive : [{breakpoint:768, settings:{slidesToShow:1}}],
        }
        return (
            <Grid><Row><Col>
              <h2 style={titleStyle}>Most Popular Cigar Bands</h2>
                  <div style={containerStyle}>
                    <Slider {...settings}>        
                      {displayList}
                    </Slider>
                </div>
            </Col></Row></Grid>
        );
    }
}

export default BandCarousel;