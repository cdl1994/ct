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