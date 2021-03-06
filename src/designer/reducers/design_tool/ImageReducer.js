import { SELECT_IMG } from '../../actions/design_tool/ImageAction'

// reducer for set which svg part is selected
function ImageReducer(state = null, action) {
  switch (action.type) {
    case SELECT_IMG:
      return action.id;
    default:
      return state;
  }
}


export default ImageReducer;