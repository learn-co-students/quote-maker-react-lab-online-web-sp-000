export default (state = [], action) => {
  switch (action.type) {

    case 'ADD_QUOTE':
      return [...state, action.quote];
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);
    case 'UPVOTE_QUOTE':
      let quoteIndex = state.findIndex(quote => quote.id === action.quoteId);
      let quote = state[quoteIndex];
      return [
        ...state.slice(0, quoteIndex),
        Object.assign({}, quote, { votes: quote.votes += 1 }),
        ...state.slice(quoteIndex + 1)
      ];
    case 'DOWNVOTE_QUOTE':
      quoteIndex = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[quoteIndex];
      if (quote.votes === 0) {
        return state;
      } else {
        return [
            ...state.slice(0, quoteIndex),
            Object.assign({}, quote, { votes: quote.votes -= 1 }),
            ...state.slice(quoteIndex + 1)
          ];
      }
    default:
      return state;
  }
}
