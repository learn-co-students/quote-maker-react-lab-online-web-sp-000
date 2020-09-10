//export default (state = [], action) => {
//  return state;
//}


export default function quoteReducer(state = [], action){
  let idx;
  switch (action.type) {
    case "ADD_QUOTE":
      console.log('action', action)
      return [...state, action.quote];

    case "REMOVE_QUOTE":
      console.log('remove')
      idx = state.findIndex(quote => quote.id  === action.quoteId)
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    case "UPVOTE_QUOTE":
      idx = state.findIndex(quote => quote.id  === action.quoteId)
      console.log('action', action, 'state', state, 'id', idx)
      if (state[idx].votes > 0){
        state[idx].votes ++
      } else if (state[idx].votes === 0 || state[idx].votes === undefined) {
        state[idx].votes = 1
      }
      return [...state];

    case "DOWNVOTE_QUOTE":
      idx = state.findIndex(quote => quote.id  === action.quoteId)
      if (state[idx].votes > 0){
        state[idx].votes --
      } else if (state[idx].votes === 0 || state[idx].votes === undefined) {
        state[idx].votes = 0
      }
      return [...state];

    default:
      return state;
  }
}