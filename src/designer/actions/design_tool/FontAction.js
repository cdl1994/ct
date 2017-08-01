// redux: action for CPStep2 - text insert/font/size/color/rotate/resize/...

export const TEXT_CONTENT = 'textContent';
export const TEXT_FONT = 'textFont';
export const TEXT_SIZE = 'textSize';
export const TEXT_COLOR = 'textColor';
export const TEXT_ROTATE = 'textRotate';
export const ADD_TEXT = 'addText';
export const SELECT_TEXT = 'selectText';
export const DELETE_TEXT = 'deleteText';
export const RESIZ_BOX = 'resizeBox';

var nextTextId = 0

export function textContent(content, id) {
  return {
    type: TEXT_CONTENT,
    data: content,
    id: id
  }
}

export function textFont(font, id) {
  return {
    type: TEXT_FONT,
    data: font,
    id: id
  }
}

export function textSize(size, id) {
  return {
    type: TEXT_SIZE,
    data: size,
    id: id
  }
}

export function textColor(color, id) {
  return {
    type: TEXT_COLOR,
    data: color,
    id: id
  }
}

export function textRotate(degree, id) {
  return {
    type: TEXT_ROTATE,
    data: degree,
    id: id
  }
}

export function addText(text) {
  return {
    type: ADD_TEXT,
    data: text,
    id: nextTextId++
  }
}

export function deleteText(id) {
  return {
    type: DELETE_TEXT,
    id: id
  }
}

export function selectText(id) {
  return {
    type: SELECT_TEXT,
    id: id
  }
}

export function resizeBox(e, data, id) {
  return {
    type: RESIZ_BOX,
    id: id
  }
}
