export default (state = [], action) => {
  let updatedQuotes;

  switch (action.type) {
    case "ADD_QUOTE":
      return state.concat(action.quote);

    case "REMOVE_QUOTE":
      return state.filter((quote) => quote.id !== action.quoteId);

    case "UPVOTE_QUOTE":
      updatedQuotes = [...state].map((quote) => {
        if (quote.id === action.quoteId) {
          quote.votes = quote.votes + 1;
        }
        return quote;
      });
      return updatedQuotes;

    case "DOWNVOTE_QUOTE":
      updatedQuotes = [...state].map((quote) => {
        if (quote.id === action.quoteId && quote.votes > 0) {
          quote.votes = quote.votes - 1;
        }
        return quote;
      });
      return updatedQuotes;

    default:
      return state;
  }
};
