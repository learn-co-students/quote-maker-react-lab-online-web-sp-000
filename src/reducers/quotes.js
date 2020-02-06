export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      // console.log('add quote:', action);
      const quote = {
        id: action.quote.id,
        content: action.quote.content,
        author: action.quote.author,
        votes: 0
      };
      return [...state, quote];
    case 'REMOVE_QUOTE':
      // console.log('remove quote:', action);
      // console.log('new state', state);
      return state.filter((quote) => quote.id !== action.quoteId);
    case 'UPVOTE_QUOTE':
      console.log('upvote quote:', action);
      console.log('new state', state);
      return state.map((quote) =>
        quote.id === action.quoteId ? { ...quote, votes: ++quote.votes } : quote
      );
    case 'DOWNVOTE_QUOTE':
      // console.log('downvote quote:', action);
      return state.map((quote) =>
        quote.id === action.quoteId && quote.votes !== 0
          ? { ...quote, votes: --quote.votes }
          : quote
      );
    default:
      return state;
  }
};
