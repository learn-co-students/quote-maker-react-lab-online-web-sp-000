export default (state = [], action) => {
  let idx;
  let updateQuote; 

  switch(action.type) {
    case 'ADD_QUOTE': 
      return [...state, action.quote]

    case 'REMOVE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId)
      return [...state.slice(0, idx), ...state.slice(idx + 1, state.length)]

    case 'UPVOTE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId)
      updateQuote = {...state[idx]}
      updateQuote.votes += 1; 
      return [...state.slice(0, idx), updateQuote, ...state.slice(idx + 1, state.length)]

    case 'DOWNVOTE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId)
      updateQuote = {...state[idx]}
      if (updateQuote.votes > 0 ){
        updateQuote.votes -= 1; 
      }
      return [...state.slice(0, idx), updateQuote, ...state.slice(idx + 1, state.length)]

    default: 
      return state; 

  }
}
