import { IMG_COLOR } from '../../actions/design_tool/ImageAction'


function ColorReducer(state = null, action) {
  switch (action.type) {
    case IMG_COLOR:
      return action.color;
    default:
      return state;
  }
}


export default ColorReducer;