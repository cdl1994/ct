import { connect } from 'react-redux';
import FontColor from '../../components/design_tool/FontColor';
import { textColor } from '../../actions/design_tool/FontAction';

// function mapStateToProps(state) {
//   return {
//     selectedText: state.selectedText,
//   }
// }

function mapDispatchToProps(dispatch) {
  return {
    onChangeFontColor: (color, id) => dispatch(textColor(color, id))
  }
}

const TextColor = connect(null, mapDispatchToProps)(FontColor);

export default TextColor;