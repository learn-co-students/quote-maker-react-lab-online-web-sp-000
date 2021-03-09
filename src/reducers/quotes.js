
export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote);
      

    case 'UPVOTE_QUOTE':
      let voteQuote = state.filter((quote) => quote.id === action.quoteId)
      if(voteQuote){
       return [{ ...voteQuote[0], votes: voteQuote[0].votes += 1}]
      }else{
        return [voteQuote]
      }

    case 'DOWNVOTE_QUOTE':
      let downVoteQuote = state.filter((quote) => quote.id === action.quoteId)
      if(downVoteQuote && downVoteQuote[0].votes > 0){
        return [{...downVoteQuote[0], votes: downVoteQuote[0].votes -= 1}]
      }
      else{
        return state 
      }

    case 'REMOVE_QUOTE': 
      return state.filter((quote) => quote.id !== action.quoteId)
  
      ;
    default: {
      return state
    }
  }
}

