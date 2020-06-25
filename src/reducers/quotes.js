export default (state = [], action) => {
  let idx;
  switch(action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote];

    case 'REMOVE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    case 'UPVOTE_QUOTE':
      let upvoteQuote = state.find(quote => quote.id === action.quoteId);
      idx = state.findIndex(quote => quote.id === action.quoteId);
      upvoteQuote.votes += 1;
      return [...state.slice(0, idx), upvoteQuote, ...state.slice(idx + 1)];

    case 'DOWNVOTE_QUOTE':
      let downvoteQuote = state.find(quote => quote.id === action.quoteId);
      idx = state.findIndex(quote => quote.id === action.quoteId);
      if (downvoteQuote.votes !== 0) {
        downvoteQuote.votes -= 1;
      }
      return [...state.slice(0, idx), downvoteQuote, ...state.slice(idx + 1)];

    default:
      return state;
  }
}
