import {ADD_QUOTE, REMOVE_QUOTE, UPVOTE_QUOTE, DOWNVOTE_QUOTE} from '../actions/quotes.js';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_QUOTE:
      return [...state, action.quote];

    case REMOVE_QUOTE:
      return state.filter((quote) => quote.id !== action.quoteId);

    case UPVOTE_QUOTE:
      return state.map((quote) => {
        if (quote.id === action.quoteId) {
          quote.votes = quote.votes + 1;
        }
        return quote;
      });

    case DOWNVOTE_QUOTE:
      return state.map((quote) => {
        if (quote.id === action.quoteId && quote.votes > 0) {
          quote.votes = quote.votes - 1;
        }
        return quote;
      });

    default:
      return state;
  }
}
