import React, { Component } from 'react';
import ReactSVG from 'react-svg';


class PresntSVG extends Component {
  constructor(props) {
    super(props);
  }
  handleLoadSvg(svg) {
    var svgArray = [];
    for (var i in svg.children) {
      svgArray.push(i);
    }
    var svgID = svgArray[2];
    var svgContent = document.getElementById(svgID);
    if (svgContent != null) {
      for (var i = 0; i < svgContent.children.length; i++) {
        var svgContentChild = svgContent.children[i];
        var svgContentChildID = svgContent.children[i].getAttribute('id');
        if (svgContentChild.tagName == 'path') {
          svgContentChild.addEventListener("click", (svgContentChildID) => this.handleClickPath(svgContentChildID));
        } else if (svgContentChild.tagName == 'g') {
          svgContentChild.addEventListener("click", (svgContentChildID) => this.handleClickG(svgContentChildID));
        }
      }
    }
    if (this.props.selectedColor != null && this.props.selectedSVG != null) {
      for (var i = 0; i < svgContent.children.length; i++) {
        var svgContentChild = svgContent.children[i];
        if (svgContentChild.id == this.props.selectedSVG) {
          if (svgContentChild.tagName == 'path') {
            //this.changeColorPath(this.props.selectedColor);
            svgContentChild.setAttribute('fill', this.props.selectedColor);
          } else if (svgContentChild.tagName == 'g') {
            for (var j = 0; j < svgContentChild.children.length; j++) {
              svgContentChild.children[j].setAttribute('fill', this.props.selectedColor);
            }
          }
        }
      }
      //this.handleSVGChange(svg);
    }
    console.log(svg);
  }
  handleSVGChange(svg) {
    this.props.onChangeSVG(svg);
    this.props.onChangeColor();
  }
  handleClickPath(svgContent) {
    console.log(svgContent.target.getAttribute('id'));
    this.props.onClickSelected(svgContent.target.getAttribute('id'));
  }
  handleClickG(svgContent) {
    console.log(svgContent.target.parentElement.getAttribute('id'));
    this.props.onClickSelected(svgContent.target.parentElement.getAttribute('id'));
  }
  render() {
    console.log(this.props.selectedSVG);
    console.log(this.props.selectedColor);
    return (
      <ReactSVG
        path={this.props.image}
        callback={svg => this.handleLoadSvg(svg)}
        className="templateOnStep2"/>
    );
  }
}


export default PresntSVG;