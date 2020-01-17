export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote)
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      let findIdOfQuote = state.findIndex(quote => quote.id === action.quoteId)
      let quote = state[findIdOfQuote]
      return [
        ...state.slice(0, findIdOfQuote), 
        Object.assign({}, quote, { votes: quote.votes += 1}), 
        ...state.slice(findIdOfQuote+1)
      ];
    case 'DOWNVOTE_QUOTE':
      let findIdToDownVote = state.findIndex(quote => quote.id === action.quoteId)
      let quoteToDownVote = state[findIdToDownVote]
      if (quoteToDownVote.votes > 0) {
        return [
          ...state.slice(0, findIdToDownVote),
          Object.assign({}, quoteToDownVote, { votes: quoteToDownVote.votes -= 1}),
          ...state.slice(findIdToDownVote+1)
        ]
      };
    default:
      return state;
  }
}
