export default (state = [], action) => {
console.log('🚀 ~ file: quotes.js ~ line 2 ~ action', action);
console.log('🚀 ~ file: quotes.js ~ line 2 ~ state', state);

let index;
let quote;
// const 
switch (action.type) {
  
  case 'ADD_QUOTE':
    console.log('🚀 ~ file: quotes.js ~ line 2 ~ action', action);
    return state.concat(action.quote);
    
      case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);
      
      case 'UPVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[index];
      return [
        ...state.slice(0, index),
        Object.assign({}, quote, { votes: quote.votes += 1 }),
        ...state.slice(index + 1)
      ];
      case 'DOWNVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[index];
      if (quote.votes > 0) {
        return [
          ...state.slice(0, index),
          Object.assign({}, quote, { votes: quote.votes -= 1 }),
          ...state.slice(index + 1)
        ];
      }
      return state;

    default: 
      return state;
  }
}