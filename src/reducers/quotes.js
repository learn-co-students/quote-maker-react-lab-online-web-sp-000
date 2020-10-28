export default (state = [], action) => {
  let updatedQuotes;

  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];

    case "REMOVE_QUOTE":
      updatedQuotes = state.filter((quote) => quote.id !== action.quoteId);
      return updatedQuotes;

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
