import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import TextSelect from '../containers/PresntText';
import SVGSelect from '../containers/PresntSVG';


class Step2Presnt extends Component {
  render() {
    console.log(this.props);

    var fontStyle = {fontFamily: this.props.textFont, width:'auto',height: 'auto',fontSize: this.props.textSize, color: this.props.textColor,transform: 'rotate(' + this.props.textStyle.textRotate + 'deg)'};
    var textStyle = {textAlign: 'center',margin: 0, width:'auto',height: 'auto', paddingBottom: '40px', border: '1px solid black', display:'inline-block'};
    // const designbgImage = this.props.designBackground.map(
    //   images => 
    //     <Col xs={6} md={6} id="designbgImage" key={images.image.toString()}>
    //       <img src={images.image} alt="" width="500px" height="300px"/>
    //       <img className="templateOnStep2" src = {this.props.image} alt = {this.props.image}></img>
    //       <Rnd default={{ x: -250, y: 205, width: 500, height: 190, }}
    //           minWidth={100}
    //           minHeight={80}
    //           z={100}>
    //         <div className="box" style={textStyle}>
    //           <text style={fontStyle}>{this.props.textContent}</text>
    //         </div>
    //       </Rnd>
    //     </Col>
    // var textStyle = this.props.textStyle;
    // var fontStyle = {fontFamily: textStyle.textFont, fontSize: textStyle.textSize, color: textStyle.textColor};
    // var boxStyle = {margin: 0, height: '100%', paddingBottom: '40px', border: '1px solid black', transform: 'rotate(' + textStyle.textRotate + 'deg)'};

    var imageHand = this.props.designBackground[0];
    const designbgHand = 
      <Col sm={6} md={6} id="designbgImage" key={imageHand.image.toString()}>
        <img src={imageHand.image} alt="" className='designImageBackground'/>
      </Col>
    ;
    // -----------------------------
    var images = this.props.designBackground[1];
    var textList = this.props.textStyle;
    // var blankBand = this.props.template.image_blank;
    if(this.props.template != null) {
// <<<<<<< HEAD
      var blankBand = this.props.template; 
// =======
//         blankBand = this.props.template; 
//         svgComponent = <PresntSVG image= {blankBand} />;
// >>>>>>> 65a5c4be6065d849c81522265441db2fa19c3b67
    }
    const textComponent = textList.map((text) => (
      <TextSelect textStyle = {text} />
    ));
    const svgComponent = <SVGSelect image={blankBand} />;
    const designbgWood =
      <Col sm={6} md={6} id="designbgImage" key={images.image.toString()}>
        <img src={images.image} alt="" className='designImageBackground'/>
        {textComponent}
        {svgComponent}
      </Col>
    ;
    console.log(blankBand);


    return (
      <Row>
        {designbgHand}
        {designbgWood}
      </Row>
    );
  }
}

export default Step2Presnt;