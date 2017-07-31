import React, { Component } from 'react';
import Draggable from 'react-draggable';
import { Resizable, ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

class PresntText extends Component {
  constructor() {
    super();
  }
  handleClick(id) {
    console.log("testclick");
    return this.props.actions.onClickSelected(id);
  }

  changeFontStyle(e,data,id) {
    console.log(data);
    console.log(id);
    //eturn this.props.actions.onResizeBox(e,data,id);
    
  }

  render() {
    const textStyle = this.props.textStyle;
    console.log(this.props);
    var fontStyle = { fontFamily: textStyle.textFont, 
                      fontSize: textStyle.textSize, 
                      color: textStyle.textColor,
                      //transform: 'rotate(' + textStyle.textRotate + 'deg)',
                    };
    var boxHeight = textStyle.textSize * 1.5;
    if (boxHeight < 20) {
      boxHeight = 20;
    }

    var boxWidth = boxHeight * textStyle.textContent.length / 2;
    var boxStyle = {  transform: 'rotate(' + textStyle.textRotate + 'deg)',
                      //border:'1px dotted blue',
                      //width: textStyle.boxWidth,
                    };

    if (textStyle.isSelected) {
      var boxStyle = {  transform: 'rotate(' + textStyle.textRotate + 'deg)',
                        //width: textStyle.boxWidth,
                        border:'1px dotted blue',
                     };
    }

    
    return (
      <div className="presentTextDiv" style={boxStyle}>
        <ResizableBox width={boxWidth} 
                      height={boxHeight}
                      lockAspectRatio = {true}
                      //minConstraints={[100, 20]} 
                      //maxConstraints={[600, 300]} 
                      //onResizeStop = {(e,data) => this.changeFontStyle(e,data,textStyle.id)}
                      >
          <Draggable 
            // axis="x"
            // handle=".handle"
            defaultPosition={{x: 0, y: 0}}
            // position={null}
            // grid={[25, 25]}
            // onStart={this.handleStart}
            // onDrag={this.handleDrag}
            // onStop={this.handleStop}
          >
            <div style={fontStyle} onClick = {() => this.handleClick(textStyle.id)}>{textStyle.textContent}</div>
          </Draggable>
        </ResizableBox>
      </div>        
    );
  }
}


export default PresntText;