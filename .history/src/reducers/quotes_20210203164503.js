export default (state = [], action) => {

    let index;
    let quote;
  // const 
    switch (action.type) {

    case 'ADD_QUOTE':
      return state.concat(action.quote);
    
      case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);
      
      case 'UPVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[index];
    }
  return state;
}
