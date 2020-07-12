export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];

    case "REMOVE_QUOTE":
      return state.filter(q => q.id !== action.quoteId);

    case "UPVOTE_QUOTE":
      const upvoteIdx = state.findIndex(q => q.id === action.quoteId)
      const upvoteQuote = {...state[upvoteIdx]}
      const upvotedQuote = {...upvoteQuote, votes: upvoteQuote.votes + 1}
      return [...state.slice(0, upvoteIdx), upvotedQuote, ...state.slice(upvoteIdx + 1)]

    case "DOWNVOTE_QUOTE":
      const downvoteIdx = state.findIndex(q => q.id === action.quoteId)
      const downvoteQuote = {...state[downvoteIdx]}
      const newValue = downvoteQuote.votes > 0 ? (downvoteQuote.votes - 1) : 0
      const downvotedQuote = {...downvoteQuote, votes: newValue}
      return [...state.slice(0, downvoteIdx), downvotedQuote, ...state.slice(downvoteIdx + 1)]

    default: 
      return state
  }
}
