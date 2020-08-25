

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote];
    case 'REMOVE_QUOTE':
      debugger
      console.log(action)
      return 'hello'
    default:
      return state;
  }
}
