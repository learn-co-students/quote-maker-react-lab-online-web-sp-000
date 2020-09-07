
export default (state = [], action) => {
  let idx;
  switch(action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote];
    case 'REMOVE_QUOTE':
      
      idx = state.findIndex(quote => quote.id === action.quoteId);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
    case 'UPVOTE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId);
      let quoteToBeUpvoted = state[idx];
      console.log(quoteToBeUpvoted)
      quoteToBeUpvoted.votes += 1;
      return [...state.slice(0, idx), quoteToBeUpvoted, ...state.slice(idx + 1)] 
    case 'DOWNVOTE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId);
      let quoteToBeDownvoted = state[idx];
      if (quoteToBeDownvoted.votes > 0) {
        quoteToBeDownvoted.votes -= 1;
        return [...state.slice(0, idx), quoteToBeDownvoted, ...state.slice(idx + 1)]
      } else {
        return state;
      }
    default:
      return state;
  }
  
}
