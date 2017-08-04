import { connect } from 'react-redux';
import MyColorPicker from '../../components/design_tool/MyColorPicker';
import { imageColor } from '../../actions/design_tool/ImageAction';

function mapDispatchToProps(dispatch) {
  return {
    onClickSelected: (color) => dispatch(imageColor(color))
  }
}

const ColorPicker = connect(null, mapDispatchToProps)(MyColorPicker);

export default ColorPicker;