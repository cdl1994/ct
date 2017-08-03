import { UPLOAD_IMAGE } from '../../actions/design_tool/UploadImage';

function UploadedImageReducer(state = [], action) {
    switch (action.type) {
        case UPLOAD_IMAGE: {
            var stateList = state.map(imgList =>
            (imgList.isSelected)
            ? {
                ...imgList,
                isSelected: false
              }
            : {
                ...imgList,
                isSelected: false
              }
          );
          return [
            ...stateList,
            {
              id: action.id,
              uri: action.uri,
              isSelected: true,
              positionX: 0,
              positionY: 0,
              boxHeight: 100,
            }
          ]
        }
        default:
            return state;
    }
}

export default UploadedImageReducer;