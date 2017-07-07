import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel.js';
import BandCarousel from './band_carousel.js';
import CutBG from './cut_bg.js';
import {Row, Col} from 'react-bootstrap';
import DocumentTitle from 'react-document-title';
import {FirstCouLine} from './whiteline.js';
import Footer from './footer.js';
import Data_JSON from './data.json';

class HomePage extends React.Component {
    constructor(){
        super();
        this.state = Data_JSON;
    }

    componentDidMount(){
    }

    componentDidUpdate(){
    }

    render() {
        var name = this.state.name;
        var homePageStyle = {
            backgroundColor : this.state.theme.backgroundColor,
            color : this.state.theme.titleTextColor,
            fontStyle : this.state.theme.fontStyle,
        }
        return (
            <DocumentTitle title={this.state.pageTitle}>
            <div style={homePageStyle}>
              <div> {name} </div>
              <Carousel list={this.state.carousel}/>
              <CutBG imageURL={this.state.theme.backgroundImage}/>
              <WebsiteLink />     
              <CutBG imageURL={this.state.theme.backgroundImage}/>
              <FirstCouLine />
              <EnterEmail />
              <FirstCouLine />
              <BandCarousel list={this.state.customize}/>
              <CutBG imageURL={this.state.theme.backgroundImage}/>
              <BlogTags list={this.state.readmore}/>
              <Footer />
            </div>
            </DocumentTitle>
        );
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
    );
}

function EnterEmail(props){
    return (
        <Col md={12}>
            <div>10% off your first order</div>
            <div>Simply enter your email here and look for an email with a code to use on your first order.</div>
        </Col>
    );
}

function BlogTags(props){
    const buttonList = props.list.map((item) => <button key={item} className='tag white-border-button blog-tags-but'>{item}</button>);
    return (
        <Row className="margin-10 blog-tags">
            <Col md={6}>
                <div className="white-line"></div>
                <Row>
                    <Col md={12}>
                    <h3>Evergreen Text Goes Here...</h3>
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
    );
}

export default HomePage;