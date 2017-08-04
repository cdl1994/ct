import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Dropzone from 'react-dropzone';

// Step2 modify image: upload/delete images
// not finished yet
class ModifImage extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(img) {
    var reader = new FileReader();
    var dispatcher = this.props.onClickUpload;
    reader.addEventListener("load", function () {
      var uri = reader.result;
      dispatcher(uri);
    }, false);
    if (img[0]) {
      reader.readAsDataURL(img[0]);
    }
  }

  render() {
    return (
      <div >
        <p className='step2Title'>{this.props.children}</p>
        <Button className='step2ButtonBorder'>
          <Dropzone style={{border:'0px'}} onDrop={(img) => this.handleClick(img)}>
            UPLOAD IMAGE OR LOGO
          </Dropzone>
        </Button>
        <Button className='step2ButtonBorder'>SELECT FROM GALLERY</Button>
        <Button className='step2ButtonBorder'>DELETE SELECTED IMAGE</Button>
      </div>
    );
  }
}

export default ModifImage;