export default (state = [], action) => {

    let index;
    let quote;
  // const 
    switch (action.type) {

    case 'ADD_QUOTE':
      return state.concat(action.quote);
    
      case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);
      
      case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);
    }
  return state;
}
