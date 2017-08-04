// redux: action for CPStep2 - change template svg color

export const SELECT_IMG = 'selectImage';
export const IMG_COLOR = 'imageColor';
export const IMG_CHANGE = 'imageChange';

// set the selected image
export function selectImage(id) {
  return {
    type: SELECT_IMG,
    id: id
  }
}

// set the color selected in color picker
export function imageColor(color) {
  return {
    type: IMG_COLOR,
    color: color
  }
}

// no use
export function changeImage(svg) {
  return {
    type: IMG_CHANGE,
    svg: svg
  }
}