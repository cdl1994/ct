import React from 'react';
import ReactDOM from 'react-dom';
import TobaccoCarousel from './tobacco_carousel.js';
import BandCarousel from './band_carousel.js';
import CutBG from './cut_bg.js';
import {Grid, Row, Col} from 'react-bootstrap';
import DocumentTitle from 'react-document-title';
import {WhiteLine, PopupLine} from './whiteline.js';
import Footer from './footer.js';
import Header from './header.js'
import CategoryCarousel from './category_carousel.js'
import SkyLight from 'react-skylight';
import Cookies from 'universal-cookie';
import EnterEmail from './enter_email.js';
import axios from 'axios';

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
            address = window.location.host;
        }
        else {
            address = "52.53.152.61:8080";
            suffix = "&store_id=1";
        }
        axios({
            method:"get",
            url:"http://" + address + "/index.php?route=common/cp_home/api" + suffix,
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
            url:"http://" + address + "/index.php?route=common/cp_header/api" + suffix,
        })
        .then((response)=> {
            this.setState({header: response.data});
        })
        .catch((error)=>{
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
    }

    componentWillMount(){
        this.axiosRequest();
    }
    componentDidMount(){
    }

    componentDidUpdate(){
    }

    render() {
        var footer = this.state.footer == null ? null : <Footer data={this.state.footer} />;
        var header = this.state.header == null ? null : <Header data={this.state.header} />;
        if (this.state.data != null){
            var homePageStyle = {
                backgroundColor : this.state.data.theme.backgroundColor,
                color : this.state.data.theme.lightTextColor,
                fontStyle : this.state.data.theme.fontStyle,
            }
            var carousel = <TobaccoCarousel data={this.state.data.carousel}/>;

            return (
                <DocumentTitle title={this.state.data.info.title}>
                <div style={homePageStyle}>
                  {header}
                  {carousel}
                  <CutBG imageURL={this.state.data.theme.backgroundImage}/>
                  <CategoryCarousel titleColor={this.state.data.theme.darkTextColor} list={this.state.data.categories} />
                  <CutBG imageURL={this.state.data.theme.backgroundImage}/>
                  <AsSeenIn data={this.state.data.asSeenIn}/>
                  <CutBG imageURL={this.state.data.theme.backgroundImage}/>
                  <WhiteLine image={this.state.data.theme.sectionDivider} />
                  <EnterEmail />
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
            return (
                <div>Loading</div>
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
                <a href="/blog" className="readmore"><img src="/image/data/default/misc/arrow-right.png" alt="right arrow" className="arrow-right" />Read More</a>
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
