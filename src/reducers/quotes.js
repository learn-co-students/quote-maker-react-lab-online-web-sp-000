export default (state = [], action) => {
  let idx;
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];
    case "REMOVE_QUOTE":
      idx = state.findIndex(quote => quote.id === action.quoteId);
      return [...state.slice(0, idx), ...state.slice(idx+1)];
    case "UPVOTE_QUOTE":
      state.find(quote => quote.id === action.quoteId).votes += 1;
      return state;
    case "DOWNVOTE_QUOTE":
      let quoteToDownvote = state.find(quote => quote.id === action.quoteId);
      if (quoteToDownvote.votes > 0) {
        quoteToDownvote.votes -= 1;
      }
      return state;
    default:
      return state;
  }
}
