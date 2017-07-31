import { connect } from 'react-redux';
import ChooseFont from '../../components/design_tool/ChooseFont';
import { textFont } from '../../actions/design_tool/FontAction';

// function mapStateToProps(state) {
//   return {
//     selectedText: state.selectedText,
//   }
// }

function mapDispatchToProps(dispatch) {
  return {
    onChangeFont: (font, id) => dispatch(textFont(font, id))
  }
  // return bindActionCreators({onChangeFont: textFont}, dispatch);
}

const TextFont = connect(null, mapDispatchToProps)(ChooseFont);

export default TextFont;