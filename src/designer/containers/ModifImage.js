// not finished yet
// rightnow no use
import { connect } from 'react-redux';
import ModifImage from '../components/ModifImage';

function mapDispatchToProps(dispatch) {
  return {
    onClickUpload: (image) => dispatch(uploadImage(image))
  }
}

const TextModif = connect(null, mapDispatchToProps)(ModifImage);

export default ImageModif;