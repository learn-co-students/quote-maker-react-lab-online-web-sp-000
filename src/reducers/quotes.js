export default (state = [], action) => {
  switch(action.type) {
    
    case "ADD_QUOTE":
      return [ ...state,
        {author: action.quote.author,
        content: action.quote.content,
        id: action.quote.id,
        votes: action.quote.votes}
      ]

    case "REMOVE_QUOTE":
      let idx = state.findIndex(quote => quote.id === action.quoteId);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
     
    case "UPVOTE_QUOTE":
      state.find(quote => quote.id === action.quoteId).votes += 1
      return state

    case "DOWNVOTE_QUOTE":
      let quote = state.find(quote => quote.id === action.quoteId)
      if (quote.votes > 0) { quote.votes -= 1 }
      return state

    default: 
      return state
  }
}
