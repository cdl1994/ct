import { TEXT_CONTENT, TEXT_FONT, TEXT_SIZE, TEXT_COLOR, TEXT_ROTATE, ADD_TEXT, DELETE_TEXT, SELECT_TEXT,RESIZ_BOX } from '../../actions/design_tool/FontAction'

// const initialState = {
//   textContent: '',
//   textFont: '',
//   textSize: '',
//   textColor: 'black',
//   textRotate: 0,
// }

// function TextReducer(state = initialState, action) {
//   var textContent = state.textContent;
//   var textFont = state.textFont;
//   var textSize = state.textSize;
//   var textColor = state.textColor;
//   var textRotate = state.textRotate;
//   switch (action.type) {
//     case TEXT_CONTENT: {
//       textContent = action.data;
//       break;
//     }
//     case TEXT_FONT: {
//       textFont = action.data;
//       break;
//     }
//     case TEXT_SIZE: {
//       textSize = action.data;
//       break;
//     }
//     case TEXT_COLOR: {
//       textColor = action.data;
//       break;
//     }
//     case TEXT_ROTATE: {
//       textRotate = action.data;
//       break;
//     }
//   }
//   return {
//     textContent,
//     textFont,
//     textSize,
//     textColor,
//     textRotate
//   }
// }

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
          textSize: '',
          textColor: 'black',
          textRotate: 0,
          isSelected: true,
          positionX: 0,
          positionY: 0,
          boxWidth: 0,
          boxHeight: 20,
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
      if (tempTextList.length == 0) {
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
    case RESIZ_BOX: {
      return state.map(textList =>
        (textList.id === action.id)
        ? {
            ...textList,
            boxHeight: action.data.size.height,
            boxWidth: action.data.size.width
          }
        : {
            ...textList,
          }
      )
    }
    default:
      return state
  }
}

            // id: textList.id,
            // textContent: textList.textContent,
            // textFont: textList.textFont,
            // textSize: textList.textSize,
            // textColor: textList.textColor,
            // textRotate: textList.textRotate,



export default TextReducer;

