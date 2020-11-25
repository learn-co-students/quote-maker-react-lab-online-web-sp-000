export default (state = [], action) => {
  let index, quote;
  switch(action.type){
    case('ADD_QUOTE'):
      return [...state, action.quote]

    case('REMOVE_QUOTE'):
      index = state.findIndex(q => q.id === action.quoteId)
      return [...state.slice(0, index), ...state.slice(index+1)]

    case('UPVOTE_QUOTE'):
      index = state.findIndex(q => q.id === action.quoteId)
      quote = state[index]
      return [...state.slice(0, index), {...quote, votes: quote.votes+1 }, ...state.slice(index+1)]

    case('DOWNVOTE_QUOTE'):
      index = state.findIndex(q => q.id === action.quoteId)
      quote = state[index]
      return [...state.slice(0, index), {...quote, votes: (quote.votes > 0 ? quote.votes-1 : 0) }, ...state.slice(index+1)]

    default:
      return state
  }
}
