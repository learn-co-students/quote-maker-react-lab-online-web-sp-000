export default (state = [], action) => {
  switch (action.type) {
  case "ADD_QUOTE":
    return [...state, action.quote]
  case "REMOVE_QUOTE":
    const removeMe = state.findIndex( quote => quote.id === action.Id );
    const newArr = [...state];
    return newArr.splice(removeMe, 1)
  case "UPVOTE_QUOTE":
    return state.map( quote => quote.id === action.quoteId ?
      {...quote, votes: quote.votes + 1} :
      quote
      )
    case "DOWNVOTE_QUOTE":
      return state.map( quote => quote.id === action.quoteId ?
        ( quote.votes > 0 ? {...quote, votes: quote.votes - 1} : quote ) :
        quote
        )
  default:
    return state;
  }
}
