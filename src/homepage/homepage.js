import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel.js';
import BandCarousel from './band_carousel.js';
import CutBG from '../cut_bg.js';
import {Grid, Row, Col} from 'react-bootstrap';
import DocumentTitle from 'react-document-title';
import {WhiteLine, PopupLine} from '../whiteline.js';
import Footer from '../footer.js';
import Header from '../header/header.js'
import CategoryCarousel from './category_carousel.js'
import SkyLight from 'react-skylight';
import Cookies from 'universal-cookie';
import EnterEmail from '../enter_email.js';
import axios from 'axios';
import ReactLoading from 'react-loading';

class HomePage extends React.Component {
    constructor(){
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
            address = window.location.origin;
        }
        else {
            address = "http://52.53.152.61:8080";
            suffix = "&store_id=1";
        }
        axios({
            method: "get",
            url: address + "/index.php?route=common/cp_home/api" + suffix,
        })
        .then((response)=>{            
            this.setState({data: response.data});
            this.props.setPopupImage(this.state.data.theme.sectionDivider);
        })
        .catch(function (error) {
            console.log(error);
        });
        axios({
            method:"get",
            url:address + "/index.php?route=common/cp_header/api" + suffix,
        })
        .then((response)=> {
            this.setState({header: response.data});
        })
        .catch((error)=>{
            console.log(error);
        });
        axios({
            method:"get",
            url:address + "/index.php?route=common/cp_footer/api" + suffix,
        })
        .then((response)=> {
            this.setState({footer: response.data});
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    componentWillMount(){
        this.axiosRequest();
    }
    componentDidMount(){
    }

    componentDidUpdate(){
    }

    render() {
        var footer = this.state.footer == null ? <ReactLoading type="bubbles" color="#444" /> : <Footer data={this.state.footer} />;
        var header = this.state.header == null ? <ReactLoading type="bubbles" color="#444" /> : <Header data={this.state.header} />;
        if (this.state.data != null){
            var homePageStyle = {
                backgroundColor : this.state.data.theme.backgroundColor,
                color : this.state.data.theme.lightTextColor,
                fontStyle : this.state.data.theme.fontStyle,
            }
            var carousel = <Carousel data={this.state.data.carousel} font={this.state.data.theme.fontStyle}/>;

            return (
                <DocumentTitle title={this.state.data.info.title}>
                <div style={homePageStyle}>
                  {header}
                  {carousel}
                  <CutBG imageURL={this.state.data.theme.backgroundImage}/>
                  <CategoryCarousel titleColor={this.state.data.theme.lightTextColor} list={this.state.data.categories} />
                  <CutBG imageURL={this.state.data.theme.backgroundImage}/>
                  <AsSeenIn data={this.state.data.asSeenIn}/>
                  <CutBG imageURL={this.state.data.theme.backgroundImage}/>
                  <WhiteLine image={this.state.data.theme.sectionDivider} />
                  <EnterEmail title="10% OFF YOUR FIRST ORDER" text="Simply enter your email here and look for an email with a code to use on your first order." />
                  <WhiteLine image={this.state.data.theme.sectionDivider} />
                  <BandCarousel list={this.state.data.customize}/>
                  <CutBG imageURL={this.state.data.theme.backgroundImage}/>
                  <BlogTags evergreen={this.state.data.info.evergreen} list={this.state.data.readmore} icon={this.state.data.theme.sectionDivider} />
                  {footer}
                </div>
                </DocumentTitle>
            );
        }
        else{
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

function AsSeenIn(props){
    var containerStyle = {
        margin : "10px",
        textAlign : "center",
    }
    var titleStyle = {
        margin : "auto",
        color : "#4c372e",
        fontFamily : "Bodoni-stdroman",
        fontSize : "2.8vmax",
        textAlign : "center",
    }
    var colStyle = {
        float : "none",
        display : "inline-block",
    }
    var dataList = props.data.map((item)=>
        <Col md={2} xs={2} key={item.image} style={colStyle}><a href={item.link}><img src={item.image}/></a></Col>);
    return (
        <Grid>
        <Row style={containerStyle}>
        <div style={titleStyle}>AS SEEN IN</div>
            {dataList}
        </Row>
        </Grid>
    );
}

function BlogTags(props){
    const buttonList = props.list.map((item) => <button key={item.tag} className='tag white-border-button blog-tags-but'>{item.tag}</button>);
    return (
        <Grid>
        <Row className="margin-10 blog-tags">
            <Col md={6} xs={12}>
                <div className="white-line"></div>
                <Row>
                    <Col md={12} xs={12}>
                    <h3>{props.evergreen}</h3>
                    </Col>
                </Row>
                <div className="white-line"></div>
                <a href="/blog" className="readmore"><img src="/image/catalog/default/misc/arrow-right.png" alt="right arrow" className="arrow-right" />Read More</a>
            </Col>
            <Col md={6} xs={12}>
                <div className="white-line"></div>
                <Row>
                    <Col md={10} xs={10}>
                    <div className="color-white blog-tags-m">{buttonList}</div>
                    </Col>
                    <Col md={2} xs={2}>
                        <h3><img src={props.icon} /></h3>
                    </Col>
                </Row>
                <div className="white-line"></div>
            </Col>
        </Row>
        </Grid>
    );
}

export default HomePage;
