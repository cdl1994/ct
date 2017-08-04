import { connect } from 'react-redux';
import DeleteText from '../../components/design_tool/DeleteText';
import { deleteText } from '../../actions/design_tool/FontAction';

function mapDispatchToProps(dispatch) {
  return {
    onClickDeleteText: (id) => dispatch(deleteText(id)),
  }
}

const TextDelete = connect(null, mapDispatchToProps)(DeleteText);

export default TextDelete;