import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import SVG from 'svg.js';
import interact from 'interactjs';

// Step2 Present part: present svg image and handle changes
// not finish yet
class PresntSVG extends Component {
  constructor(props) {
    super(props);
    this.state = {
      draw: null,
      currentUrl: "",
      uploadedImageId: [],
      textIdDict: new Array(),
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
    // drag action
    var dragMoveListener = function(event) {
      var target = event.target,
      x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
      y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
      target.style.webkitTransform =
      target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)';
      target.setAttribute('data-x', x);
      target.setAttribute('data-y', y);
    };
    // resize action
    var resizeListener = function(event) {
      var target = event.target,
      x = (parseFloat(target.getAttribute('data-x')) || 0),
      y = (parseFloat(target.getAttribute('data-y')) || 0);
      target.style.width  = event.rect.width + 'px';
      target.style.height = event.rect.height + 'px';
      x += event.deltaRect.left;
      y += event.deltaRect.top;
      target.style.webkitTransform = target.style.transform =
          'translate(' + x + 'px,' + y + 'px)';
      target.setAttribute('data-x', x);
      target.setAttribute('data-y', y);
      target.textContent = Math.round(event.rect.width) + 'x' + Math.round(event.rect.height);
    };
    // change band template
    if (this.state.currentUrl != this.props.image) {
      this.setState({currentUrl: this.props.image});
      fetch(this.props.image)
        .then((response) => response.text())
        .then((data) => this.handleLoadSvg(data));
    }
    // add and modify text
    const svgText = this.props.svgText;
    const textIdDict = this.state.textIdDict;
    for (let currTextID in textIdDict) {
      SVG.get(textIdDict[currTextID]).remove();
      delete textIdDict[currTextID];
    }
    for (let i = 0; i < svgText.length; i++) {
      let currText = svgText[i];
      let text = this.state.draw.text(currText.textContent);
      textIdDict[currText.id] = text.node.id;
      text.font({fill: currText.textColor, family: currText.textFont, size: currText.textSize});
      text.x('40%').y('40%');
      text.rotate(currText.textRotate);
      interact('#' + text.node.id)
        .draggable({
          onmove: dragMoveListener,
        });
    }
    // change svg color
    if (this.props.selectedColor != null && this.props.selectedSVG != null) {
      var selectedSVGPart = SVG.get(this.props.selectedSVG);
      if (selectedSVGPart.type === 'path') {
        selectedSVGPart.fill(this.props.selectedColor);
      } else if (selectedSVGPart.type === 'g') {
        for (let i = 0; i < selectedSVGPart.children().length; i++) {
          selectedSVGPart.children()[i].fill(this.props.selectedColor);
        }
      }
    }
    // upload image
    var outer = this;
    this.props.uploadedImages.forEach(function(element) {
      if (outer.state.uploadedImageId.includes(element.id)) return;
      outer.state.uploadedImageId.push(element.id);
      var uploaded_img = outer.state.draw.image(element.uri);
      uploaded_img.size(null, element.boxHeight);
      uploaded_img.node.removeAttribute('width');
      interact('#' + uploaded_img.node.id)
        .draggable({
          onmove: dragMoveListener,
        })
        .resizable({
          preserveAspectRatio: true,
          edges: { left: true, right: true, bottom: true, top: true },
        })
        .on('resizemove', resizeListener);
    });
  }
  handleLoadSvg(svg) {
    this.props.onChangeSVG(svg);
    this.state.draw.clear();
    var drawSVG = this.state.draw.svg(this.props.svgImage);
    // final.node.lastElementChild.width.baseVal.value gets the actual width of the background image,
    // and correspondingly change the band template's width
    drawSVG.viewbox(0, 0, drawSVG.node.lastElementChild.width.baseVal.value, drawSVG.node.lastElementChild.height.baseVal.value);

    // console.log(final.on('click', (event) => this.handleClick(event)));

    var drawSVGChildren = drawSVG.children()[0].children()[1].children();

    for (let i = 0; i < drawSVGChildren.length; i++) {
      var currentChild = drawSVGChildren[i].node;
      var currentChildId = currentChild.id;
      if (currentChild.tagName === 'path') {
        currentChild.addEventListener("click", (currentChildID) => this.handleClickPath(currentChildID));
      } else if (currentChild.tagName === 'g') {
        currentChild.addEventListener("click", (currentChildID) => this.handleClickG(currentChildID));
      } else if (currentChild.tagName === 'text') {
        console.log(currentChild);
      }
    }
    
    // !!!!!!!
    // var svgImage = drawSVG.svg();
    // this.props.onChangeSVG(svgImage);
    // !!!!!!!

  }
  handleClickPath(svgContent) {
    console.log(svgContent.target.getAttribute('id'));
    this.props.onClickSelectedSVG(svgContent.target.getAttribute('id'));
  }
  handleClickG(svgContent) {
    //console.log(svgContent.target.parentElement.getAttribute('id'));
    console.log(svgContent.target.parentElement.getAttribute('id'));
    this.props.onClickSelectedSVG(svgContent.target.parentElement.getAttribute('id'));
  }
  render() {
    // console.log(this.props);
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

