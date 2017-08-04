export default function (state = null, action) {
  switch (action.type) {
    case 'TEMPLATE_SELECTED':
      return action.template;
    }
    return state;
}