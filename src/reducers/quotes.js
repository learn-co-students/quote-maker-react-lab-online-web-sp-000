export default function quotes(state = [], action) {
  switch (action.type) {
    case 'ADD_QUOTE':
      //console.log(band.id)
      return state.concat(action.quote);
    case 'REMOVE_QUOTE':
      //console.log(action)
      return state.filter(quote => quote.id !== action.quoteId);
    case 'UPVOTE_QUOTE':
      console.log(action)
      console.log(state)
      return state.map(function(quote) {
        if (quote.id === action.quoteId)
        {return {...quote, votes: quote.votes+1}}
        else{return quote}})
      
    case 'DOWNVOTE_QUOTE':
      //console.log("downvoting")
      return state.map(function(quote) {
        if (quote.id === action.quoteId && quote.votes > 0)
        {return {...quote, votes: quote.votes-1}}
        else{return quote}})
      
  
    default:
      return state;
  }
};
