export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_QUOTE': {
      return [...state, action.quote]
    }
    case 'REMOVE_QUOTE': {
      let idx = state.findIndex(quote => quote.id === action.quoteId)
      return [...state.slice(0, idx), ...state.slice(idx + 1)]
    }
    case 'UPVOTE_QUOTE': {
      let idx = state.findIndex(quote => quote.id === action.quoteId)
      let updatedQuote = state[idx]
      updatedQuote.votes += 1
      return [...state.slice(0, idx), updatedQuote, ...state.slice(idx + 1)]
    }
    case 'DOWNVOTE_QUOTE': {
      let idx = state.findIndex(quote => quote.id === action.quoteId)
      let updatedQuote = state[idx]
      if(updatedQuote.votes > 0) {
        updatedQuote.votes -= 1
        return [...state.slice(0, idx), updatedQuote, ...state.slice(idx + 1)]
      } else {
        return state
      }
    }
    default:
      return state;
  }
}
