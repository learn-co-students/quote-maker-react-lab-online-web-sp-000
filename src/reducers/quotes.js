export default (state = [], action) => {
  const quotes = [...state.quotes]; // CLONE of the state's quotes, allowed to mutate.
  const index = quotes.findIndex(q => q === action.quote); // find the action quote in our clone
  const quote = quotes[index] // actual REFERENCE to the EXISTING quote in the CLONED array

  switch (action.type) {
    case "ADD_QUOTE":
      quotes.push(action.quote);
      return { ...state, quotes: quotes };
    case "REMOVE_QUOTE":
      quotes.splice(index, 1);
      return { ...state, quotes: quotes };
    case "UPVOTE_QUOTE":
      quote.votes += 1; // allowed to mutate this clone
      return { ...state, quotes: quotes };
    case "DOWNVOTE_QUOTE":
    if (quote.votes > 0) 
      quote.votes -= 1; // allowed to mutate this clone
      return { ...state, quotes: quotes };
    default:
      return state;
  }
};
