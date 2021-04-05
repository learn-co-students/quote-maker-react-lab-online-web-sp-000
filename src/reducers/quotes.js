export default function quotes (state = [], action) {
  let index;
  let quote;
  let upVoted;
  let downVoted;

  switch (action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote);

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);

    case 'UPVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[index];
      upVoted = Object.assign({}, quote, { votes: quote.votes += 1 })
      return [...state.slice(0, index), upVoted,...state.slice(index + 1)];

    case 'DOWNVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[index];
      if (quote.votes === 0) {
        return state
      } else if (quote.votes > 0) {
        downVoted = Object.assign({}, quote, { votes: quote.votes -= 1 })
        return [...state.slice(0, index), downVoted, ...state.slice(index + 1)];
      }

    default:
      return state;
  }
}
