import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import SVG from 'svg.js';

// Step2 Present part: present svg image and handle changes
// not finish yet
class PresntSVG extends Component {
  constructor(props) {
    super(props);
    this.state = {
      draw: null,
      currentUrl: "",
    }
  }
  componentWillMount() {
    this.setState({currentUrl: this.props.image});
    fetch(this.props.image)
      .then((response) => response.text())
      .then((data) => {
        var draw = SVG('bandSVGImage');
        this.setState({
          draw: draw
        });
        this.handleLoadSvg(data);
      }); 
  }
  componentDidUpdate() {
    if (this.state.currentUrl != this.props.image) {
      this.setState({currentUrl: this.props.image});
      fetch(this.props.image)
        .then((response) => response.text())
        .then((data) => this.handleLoadSvg(data));
    }
  }
  handleLoadSvg(svg) {
    //var s = new XMLSerializer().serializeToString(svg);
    console.log(this.props);
    this.props.onChangeSVG(svg);
    this.state.draw.clear();
    var final = this.state.draw.svg(this.props.svgImage);
    // final.node.lastElementChild.width.baseVal.value gets the actual width of the background image,
    // and correspondingly change the band template's width
    final.viewbox(0, 0, final.node.lastElementChild.width.baseVal.value, final.node.lastElementChild.height.baseVal.value);
    var svgImage = final.svg();
    
    var svgArray = [];
    for (var i in svgImage) {
      svgArray.push(i);
    }
    // var svgID = svgArray[2];
    // var svgContent = document.getElementById(svgID);
    // if (svgContent != null) {
    //   for (var i = 0; i < svgContent.children.length; i++) {
    //     var svgContentChild = svgContent.children[i];
    //     var svgContentChildID = svgContent.children[i].getAttribute('id');
    //     if (svgContentChild.tagName == 'path') {
    //       svgContentChild.addEventListener("click", (svgContentChildID) => this.handleClickPath(svgContentChildID));
    //     } else if (svgContentChild.tagName == 'g') {
    //       svgContentChild.addEventListener("click", (svgContentChildID) => this.handleClickG(svgContentChildID));
    //     }
    //   }
    // }
    // if (this.props.selectedColor != null && this.props.selectedSVG != null) {
    //   for (var i = 0; i < svgContent.children.length; i++) {
    //     var svgContentChild = svgContent.children[i];
    //     if (svgContentChild.id == this.props.selectedSVG) {
    //       if (svgContentChild.tagName == 'path') {
    //         //this.changeColorPath(this.props.selectedColor);
    //         svgContentChild.setAttribute('fill', this.props.selectedColor);
    //       } else if (svgContentChild.tagName == 'g') {
    //         for (var j = 0; j < svgContentChild.children.length; j++) {
    //           svgContentChild.children[j].setAttribute('fill', this.props.selectedColor);
    //         }
    //       }
    //     }
    //   }
    // }
    // console.log(svg);
  }
  handleSVGChange(svg) {
    this.props.onChangeSVG(svg);
    this.props.onChangeColor();
  }
  handleClickPath(svgContent) {
    //console.log(svgContent.target.getAttribute('id'));
    this.props.onClickSelected(svgContent.target.getAttribute('id'));
  }
  handleClickG(svgContent) {
    //console.log(svgContent.target.parentElement.getAttribute('id'));
    this.props.onClickSelected(svgContent.target.parentElement.getAttribute('id'));
  }
  render() {
    
    // if (this.props.svgImage == null) {
    //   console.log(this.props.image);
    //   return (
    //     <ReactSVG
    //       path={this.props.image}
    //       callback={svg => this.handleLoadSvg(svg)}
    //       className="templateOnStep2"/>
    //   );
    // } else {
      //console.log(this.props.svgImage);
      // var draw = SVG('bandSVGImage');
      // var final = draw.svg(this.props.svgImage);
      // final.viewbox(0, 0, parseInt(final.last().width()), parseInt(final.last().height()));
      // var svgImage = final.svg();
    return null;
    // }
  }
}


export default PresntSVG;