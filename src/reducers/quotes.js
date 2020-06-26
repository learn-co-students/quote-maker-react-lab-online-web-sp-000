
export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_QUOTE':
     return [...state, action.quote];
    case 'REMOVE_QUOTE':
      return state.filter((quote) => quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      console.log("UPVOTE QUOTE Action",action)
      return state.map((quote) =>{
        if (quote.id === action.quoteId) {
          quote.votes = quote.votes +1
        }
        return quote
      })
    case 'DOWNVOTE_QUOTE':
        console.log("DownVote Reducer Action")
        return state.map((quote) => {
          if (quote.id === action.quoteId && quote.votes > 0) {
            quote.votes = quote.votes -1
          } 
          return quote
        })




      default: return state;
  }

}
