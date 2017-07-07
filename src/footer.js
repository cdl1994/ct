import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {FooterDivider} from './whiteline.js';

class Footer extends React.Component {
    render() {
        return (
            <Row>
            <Col md={12} className="new_footer">
                <Row>
                <Col md={6} className="footer_first">
                    <p>Free Concierge Design Service</p>
                    <a href="tel:4242268612">(424) 226-8612</a>
                </Col>
                <Col md={6} className="footer_sec">
                    <ul class="contact-us pull-right">
                        <li>1642 Westwood Blvd</li> 
                        <li>Suite 200</li>
                        <li>Los Angeles, CA 90024</li>
                        <li><a href="mailto:connect@customtobacco.com" class="brightblue">connect@customtobacco.com</a></li>
                    </ul>
                </Col>
                </Row>
                <FooterDivider />
                <Row className="footer-bottom">
                <Col md={6}>
                    <h3 class="color-white"><a href="/blog/post/2017/06/05/food-wine-cigar-pairings-truly-elite/">Wine, Cigar, and Food Pairings for the Truly Elite</a></h3>
                    <h3 class="color-white"><a href="/blog/post/2017/06/01/linguistic-history-word-cigar/">Linguistic History of the Word ‘Cigar’ and its Slang</a></h3>
                </Col>
                <Col md={6}>
                    <h3 class="color-white"><a href="/blog/post/2017/05/31/tobacco-cigar-10-fun-facts/">Tobacco and Cigars: 10 Facts You Probably Didn’t Already Know</a></h3>
                    <h3 class="color-white"><a href="/blog/post/2017/05/18/sleep-cigar-restful-evening/">Cigar Etiquette and Sleep: Indulge for a More Restful Evening</a></h3>
                </Col>
                </Row>
            </Col>
            </Row>
        );
    }
}

export default Footer;
