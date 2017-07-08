import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {FooterDivider} from './whiteline.js';

function phoneFormatter(phone) {
    var len = phone.length;
    if (len != 10) return phone;
    var res = "(" + phone.slice(0, 3);
    res += ") " + phone.slice(3, 6);
    res += "-" + phone.slice(6, 10);
    return res;
}

function Footer(props) {
    var footerStyle = {
        background: "url(" + props.data.background + ")",
        backgroundAttachment: "fixed",
        paddingBottom: "25px",
        backgroundSize: "cover",
        backgroundPosition: "center"
    };
    var formattedPhone = phoneFormatter(props.data.phone);
    var telphone = "tel:" + props.data.phone;
    var hrefEmail = "mailto:" + props.data.email;
    return (
        <Row style={footerStyle}>
        <Col md={12} className="new_footer">
            <Row>
            <Col md={6} className="footer_first">
                <p>{props.data.serviceName}</p>
                <a href={telphone}>{formattedPhone}</a>
            </Col>
            <Col md={6} className="footer_sec">
                <ul className="contact-us pull-right">
                    <li>{props.data.address1}</li> 
                    <li>{props.data.address2}</li>
                    <li>{props.data.address3}</li>
                    <li><a href={hrefEmail} className="brightblue">{props.data.email}</a></li>
                </ul>
            </Col>
            </Row>
            <FooterDivider />
            <Row className="footer-bottom">
            <Col md={6}>
                <h3 className="color-white"><a href="/blog/post/2017/06/05/food-wine-cigar-pairings-truly-elite/">Wine, Cigar, and Food Pairings for the Truly Elite</a></h3>
                <h3 className="color-white"><a href="/blog/post/2017/06/01/linguistic-history-word-cigar/">Linguistic History of the Word ‘Cigar’ and its Slang</a></h3>
            </Col>
            <Col md={6}>
                <h3 className="color-white"><a href="/blog/post/2017/05/31/tobacco-cigar-10-fun-facts/">Tobacco and Cigars: 10 Facts You Probably Didn’t Already Know</a></h3>
                <h3 className="color-white"><a href="/blog/post/2017/05/18/sleep-cigar-restful-evening/">Cigar Etiquette and Sleep: Indulge for a More Restful Evening</a></h3>
            </Col>
            </Row>
        </Col>
        </Row>
    );
}

export default Footer;
