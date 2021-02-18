import quotes from "../../../16_quote-maker-react-lab-online-web-sp-000/src/reducers/quotes";

export default (state = [], action) => {
  
  let idx;
  let newQuote;

  switch (action.type) {
    case "ADD_QUOTE":
      return state.concat(action.quote);

    case "REMOVE_QUOTE":
      return state.filter( q => q.id !== action.quoteId )

    case "UPVOTE_QUOTE":
      idx = state.findIndex( q => q.id === action.quoteId)
      newQuote = state[idx]
      newQuote.votes++;
      return [...state.slice(0, idx), newQuote, ...state.slice(idx + 1)]

    case "DOWNVOTE_QUOTE":
      idx = state.findIndex( q => q.id === action.quoteId )
      newQuote = state[idx]
      if (newQuote.votes > 0) {
        newQuote.votes--;
      }
      return [...state.slice(0, idx), newQuote, ...state.slice(idx + 1)]

    default:
      return state;
  }
}