
const quotes = (state = [], action) => {
  let idx;
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]

    case 'REMOVE_QUOTE':
      return state.filter(q => q.id !== action.quoteId);

    case 'UPVOTE_QUOTE':
      console.log(action.quoteId)
      let qu = state.find(q => q.id === action.quoteId);
      qu.votes++;
      let rest = state.filter(q => q.id !== action.quoteId);
      return [...rest, qu]

    case 'DOWNVOTE_QUOTE':
      const quote = state.filter(q => q.id === action.quoteId);
      const restOfState = state.filter(q => q.id !== action.quoteId);
      if (quote[0].votes) {
        quote[0].votes--;
      }
      return [...restOfState, ...quote]

    default:
      return state;
  }
}

export default quotes;
