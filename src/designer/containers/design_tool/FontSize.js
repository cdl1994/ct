import { connect } from 'react-redux';
import FontSize from '../../components/design_tool/FontSize';
import { textSize } from '../../actions/design_tool/FontAction';

// function mapStateToProps(state) {
//   return {
//     selectedText: state.selectedText,
//   }
// }

function mapDispatchToProps(dispatch) {
  return {
    onChangeFontSize: (size, id) => dispatch(textSize(size, id))
  }
}

const TextSize = connect(null, mapDispatchToProps)(FontSize);

export default TextSize;