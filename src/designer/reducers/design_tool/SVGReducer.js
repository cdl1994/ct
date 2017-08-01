import { IMG_CHANGE } from '../../actions/design_tool/ImageAction'

export default function (state = null, action) {
  switch (action.type) {
    case IMG_CHANGE:
      return action.svg;
    default:
      return state;
  }
}