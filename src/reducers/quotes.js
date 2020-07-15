export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];

    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId);

    case "UPVOTE_QUOTE":
      const quoteIdx = state.findIndex(quote => quote.id === action.quoteId);
      const plusOne = state[quoteIdx];

      return [
        ...state.slice(0, quoteIdx),
        { ...plusOne, votes: plusOne.votes + 1 },
        ...state.slice(quoteIdx + 1)
      ];

    case "DOWNVOTE_QUOTE":
      const idx = state.findIndex(quote => quote.id === action.quoteId);
      const downOne = state[idx];
      const newVotes = downOne.votes > 0 ? downOne.votes - 1 : 0;
      return [
        ...state.slice(0, idx),
        { ...downOne, votes: newVotes },
        ...state.slice(idx + 1)
      ];
  }
  return state;
};
