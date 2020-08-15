export default (state = [], action) => {
  let index;
  let quoteCopy;
  switch(action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote];

    case 'REMOVE_QUOTE':
      index = state.findIndex( quote => quote.id === action.quoteId);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    
    case 'UPVOTE_QUOTE':
      index = state.findIndex( quote => quote.id === action.quoteId);
      quoteCopy = state.slice(index, index + 1);
      quoteCopy[0].votes += 1;
      return [...state.slice(0, index), ...quoteCopy, ...state.slice(index + 1)];

    case 'DOWNVOTE_QUOTE':
      index = state.findIndex( quote => quote.id === action.quoteId);
      quoteCopy = state.slice(index, index + 1);
      if (quoteCopy[0].votes > 0) {
        quoteCopy[0].votes -= 1;
        return [...state.slice(0, index), ...quoteCopy, ...state.slice(index + 1)];
      }
      return state;
    default:
      return state;
  }
}
