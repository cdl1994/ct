import { connect } from 'react-redux';
import ChooseFont from '../../components/design_tool/ChooseFont';
import { textFont } from '../../actions/design_tool/FontAction';

function mapDispatchToProps(dispatch) {
  return {
    onChangeFont: (font, id) => dispatch(textFont(font, id))
  }
}

const TextFont = connect(null, mapDispatchToProps)(ChooseFont);

export default TextFont;