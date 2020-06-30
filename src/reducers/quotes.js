export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      return state.concat(action.quote)

    case "REMOVE_QUOTE":
      const newState = state.filter(quote => quote.id !== action.quoteId)
      return newState

    case "UPVOTE_QUOTE":
      const upvoteArray = state.map(obj => { return { ...obj } })
      upvoteArray.forEach(object => {
        if (object.id === action.quoteId) {
          object.votes = object.votes + 1
        }
      })
      return upvoteArray

    case "DOWNVOTE_QUOTE":
      const downvoteArray = state.map(obj => { return { ...obj } })
      downvoteArray.forEach(object => {
        if (object.id === action.quoteId && object.votes > 0) {
          object.votes = object.votes - 1
        }
      })
      return downvoteArray

    default:
      return state;
  }
}
