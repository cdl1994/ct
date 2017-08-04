import { connect } from 'react-redux';
import AddText from '../../components/design_tool/AddText';
import { addText } from '../../actions/design_tool/FontAction';

// function mapStateToProps(state) {
//   return {
//     selectText: state.selectText
//   }
// }

function mapDispatchToProps(dispatch) {
  return {
    onChangeAddText: (text) => dispatch(addText(text))
  }
}

const TextAdd = connect(null, mapDispatchToProps)(AddText);

export default TextAdd;