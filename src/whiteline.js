import React from 'react';

function WhiteLine(props) {
    return (
        <h3 className="centered-line"><span><img src={props.image} /></span></h3>
    );
}

function FirstCouLine(props) {
    return (
        <WhiteLine image="/image/data/first-cou.png" />
    );
}

function FooterDivider(props) {
    return (
        <WhiteLine image="/image/data/footer-divider.png" />
    );
}

export {WhiteLine, FirstCouLine, FooterDivider};
