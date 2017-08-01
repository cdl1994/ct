import { connect } from 'react-redux';
import FontRotate from '../../components/design_tool/FontRotate';
import { textRotate } from '../../actions/design_tool/FontAction';

// function mapStateToProps(state) {
//   return {
//     // textRotate: state.textStyle.textRotate,
//     selectedText: state.selectedText,
//   }
// }

function mapDispatchToProps(dispatch) {
  return {
    onChangeDegree: (degree, id) => dispatch(textRotate(degree, id))
  }
  // return bindActionCreators({onChangeFont: textFont}, dispatch);
}

const TextRotate = connect(null, mapDispatchToProps)(FontRotate);

export default TextRotate;