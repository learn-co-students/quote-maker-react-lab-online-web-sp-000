export default (state = [], action) => {
  let index;
  let quote;
  switch (action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote);

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId); //return only states where quote.id does not equal quoteId
    
      case 'UPVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId) //find index of relevant quote
      quote = state[index] //find quote object with that id
      return [
        ...state.slice(0, index), //remove that quote
        Object.assign({}, quote, {votes: quote.votes += 1}), //copy most of it and change votes piece
        ...state.slice(index + 1) //add the quote back in
      ]
     
      case 'DOWNVOTE_QUOTE':
        index = state.findIndex(quote => quote.id === action.quoteId)
        quote = state[index]
        if(quote.votes > 0) {
          return [
            ...state.slice(0, index),
            Object.assign({}, quote, {votes: quote.votes -=1}),
            ...state.slice(index + 1)
          ]

        }
      
      }
  return state;
}
