export default (state = [], action) => {
  let idx;
  let myQuote;
  switch(action.type){    
    case 'ADD_QUOTE':  
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId)
      return [...state.slice(0, idx), ...state.slice(idx + 1)]
    case 'UPVOTE_QUOTE':
      myQuote = state.find(quote => quote.id === action.quoteId)
      console.log("Upvote:", action.quoteId)
      myQuote.votes += 1
      return state
    case 'DOWNVOTE_QUOTE':
        myQuote = state.find(quote => quote.id === action.quoteId)
        myQuote.votes === 0 ? 0 : myQuote.votes -= 1
        return state
  }
  return [...state];
}
