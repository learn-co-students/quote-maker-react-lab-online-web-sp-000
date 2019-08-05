export default (state = [], action) => {
  let index;

  switch(action.type){
    case "ADD_QUOTE":
      return [...state, action.quote]
    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId)
    case "UPVOTE_QUOTE":
      index = state.findIndex(q => q.id === action.quoteId)
      let upvoted = state;
      upvoted[index].votes++;
      return upvoted;
    case "DOWNVOTE_QUOTE":
      index = state.findIndex(q => q.id === action.quoteId)
      let downvoted = state;
      if (downvoted[index].votes > 0){
        downvoted[index].votes--;
      }
      return downvoted;
    default:
      return state
  }
}
