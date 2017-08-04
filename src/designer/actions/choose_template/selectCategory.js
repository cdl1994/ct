// redux: action for CPStep1 - choose/change category

export const selectCategory = (category) => {
  return {
    type: 'CATEGORY_SELECTED',
    payload: category
  }
};

export const selectChange = () => {
  return {
    type: 'CHANGE_SELECTED',
  }
};