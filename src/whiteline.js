import React from 'react';
import {Row, Col} from 'react-bootstrap';

function WhiteLine(props) {
    return (
        <h3 className="centered-line"><span><img src={props.image} /></span></h3>
    );
}

function PopupLine(props){
    return (
        <Row>
            <Col md={5} className="white-line" style={{left:"20px"}}></Col>
            <Col md={2} className="text-center"><img style={{height:"41px"}} src={props.image}/></Col>
            <Col md={5} className="white-line" style={{right:"20px"}}></Col>
        </Row>
    );
}

export {WhiteLine, PopupLine};
