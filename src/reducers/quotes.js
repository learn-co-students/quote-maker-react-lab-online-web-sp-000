export default (state = [], action) => {

	let index;

	
switch (action.type) {

   case 'ADD_QUOTE':
      return state.concat(action.quote)

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)

    case 'UPVOTE_QUOTE':

      index = state.map(quote => {
        if (quote.id === action.quoteId){
          return {...quote, votes: quote.votes += 1}
        } else {
          return quote;
        }
      })

      return index;

    case 'DOWNVOTE_QUOTE':
      
      index = state.map(quote => {
        if (quote.id === action.quoteId && quote.votes > 0){
          return {...quote, votes: quote.votes -= 1}
        } else {
          return quote;
        }
      })
      return index;


      
    default:
      return state;
  }
}
