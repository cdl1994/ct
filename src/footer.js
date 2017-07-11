import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Columns from 'react-columns';
import {FooterDivider} from './whiteline.js';

function phoneFormatter(phone) {
    var len = phone.length;
    if (len !== 10) return phone;
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
        backgroundPosition: "center",
        paddingLeft: "20px",
        paddingRight: "20px"
    };
    var formattedPhone = phoneFormatter(props.data.phone);
    var telphone = "tel:" + props.data.phone;
    var hrefEmail = "mailto:" + props.data.email;
    var bottomStyle = {
        color: "#fff",
        fontSize: "20px",
        marginBottom: "0",
        lineHeight: "30px",
        fontWight: "normal",
        fontFamily: "Bodoni-stdroman"
    };
    var bottomLinkStyle = {
        color: "#fff"
    };
    const links = props.data.bottomLinks.map((link) => 
        <h3 key={link.link} style={bottomStyle}><a style={bottomLinkStyle} href={link.link}>{link.title}</a></h3>
    );
    var col_queries = [{
        columns: 1,
        query: 'min-width: 1px'
    },
    {
        columns: 2,
        query: 'min-width: 768px'
    }];
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
            <div className="footer-bottom">
            <Columns queries={col_queries}>
                {links}
            </Columns>
            </div>
        </Col>
        </Row>
    );
}

export default Footer;
