export default (state = [], action) => {

  switch (action.type) {

    case 'ADD_QUOTE':
      return state.concat(action.quote)
    
    case 'REMOVE_QUOTE': 
      let i = state.findIndex(obj => obj.id === action.quoteId)
      return [...state.slice(0, i), ...state.slice(i + 1)];
    
    case 'UPVOTE_QUOTE': 
      let index = state.findIndex(obj => obj.id === action.quoteId)
      let quoteOfInterest = state[index] 
      return [...state.slice(0, index), Object.assign({}, quoteOfInterest , {votes: quoteOfInterest.votes += 1}), ...state.slice(index + 1)];
    
    case 'DOWNVOTE_QUOTE':
      let idx = state.findIndex(obj => obj.id === action.quoteId)
      let q = state[idx]

      if (q.votes === 0) {
        return state
      } else {
        return [...state.slice(0, idx), Object.assign({}, q , {votes: q.votes -= 1}), ...state.slice(idx + 1)];
      }

    default:
      return state;
    
  }
}


