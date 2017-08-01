import { connect } from 'react-redux';
import PresntSVG from '../components/PresntSVG';
import { selectImage } from '../actions/design_tool/ImageAction';
import { changeImage } from '../actions/design_tool/ImageAction';
import { imageColor } from '../actions/design_tool/ImageAction';


function mapStateToProps(state) {
  return {
    selectedSVG: state.svgSelected,
    selectedColor: state.selectedColor,
    svgImage: state.svgImage,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onClickSelected: (svgID) => dispatch(selectImage(svgID)),
    onChangeSVG: (svg) => dispatch(changeImage(svg)),
    onChangeColor: () => dispatch(imageColor(null)),
  }
}

const SVGSelect = connect(mapStateToProps, mapDispatchToProps)(PresntSVG);

export default SVGSelect;