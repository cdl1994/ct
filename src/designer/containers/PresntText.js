import { connect } from 'react-redux';
import PresntText from '../components/PresntText';
import { selectText } from '../actions/design_tool/FontAction';

function mapDispatchToProps(dispatch) {
  return {
  	actions: {
  		onClickSelected: (id) => dispatch(selectText(id)),
        onResizeBox: (e, data, id) => dispatch(selectText(e, data, id))
  	} 
  }
}

const TextSelect = connect(null, mapDispatchToProps)(PresntText);

export default TextSelect;