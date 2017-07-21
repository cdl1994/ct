import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import DocumentTitle from 'react-document-title';
import {WhiteLine, PopupLine} from './whiteline.js';
import Slider from 'react-slick';
import axios from 'axios';
import ReadMore from './read_more.js';
import EnterEmail from './enter_email.js';
import Columns from 'react-columns';
import CutBG from './cut_bg.js';
import Footer from './footer.js';
import Header from './header.js'
import ReactLoading from 'react-loading';

function textProcess(text) {
    var res = text.replace(/<\/p><p>/g, " ");
    res = res.replace(/<\/p>/g, "");
    res = res.replace(/<p>/g, "");
    return res;
}

function phoneFormatter(phone) {
    var len = phone.length;
    if (len !== 10) return phone;
    var res = "(" + phone.slice(0, 3);
    res += ") " + phone.slice(3, 6);
    res += "-" + phone.slice(6, 10);
    return res;
}

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
        axios({
            method:"get",
            url:"http://" + address + "/index.php?route=common/cp_footer/api" + suffix,
        })
        .then((response)=> {
            this.setState({footer: response.data});
        })
        .catch((error)=>{
            console.log(error);
        });
        axios({
            method:"get",
            url:"http://" + address + "/index.php?route=common/cp_header/api" + suffix,
        })
        .then((response)=> {
            this.setState({header: response.data});
            var home = {
              "tabText": "HOME",
              "dropdown": null,
              "link": "/"
            };
            this.state.header.nav.splice(0,0,home);
            console.log(this.state.header.nav);
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    componentWillMount() {
        this.axiosRequest();
    }

    render() {
        var footer = this.state.footer == null ? <ReactLoading type="bubbles" color="#444" /> : <Footer data={this.state.footer} />;
        var header = this.state.header == null ? <ReactLoading type="bubbles" color="#444" /> : <Header showBG data={this.state.header} />;
        if (this.state.data != null) {
            var pageStyle = {
                backgroundColor : this.state.data.theme.backgroundColor,
                color : this.state.data.theme.lightTextColor,
                fontStyle : this.state.data.theme.fontStyle,
            };
            var col_queries = [{
                columns: 1,
                query: 'min-width: 1px'
            },
            {
                columns: 3,
                query: 'min-width: 970px'
            }];
            const related = this.state.data.category_page_info.blogs.map((blog) => 
                <a href={blog.link} key={blog.link} className="related-article-title">{blog.title}</a>
            );
            const also = this.state.data.category_page_info.also_loves.map((love) => 
                <div className="h3 related-ct" key={love.link}>
                    <a href={love.link}>
                        <img src={love.template} />
                        <br />
                        <p className="related-category-title">{love.name}</p>
                    </a>
                </div>
            );
            return (
                <DocumentTitle title={this.state.data.category_page_info.category_titles.title}>
                <div style={pageStyle} className="nopadding">
                <div style={{height:"0px"}}>dummy</div>
                {header}
                <Grid className="ctcategory"><Row>
                    <Col md={12}>
                        <div className="ct-title"><h2 className="centered-line">{this.state.data.category_page_info.category_titles.title}</h2></div>
                    </Col>
                </Row></Grid>
                <WhiteLine image={this.state.data.theme.sectionDivider}/>
                <TestimonialCarousal list={this.state.data.category_page_info.testimonials} />
                <WhiteLine image={this.state.data.theme.sectionDivider}/>
                <Grid><Row>
                    <div className="ct-intro-left more" id="read_more_box">
                        <ReadMore lines={4}>
                            {textProcess(this.state.data.category_page_info.category_info.evergreen)}
                        </ReadMore>
                    </div>
                    <div className="ct-intro-right">
                        <img id="ct-intro-img" src={this.state.data.category_page_info.category_info.image} />
                    </div>
                </Row></Grid>
                <WhiteLine image={this.state.data.theme.sectionDivider}/>
                <Customize title={this.state.data.category_page_info.category_info.template_section_title} data={this.state.data.category_page_info.templates} />
                <WhiteLine image={this.state.data.theme.sectionDivider}/>
                <EnterEmail title={this.state.data.category_page_info.category_titles.discountTitle} text={this.state.data.category_page_info.category_titles.discountText} />
                <WhiteLine image={this.state.data.theme.sectionDivider}/>
                <Grid className="related">
                    <Row><h3 className="centered-line">Related Articles</h3></Row>
                    <Row><Columns queries={col_queries} gap="12px">
                        {related}
                    </Columns></Row>
                </Grid>
                <CutBG imageURL={this.state.data.theme.backgroundImage} />
                <Grid>
                    <Row className="related related_categories centered-line"><h3>{this.state.data.category_page_info.category_titles.relatedTitle}</h3></Row>
                    <Row><Columns queries={col_queries} gap="15px">
                        {also}
                    </Columns></Row>
                </Grid>
                <CutBG imageURL={this.state.data.theme.backgroundImage} />
                <Grid><Row>
                    <div className="column-left margin-10 category-ad-btm-l">
                        <img id="category-ad-btm-img" src={this.state.data.category_page_info.footer.image} />
                    </div>
                    <div className="column-right margin-10 category-ad-btm-r">
                        <h3>{this.state.data.category_page_info.footer.title}</h3>
                        <p>{this.state.data.category_page_info.footer.text}</p>
                        <div className="h3 ct-tel">
                            <a href={"tel:" + this.state.data.category_page_info.footer.phone}>{phoneFormatter(this.state.data.category_page_info.footer.phone)}</a>
                        </div>
                    </div>
                </Row></Grid>
                {footer}
                </div>
                </DocumentTitle>
            );
        }
        else {
            var center = {
              position: 'absolute',
              margin: 'auto',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              width: '100px',
              height: '100px'
            };
            return (
                <DocumentTitle title="Loading">
                    <div style={center}><ReactLoading type="spokes" color="#444" /></div>
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

function Customize(props) {
    var count = props.data.length;
    var row = Math.floor(count/3);
    var customize_rows = [];
    for (var i = 0; i < row; i++) {
        var cols = [];
        for (var j = 0; j < 3; j++) {
            cols[j] = <Col md={4} key={props.data[i*3 + j].image}>
                <a href={props.data[i*3 + j].link}><img src={props.data[i*3 + j].image} />
                <p className="customizebutton-2 mrgn">CUSTOMIZE YOURS ></p></a>
            </Col>;
        }
        customize_rows[i] = <Row key={i}>{cols}</Row>;
    }
    var last = count%3;
    if (last != 0) {
        var cols = [];
        var cur = 0;
        for (var j = count - 1; j >= row*3; j--) {
            cols[cur] = <Col md={12/last} key={props.data[j].image}>
                <a href={props.data[j].link}><img src={props.data[j].image} />
                <p className="customizebutton-2 mrgn">CUSTOMIZE YOURS ></p></a>
            </Col>;
            cur++;
        }
        customize_rows[row] = <Row key={row}>{cols}</Row>;
    }
    return (
        <Grid><Row className="ct-customize">
            <h3>{props.title}</h3>
            {customize_rows}
        </Row></Grid>
    );
}

export default CategoryPage;