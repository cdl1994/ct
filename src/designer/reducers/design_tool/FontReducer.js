import { TEXT_CONTENT, TEXT_FONT, TEXT_SIZE, TEXT_COLOR, TEXT_ROTATE, ADD_TEXT, DELETE_TEXT, SELECT_TEXT } from '../../actions/design_tool/FontAction'

// text arrary structure
// id: unique id,
// textContent: text content, TEXT_CONTENT
// textFont: font, TEXT_FONT
// textSize: text size, TEXT_SIZE
// textColor: text color, TEXT_COLOR
// textRotate: rotate degree, TEXT_ROTATE
// isSelected: true/false, SELECT_TEXT

// ADD_TEXT: add a new text object into the array, change all isSelected to FALSE
// DELETE_TEXT: delete a selected text object from the array

function TextReducer(state = [], action) {
  switch (action.type) {
    case TEXT_CONTENT: {
      return state.map(textList =>
        (textList.id === action.id)
        ? { 
            ...textList,
            textContent: action.data
          }
        : {
            ...textList,
          }
      )
    }
    case TEXT_FONT: {
      return state.map(textList =>
        (textList.id === action.id)
        ? {
            ...textList,
            textFont: action.data
          }
        : {
            ...textList,
          }
      )
    }
    case TEXT_SIZE: {
      return state.map(textList =>
        (textList.id === action.id)
        ? {
            ...textList,
            textSize: action.data
          }
        : {
            ...textList,
          }
      )
    }
    case TEXT_COLOR: {
      return state.map(textList =>
        (textList.id === action.id)
        ? {
            ...textList,
            textColor: action.data
          }
        : {
            ...textList,
          }
      )
    }
    case TEXT_ROTATE: {
      return state.map(textList =>
        (textList.id === action.id)
        ? {
            ...textList,
            textRotate: action.data
          }
        : {
            ...textList,
          }
      )
    }
    case ADD_TEXT: {
      var stateList = state.map(textList =>
        (textList.isSelected)
        ? {
            ...textList,
            isSelected: false
          }
        : {
            ...textList,
            isSelected: false
          }
      );
      return [
        ...stateList,
        {
          id: action.id,
          textContent: action.data,
          textFont: '',
          textSize: '36',
          textColor: 'black',
          textRotate: 0,
          isSelected: true,
        }
      ]
    }
    case DELETE_TEXT: {
      var tempTextList = [];
      for (var i = 0; i < state.length; i++) {
        if (state[i].id !== action.id) {
          tempTextList.push(state[i]);
        }
      }
      if (tempTextList.length === 0) {
        return [];
      }
      var maxID = tempTextList[tempTextList.length - 1].id;
      return tempTextList.map(textList =>
        (textList.id === maxID)
        ? {
            ...textList,
            isSelected: true,
          }
        : {
            ...textList,
            isSelected: false
          }
      );
    }
    case SELECT_TEXT: {
      return state.map(textList =>
        (textList.id === action.id)
        ? {
            ...textList,
            isSelected: true,
          }
        : {
            ...textList,
            isSelected: false,
          }
      )
    }
    default:
      return state
  }
}


export default TextReducer;
