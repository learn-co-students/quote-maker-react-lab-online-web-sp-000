export default (state = [], action) => {
  let idx;
  let oldVote;
  // console.log(state)
  switch (action.type) {

    case 'ADD_QUOTE':
      return [...state, action.quote];

    case 'REMOVE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId)
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    case 'UPVOTE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId);
      oldVote = state[idx].votes;
      return [
        ...state.slice(0, idx), {...state[idx], votes: oldVote + 1}, ...state.slice(idx+1)
      ]

    case 'DOWNVOTE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId);
      oldVote = state[idx].votes
      if (oldVote === 0) {
        return state
      } else {
        return [
          ...state.slice(0, idx), {...state[idx], votes: oldVote - 1}, ...state.slice(idx+1)
        ]
      }

    default:
      return state;
  }
}
