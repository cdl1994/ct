import { connect } from 'react-redux';
import InsertText from '../../components/design_tool/InsertText';
import { textContent, addText, deleteText } from '../../actions/design_tool/FontAction';

// function mapStateToProps(state) {
//   return {
//     textList: state.textStyle,
//   }
// }

function mapDispatchToProps(dispatch) {
  return {
    onChangeTextContent: (text, id) => dispatch(textContent(text, id)),
    onChangeAddText: (text) => dispatch(addText(text)),
    onChangeDeleteText: (id) => dispatch(deleteText(id))
  }
  // return bindActionCreators({onChangeTextContent: textContent}, dispatch);
}

const TextContent = connect(null, mapDispatchToProps)(InsertText);

export default TextContent;
