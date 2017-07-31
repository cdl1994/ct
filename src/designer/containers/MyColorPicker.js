import { connect } from 'react-redux';
import MyColorPicker from '../components/MyColorPicker';
import { imageColor } from '../actions/design_tool/ImageAction';

// function mapStateToProps(state) {
//   return {
//     selectedColor: state.colorSelected,
//   }
// }

function mapDispatchToProps(dispatch) {
  return {
    onClickSelected: (color) => dispatch(imageColor(color))
  }
}

const ColorPicker = connect(null, mapDispatchToProps)(MyColorPicker);

export default ColorPicker;