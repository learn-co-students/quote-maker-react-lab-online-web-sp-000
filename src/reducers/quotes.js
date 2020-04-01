export default (state = [], action) => {
  let i;
  let q;
  let q2;
  switch(action.type){
    case 'ADD_QUOTE':
      return [...state, action.quote];
    case 'REMOVE_QUOTE':
      //console.log("state: ", state, " action: ", action)
      i = state.findIndex((quote) => quote.id === action.quoteId);
      return [...state.slice(0, i), ...state.slice(i+1)]
    case 'UPVOTE_QUOTE':
      q = state.find((quote) => quote.id === action.quoteId);
      q2 = Object.assign({}, q);
      q2.votes ++;
      i = state.findIndex((quote) => quote.id === action.quoteId);
      return [...state.slice(0, i), q2, ...state.slice(i + 1)]
    case 'DOWNVOTE_QUOTE':
      q = state.find((quote)=> quote.id === action.quoteId);
      console.log("q:", q, "action:", action, "state:", state)
      if(q && q.votes > 0){
        q2 = Object.assign({}, q);
        q2.votes --;
        i = state.findIndex((quote)=> quote.id === action.quoteId);
        return [ ...state.slice(0, i), q2, ...state.slice(i+1)]
      }
      return state;
    default:
      return state
    }
  return state;
}
