import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import DocumentTitle from 'react-document-title';
import {WhiteLine, PopupLine} from './whiteline.js';
import Slider from 'react-slick';
import axios from 'axios';

class CategoryPage extends React.Component {
    constructor() {
        super();
        this.state = {
            data : null,
            header : null,
            footer : null,
        };
    }

    axiosRequest(){
        let address;
        var suffix = "";
        if (process.env.NODE_ENV === 'production') {
            address = window.location.host;
        }
        else {
            address = "52.53.152.61:8080";
            suffix = "&store_id=1";
        }
        axios({
            method:"get",
            url:"http://" + address + "/index.php?route=product/cp_category/api&category=" + this.props.match.params.name + suffix,
        })
        .then((response) => {            
            this.setState({data: response.data});
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    componentWillMount(){
        this.axiosRequest();
    }

    render() {
        if (this.state.data != null) {
            var pageStyle = {
                backgroundColor : this.state.data.theme.backgroundColor,
                color : this.state.data.theme.lightTextColor,
                fontStyle : this.state.data.theme.fontStyle,
            };
            return (
                <DocumentTitle title={this.state.data.category_page_info.category_info.title}>
                <div style={pageStyle}>
                <Grid className="ctcategory"><Row>
                    <Col md={6} xs={12}>
                        <div className="ct-title"><h2 className="centered-line">{this.state.data.category_page_info.category_info.title}</h2></div>
                    </Col>
                </Row></Grid>
                <WhiteLine image={"/" + this.state.data.theme.sectionDivider}/>
                <TestimonialCarousal list={this.state.data.category_page_info.testimonials} />
                <WhiteLine image={"/" + this.state.data.theme.sectionDivider}/>
                <Grid><Row>
                    <div className="ct-intro-left" dangerouslySetInnerHTML={{__html: this.state.data.category_page_info.category_info.evergreen}}>
                    </div>
                    <div className="ct-intro-right">
                        <img id="ct-intro-img" src={this.state.data.category_page_info.category_info.image} />
                    </div>
                </Row></Grid>
                </div>
                </DocumentTitle>
            );
        }
        else {
            return (
                <DocumentTitle title="Loading">
                    <div>Loading</div>
                </DocumentTitle>
            );
        }
    }
}

function TestimonialCarousal(props) {
    var displayList = props.list.map((item) => 
        <div key={item.id} className="item">
            <Row><Col md={11}>
                <div className="ct-banner-text">
                    {item.testimonial}
                </div>
                <div className="ct-banner-text-author">——
                    {item.inscription}
                </div>
            </Col></Row>
        </div>
    );
    var settings = {
        dots : false,
        slidesToShow : 1,
        arrows : true,
        autoplay : true, 
        centerMode : false,
        infinite : true,
        speed : 600,
        autoplaySpeed:5000,
    };
    return (
        <Grid>
            <Slider {...settings}>        
                {displayList}
            </Slider>
        </Grid>
    );
}

export default CategoryPage;