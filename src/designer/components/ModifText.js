import React, { Component } from 'react';
import { Col, Button } from 'react-bootstrap';
import TextContent from '../containers/design_tool/InsertText'
import TextSize from '../containers/design_tool/FontSize';
import TextFont from '../containers/design_tool/ChooseFont';
import TextColor from '../containers/design_tool/FontColor';
import TextRotate from '../containers/design_tool/FontRotate';
import TextAdd from '../containers/design_tool/AddText';
import TextDelete from '../containers/design_tool/DeleteText';


class ModifText extends Component {
  findSelectedText(textList) {
    // var selected = textList.map(text =>
    //   if (text.isSelected == true) {
    //     return text
    //   })
    // );
    for (var i=0; i < textList.length; i++) {
      if (textList[i].isSelected == true) {
        return textList[i]
      }
    }
    //console.log(selected);
    // return selected;
  }
  render() {
    const textList = this.props.textList;
   // console.log(textList);
    if (textList.length == 0) {
      return (
        <div>
          <p className='step2Title'>{this.props.children}</p>
          <TextContent functionType="ADD" selectedText={""} id={null}/>
          <TextFont selectedTextFont="" id={null}/>
          <TextSize selectedTextSize="" id={null}/>
          <TextRotate selectedTextRotate="" id={null}/>
          <TextColor selectedTextColor="" id={null}/>
          <TextDelete id={null}/>
          <TextAdd />
        </div>
      );
    } else {
      var selectedTextObj = this.findSelectedText(textList);
      return (
        <div>
          <p className='step2Title'>{this.props.children}</p>
          <TextContent functionType="MODIFTY" selectedText={selectedTextObj.textContent} id={selectedTextObj.id}/>
          <TextFont selectedTextFont={selectedTextObj.textFont} id={selectedTextObj.id}/>
          <TextSize selectedTextSize={selectedTextObj.textSize} id={selectedTextObj.id}/>
          <TextRotate selectedTextRotate={selectedTextObj.textRotate} id={selectedTextObj.id}/>
          <Col md={4}>
            <TextColor selectedTextColor={selectedTextObj.textColor} id={selectedTextObj.id}/>
          </Col>
          <TextDelete textList={textList} id={selectedTextObj.id}/>
          <TextAdd />
        </div>
      );
    }
  }
}

export default ModifText;