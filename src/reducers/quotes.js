export default (state = [], action) => {

  const quoteIndex = state.findIndex(i => i.id === action.quoteId)
  const copiedState = [ ...state ]

  switch(action.type){
    case'ADD_QUOTE': 
      return [ ...state, action.quote ] 
    case'REMOVE_QUOTE': 
      return [ ...state ].filter(item=>item.id !== action.quoteId)

    case'UPVOTE_QUOTE': 
      copiedState[quoteIndex].votes += 1
      return copiedState

    case'DOWNVOTE_QUOTE': 
      if (copiedState[quoteIndex].votes>0) {
        copiedState[quoteIndex].votes-=1
        return copiedState
      }
      break;

    default:
      return copiedState;
      
  }
  return state;
}