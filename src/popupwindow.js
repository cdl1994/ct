import React from 'react';
import SkyLight from 'react-skylight';
import {FirstCouLine} from './whiteline.js';

class PopupWindow extends React.Component {
    render() {
        var popupStyle = {
            backgroundColor : '#dcc0ba'
        }
        return (
            <SkyLight dialogStyles={popupStyle} hideOnOverlayClicked ref="popupWindow" title=".">
            <div>
                <FirstCouLine />
                <h2 className="text-center margin-10">10% OFF</h2>
                <h2 className="text-center margin-10">Your First Order</h2>
                <div className="white-line"></div>
                <h3 className="text-center margin-10">Use Code <span className="color-white"><b>FIRST</b></span> at Checkout</h3>
                <h4 className="text-center margin-10 color-white">Save This Coupon For Later</h4>
            </div>
            </SkyLight>
        );
    }
}

export default PopupWindow;
