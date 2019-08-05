export default (state = [{
  author: "me",
  content: "yes",
  id: 1,
  votes:0
}], action) => {

  let quoteIndex;
  let quote;

  switch(action.type){
    case "ADD_QUOTE":
      return [...state, action.quote];

    case "REMOVE_QUOTE":
      let newQuotes = state.filter(quote => quote.id !== action.quoteId);
      return newQuotes;

    case "UPVOTE_QUOTE":
      quoteIndex = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[quoteIndex];
      return [
        ...state.slice(0, quoteIndex),
        Object.assign({}, quote, { votes: quote.votes += 1 }),
        ...state.slice(quoteIndex + 1)
      ];

    case "DOWNVOTE_QUOTE":
        quoteIndex = state.findIndex(quote => quote.id === action.quoteId);
        quote = state[quoteIndex];
        return [
          ...state.slice(0, quoteIndex),
          Object.assign({}, quote, { votes: quote.votes -= 1 }),
          ...state.slice(quoteIndex + 1)
        ];

    default:
      return state
  }
}
