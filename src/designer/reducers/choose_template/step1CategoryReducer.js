// "state = null" is set so that we don't throw an error when app first boots up
export default function (state = null, action) {
    switch (action.type) {
        case 'CATEGORY_SELECTED':
            return action.payload;
        case 'CHANGE_SELECTED':
          return null;
    }
    return state;
}