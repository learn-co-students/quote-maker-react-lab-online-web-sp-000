export default function quotes(state = [], action) {
  
  switch (action.type) {
    case 'ADD_QUOTE' :
      return (
        state.concat(
         action.quote
         )
      )

    case 'REMOVE_QUOTE' :
      const removeQuote = state.findIndex(quote => quote.id === action.quoteId)
      return ([
       ...state.slice(removeQuote + 1)
      ])

    case 'UPVOTE_QUOTE' :
      let index= state.findIndex(quote => quote.id === action.quoteId)
      let quote = state[index]
      debugger
      return[
        ...state.slice(0, index),
        Object.assign({}, quote, {votes: quote.votes += 1}),
        ...state.slice(index + 1)
      ]

    case 'DOWNVOTE_QUOTE' : 
      let downVoteIndex= state.findIndex(quote => quote.id === action.quoteId)
      let downQuote = state[downVoteIndex]
    if ( downQuote.votes <= 0) {
      return [{
        ...downQuote,
        votes: 0
      }]
    } else {
      return[{
        ...downQuote,
        votes: downQuote.votes -= 1
      }]
    }

  default:
    return state;
  }
  
}
