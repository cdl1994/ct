
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import CategoryList from '../../components/choose_template/step1CategoryComponent'

import { selectCategory } from '../../actions/choose_template/selectCategory'


function matchDispatchToProps(dispatch){
  return bindActionCreators({selectCategory: selectCategory}, dispatch);
}


export default connect(null,matchDispatchToProps)(CategoryList);