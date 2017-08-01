import { connect } from 'react-redux';
import ModifText from '../components/ModifText';

// function mapDispatchToProps(dispatch) {
//   return {
//     onClickSelected: (id) => dispatch(selectText(id))
//   }
// }

function mapStateToProps(state) {
  return {
    textList: state.textStyle,
  }
}

const TextModif = connect(mapStateToProps)(ModifText);

export default TextModif;