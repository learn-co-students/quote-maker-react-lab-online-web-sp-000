export default (state = [], action) => {
  switch(action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];
    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId);
    case "UPVOTE_QUOTE":
      let upVotes = state.find(quote => quote.id === action.quoteId).votes += 1
      return [...state, ...upVotes];
    case "DOWNVOTE_QUOTE":
      let downVotes = state.find(quote => quote.id === action.quoteId).votes
      if(downVotes > 0) {
        return [...state, ...state.find(quote => quote.id === action.quoteId).votes -= 1 ]
      } else {
        return [...state]
      }
      default:
        return state;
  }
}
