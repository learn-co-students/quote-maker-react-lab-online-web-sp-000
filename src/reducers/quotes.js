export default (state = [], action) => {
  // console.log("Current State", state, 'Action', action)
  switch(action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      const xState = [...state]
      const l = xState.findIndex(e => e.quoteId === action.id)
      xState.splice(l, 1)
      return xState
    case 'UPVOTE_QUOTE':
      const i = state.findIndex(e => e.quoteId === action.id)
      const newState = [...state]
      newState[i].votes += 1
      return newState
    case 'DOWNVOTE_QUOTE':
      const idx = state.findIndex(e => e.quoteId === action.id)
      if (state[idx].votes <= 0) return state
      const nState = [...state]
      nState[idx].votes -= 1
      return nState
    default: return state;
  }
}