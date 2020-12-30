export default (state = [], action) => {
  let idx;

  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];

    case "REMOVE_QUOTE":
      idx = state.findIndex(quote => quote.id === action.quoteId);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    case "UPVOTE_QUOTE":
      idx = state.findIndex(quote => quote.id === action.quoteId);
      return [...state, ...state[idx].votes += 1];

    case "DOWNVOTE_QUOTE":
      idx = state.findIndex(quote => quote.id === action.quoteId);
      return ([
        ...state,
        ...state[idx].votes !== 0 ? state[idx].votes -= 1 : state[idx]
      ]);

    default:
      return state;
  }
};
