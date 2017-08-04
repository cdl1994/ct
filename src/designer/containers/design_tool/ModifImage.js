// not finished yet
// rightnow no use
import { connect } from 'react-redux';
import ModifImage from '../../components/design_tool/ModifImage';
import { uploadImage } from '../../actions/design_tool/UploadImage.js';

function mapDispatchToProps(dispatch) {
  return {
    onClickUpload: (image) => dispatch(uploadImage(image))
  }
}

const ImageModif = connect(null, mapDispatchToProps)(ModifImage);

export default ImageModif;
