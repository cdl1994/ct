import React from 'react';
import HomePage from './homepage.js'
import Cookies from 'universal-cookie';
import SkyLight from 'react-skylight';
import {PopupLine} from '../whiteline.js';
import {Row,Col} from 'react-bootstrap';

class HomePageWithPopup extends React.Component {
    constructor() {
        super();
        this.state={
            image : null,
        }
        this.getPopupImage = this.getPopupImage.bind(this);
    }

    getPopupImage(img){
        this.setState({
            image : img,
        });
    }

    componentDidMount(){
        const cookies = new Cookies();
        if (cookies.get('submitemail') != '1')
            this.refs.popupWindow.show();
    }

    render() {
        var popupStyle = {
            backgroundColor : "#dcc0ba",
        }
        var overlayStyle = {
            backgroundColor : "rgba(0,0,0,.6)",
        }
        return (
            <div>
                <HomePage setPopupImage={this.getPopupImage}/>
                <div>
                    <SkyLight dialogStyles={popupStyle} overlayStyles={overlayStyle} hideOnOverlayClicked ref="popupWindow">
                        <Popup image={this.state.image}/>
                    </SkyLight>
                </div>
            </div>
        );
    }
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
            <PopupLine image={this.props.image} />
            <h2 className="text-center margin-10">10% OFF</h2>
            <h2 className="text-center margin-10">Your First Order</h2>
            <div className="white-line"></div>
            <h3 className="text-center margin-10">Use Code <span className="color-white"><b>FIRST</b></span> at Checkout</h3>
            <h4 className="text-center margin-10 color-white">Save This Coupon For Later</h4>
            <div id="formnewsletter_pop">
                <input type="text" style={inputStyle} className="input" id="email_pop" value={this.state.email} onChange={this.handleEmailChange} placeholder="Enter Your Email" />
                <button className="submitemail" id="submitNewsletter_pop"><img src="/image/data/default/misc/arrow-right.png" alt="right arrow" className="arrow-right-submit" /></button>
            <img id="loading_img_pop" src="image/data/loading1.gif" alt="loading" />
          </div>
        </div>
        );
    }
}

export default HomePageWithPopup;
