export default function quote(state = [], action) {
  switch (action.type) {
    case "ADD_QUOTE":
      const quote = {
        id: action.quote.id,
        content: action.quote.content,
        author: action.quote.author,
        votes: action.quote.votes,
      };
      return state.concat(quote);
    case "REMOVE_QUOTE":
      return state.filter((quote) => quote.id !== action.quoteId);
    case "UPVOTE_QUOTE":
      let quoteIndex = state.findIndex((quote) => quote.id === action.quoteId);
      let newQuotes = [...state];
      console.log(newQuotes);
      newQuotes[quoteIndex] = {
        ...newQuotes[quoteIndex],
        votes: newQuotes[quoteIndex].votes + 1,
      };
      console.log(newQuotes);
      return newQuotes;
    case "DOWNVOTE_QUOTE":
      quoteIndex = state.findIndex((quote) => quote.id === action.quoteId);
      if (state[quoteIndex].votes > 0) {
        newQuotes = [...state];
        newQuotes[quoteIndex] = {
          ...newQuotes[quoteIndex],
          votes: newQuotes[quoteIndex].votes - 1,
        };
        return newQuotes;
      } else {
        return state;
      }

    default:
      return state;
  }
}
