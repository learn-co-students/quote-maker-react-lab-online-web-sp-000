export default (state = [], action) => {
  // let quote = state.find(quote => quote.id === action.quoteId)
  switch(action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote];
    case 'REMOVE_QUOTE':
      return  state.filter(quote => quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      let newUpVotes = state.find(quote => quote.id === action.quoteId).votes += 1
      return [...state, ...newUpVotes];
    case 'DOWNVOTE_QUOTE':
      let quoteVotes = state.find(quote => quote.id === action.quoteId).votes
      if (quoteVotes > 0 ) {
        return [...state, ...state.find(quote => quote.id === action.quoteId).votes -= 1 ]
    }else {
      return [...state]
    }
    default:
      return state;
  }
}
