import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel.js';
import BandCarousel from './band_carousel.js';
import CutBG from './cut_bg.js';
import {Grid, Row, Col} from 'react-bootstrap';
import DocumentTitle from 'react-document-title';
import {FirstCouLine, PopupLine} from './whiteline.js';
import Footer from './footer.js';
import Data_JSON from './data.json';
import Header from './header.js'
import CategoryCarousel from './category_carousel.js'
import SkyLight from 'react-skylight';
import Cookies from 'universal-cookie';
import axios from 'axios';

class HomePage extends React.Component {
    constructor(){
        super();
        this.state = {
            data : null,
            pageTitle : "Custom Cigars Online: Personalized Cigar Bands | Custom Tobacco",
            carousel:[
                {
                    "image":"image/data/home-banner/banner-2.jpg",
                    "text":"The <i>Perfect Gift</i> for that Perfect Occasion.<br><i>Personalized</i> Cigars.",
                    "button1":"Customize Yours >",
                    "button2":"The Briarmont Difference >"
                },
                {
                    "image":"image/data/home-banner/banner-1.jpg",
                    "text":"The <i>Perfect Gift</i> for that Perfect Occasion.<br><i>Personalized</i> Cigars.",
                    "button1":"Customize Yours >",
                    "button2":"The Briarmont Difference >"
                },
                {
                    "image":"image/data/home-banner/banner-3.jpg",
                    "text":"The <i>Perfect Gift</i> for that Perfect Occasion.<br><i>Personalized</i> Cigars.",
                    "button1":"Customize Yours >",
                    "button2":"The Briarmont Difference >"
                }
            ],
        };
    }

    axiosRequest(){
        axios({
            method:"get",
            url:"http://www.cp.dev/",
            // url:"http://www.cp.dev/index.php?route=common/cp_home/api",
        })
        .then((response)=>{            
            this.setState({data: response.data});
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    componentWillMount(){
        // this.axiosRequest();

    }
    componentDidMount(){
        this.axiosRequest();
    }

    componentDidUpdate(){  
    }

    // render(){
    //     if(this.state.data!==null){
    //         // console.log(this.state.data);
    //     return (
    //         <p> {this.state.data.header.title} </p>
    //     );}
    //     else {
    //         return (<p>loading</p>);
    //     }
    // }

    render() {
        if (this.state.data!=null){
            var homePageStyle = {
                backgroundColor : this.state.data.theme.backgroundColor,
                color : this.state.data.theme.lightTextColor,
                fontStyle : this.state.data.theme.fontStyle,
            }
            var popupStyle = {
                backgroundColor : this.state.data.theme.backgroundColor,
            }
            var overlayStyle = {
                backgroundColor : "rgba(0,0,0,.6)",
            }
            return (
                <DocumentTitle title={this.state.pageTitle}>
                <div style={homePageStyle}>
                  <Carousel list={this.state.carousel}/>
                  <CutBG imageURL={this.state.data.theme.backgroundImage}/>
                  <CategoryCarousel titleColor={this.state.data.theme.darkTextColor} list={this.state.data.categories} />
                  <CutBG imageURL={this.state.data.theme.backgroundImage}/>
                  <CutBG imageURL={this.state.data.theme.backgroundImage}/>
                  <FirstCouLine />
                  <EnterEmail />
                  <FirstCouLine />
                  <BandCarousel list={this.state.data.customize}/>
                  <CutBG imageURL={this.state.data.theme.backgroundImage}/>
                  <BlogTags evergreen={this.state.data.info.evergreen} list={this.state.data.readmore}/>
                </div>
                </DocumentTitle>
            );
        }
        else{
            return (<p>loading</p>);
        }
    }
}

function WebsiteLink(props){
    var containerStyle = {
        margin : "10px",
    }
    var titleStyle = {
        margin : "auto",
        color : "#4c372e",
        fontFamily : "Bodoni-stdroman",
        fontSize : "2.8vmax",
        textAlign : "center",
    }
    return (
        <Grid>
        <Row style={containerStyle}>
        <div style={titleStyle}>AS SEEN IN</div>
        <Col md={2} mdOffset={1}><a href="http://www.thedailybeast.com/articles/2016/05/30/whatever-happened-to-new-dads-passing-out-cigars" target="_blank"><img src="/image/data/daily-beast.png" /></a></Col>
        <Col md={2}><a href="http://edition.pagesuite.com/html5/reader/production/default.aspx?pubname=&edid=d0190934-1df3-49f7-9f91-c3eeb4d210b6" target="_blank"><img src="/image/data/american-way.png" /></a></Col>
        <Col md={2}><a href="http://mmqb.si.com/mmqb/2016/09/22/nfl-football-lifestyle-gameday-outfit-shirts" target="_blank"><img src="/image/data/sports-illu.png" /></a></Col>
        <Col md={2}><a href="http://www.craveonline.com/culture/1013287-roll-smokes-like-big-shot-custom-tobacco-cigars" target="_blank"><img src="/image/data/crave.png" /></a></Col>
        <Col md={2}><a href="http://wedding-bros.com/wedding-planning/custom-cigars-for-groomsmen-dads-and-all-aficionados-custom-tobacco.html" target="_blank"><img src="/image/data/bros.png" /></a></Col>
        <Col md={2} mdOffset={2}><a href="http://www.uptownmagazine.com/2016/12/holiday-gift-guide-the-gifts-they-dont-know-they-really-want/" target="_blank"><img src="/image/data/uptown.png" /></a></Col>
        <Col md={2}><a href="https://www.youtube.com/watch?v=Twm8iclYNGA" target="_blank"><img src="/image/data/fox.png" /></a></Col>
        <Col md={2}><a href="http://www.bostonherald.com/gift_guide/stocking_stuffers/2016/11/customized_cigars_can_light_up_a_smoker_s_holidays" target="_blank"><img src="/image/data/boston.png" /></a></Col>
        <Col md={2}><a href="http://labusinessjournal.com/accounts/login/?next=/news/2016/jul/29/cigar-maker-meets-its-match/" target="_blank"><img src="/image/data/los-ang.png" /></a></Col>
        </Row>
        </Grid>
    );
}

class EnterEmail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: ""};
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }

    handleEmailChange(event) {
        this.setState({email : event.target.value});
    }

    render() {
        return (
            <Grid>
            <Row>
            <Col md={12} className="h-first-cou">
                <h2 className="text-center margin-10">10% off your first order</h2>
                <h4 className="text-center color-white font-tradegothic-stdbold">Simply enter your email here and look for an email with a code to use on your first order.</h4>
                <br />
                <div id="column-left"><div id="formnewsletter">
                    <input type="text" className="input" ref="email" id="email" value={this.state.email} onChange={this.handleEmailChange} placeholder="Your Email Here"></input>
                    <button className="submitemail" id="submitNewsletter">
                        <img src="/image/data/arrow-right.png" alt="right arrow" className="arrow-right-submit" />
                    </button>
                </div></div>
            </Col>
            </Row>
            </Grid>
        );
    }
}

function BlogTags(props){
    const buttonList = props.list.map((item) => <button key={item.tag} className='tag white-border-button blog-tags-but'>{item.tag}</button>);
    return (
        <Grid>
        <Row className="margin-10 blog-tags">
            <Col md={6}>
                <div className="white-line"></div>
                <Row>
                    <Col md={12}>
                    <h3>{props.evergreen}</h3>
                    </Col>
                </Row>
                <div className="white-line"></div>
                <a href="/blog" className="readmore"><img src="/image/data/arrow-right.png" alt="right arrow" className="arrow-right" />Read More</a>
            </Col>
            <Col md={6}>
                <div className="white-line"></div>
                <Row>
                    <Col md={10}>
                    <div className="color-white blog-tags-m">{buttonList}</div>
                    </Col>
                    <Col md={2}>
                        <h3><img src="/image/data/first-cou.png" /></h3>
                    </Col>
                </Row>
                <div className="white-line"></div>
            </Col>
        </Row>
        </Grid>
    );
}

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: ""};
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }

    handleEmailChange(event) {
        this.setState({email : event.target.value});
    }

    render() {
        var inputStyle = {
            marginLeft : "25%"
        }
        return (
        <div>
            <PopupLine />
            <h2 className="text-center margin-10">10% OFF</h2>
            <h2 className="text-center margin-10">Your First Order</h2>
            <div className="white-line"></div>
            <h3 className="text-center margin-10">Use Code <span className="color-white"><b>FIRST</b></span> at Checkout</h3>
            <h4 className="text-center margin-10 color-white">Save This Coupon For Later</h4>
            <div id="formnewsletter_pop">
                <input type="text" style={inputStyle} className="input" id="email_pop" value={this.state.email} onChange={this.handleEmailChange} placeholder="Enter Your Email" />
                <button className="submitemail" id="submitNewsletter_pop"><img src="/image/data/arrow-right.png" alt="right arrow" className="arrow-right-submit" /></button>
            <img id="loading_img_pop" src="image/data/loading1.gif" alt="loading" />
          </div>
        </div>
        );
    }
}

export default HomePage;
