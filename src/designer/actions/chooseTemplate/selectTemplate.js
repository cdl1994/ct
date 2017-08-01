// redux: action for CPStep1 - choose/change template

export const selectTemplate = (template) => {
  return {
    type: 'TEMPLATE_SELECTED',
    template : template
  }
};