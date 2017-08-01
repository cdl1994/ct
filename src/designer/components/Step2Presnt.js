import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import TextSelect from '../containers/PresntText';
import SVGSelect from '../containers/PresntSVG';

// Step2 present: present the results of modification part
// including two parts: present text and present svg
class Step2Presnt extends Component {
  render() {
    // console.log(this.props);
    var fontStyle = {fontFamily: this.props.textFont, width:'auto',height: 'auto',fontSize: this.props.textSize, color: this.props.textColor,transform: 'rotate(' + this.props.textStyle.textRotate + 'deg)'};
    var textStyle = {textAlign: 'center', margin: 0, width:'auto',height: 'auto', paddingBottom: '40px', border: '1px solid black', display:'inline-block'};
    
    // left background image
    var imageHand = this.props.designBackground[0];
    const designbgHand = 
      <Col sm={6} md={6} id="designbgImage1" key={imageHand.image.toString()}>
        <img src={imageHand.image} alt="" className='designImageBackground'/>
      </Col>;

    // right background image
    var images = this.props.designBackground[1];
    var textList = this.props.textStyle;

    const textComponent = textList.map((text) => (<TextSelect textStyle = {text} />));
    var designbgWood;
    if(this.props.template != null) {
      var blankBand = this.props.template; 
      const svgComponent = <SVGSelect image={blankBand} />;
      designbgWood = 
      <Col sm={6} md={6} id="designbgImage2" key={images.image.toString()}>
        <div id='bandSVGImage' className='designImageBackground' style={{background: 'url('+images.image+')'}}>
          { textComponent }
          { svgComponent }
        </div>
      </Col>;
    } else {
      designbgWood = 
      <Col sm={6} md={6} id="designbgImage2" key={images.image.toString()}>
        <div id='bandSVGImage' className='designImageBackground' style={{background: 'url('+images.image+')'}}>
          { textComponent }
        </div>
      </Col>;
    }
    return (
      <Row>
        { designbgHand }
        { designbgWood }
      </Row>
    );
  }
}

export default Step2Presnt;