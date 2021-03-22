export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_QUOTE':
      console.log(state)
      return [...state, action.quote];
    case 'REMOVE_QUOTE':
      console.log(state);
      return [...state];
    case 'UPVOTE_QUOTE':
      console.log(state);
      return [...state];
    case 'DOWNVOTE_QUOTE':
      console.log(state);
      return [...state];
    default:
      return state;
  }
    
}
