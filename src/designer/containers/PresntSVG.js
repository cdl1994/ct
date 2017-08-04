import { connect } from 'react-redux';
import PresntSVG from '../components/PresntSVG';
import { selectImage } from '../actions/design_tool/ImageAction';
import { changeImage } from '../actions/design_tool/ImageAction';
import { imageColor } from '../actions/design_tool/ImageAction';
import { selectText } from '../actions/design_tool/FontAction';

function mapStateToProps(state) {
  return {
    selectedSVG: state.svgSelected,
    selectedColor: state.selectedColor,
    svgImage: state.svgImage,
    svgText: state.textStyle,
    uploadedImages: state.uploadedImages,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onClickSelectedSVG: (svgID) => dispatch(selectImage(svgID)),
    onChangeSVG: (svg) => dispatch(changeImage(svg)),
    onChangeColor: () => dispatch(imageColor(null)),
    onClickSelectedText: (id) => dispatch(selectText(id)),
  }
}

const SVGSelect = connect(mapStateToProps, mapDispatchToProps)(PresntSVG);

export default SVGSelect;
