export default (state = [], action) => {
  const index=state.findIndex(i=>i.id===action.quoteId)
  const updatedState=[...state]

  switch(action.type){
    case'ADD_QUOTE': return [...state, action.quote]
    case'REMOVE_QUOTE': return [...state].filter(item=>item.id!=action.quoteId)

    case'UPVOTE_QUOTE': 
    updatedState[index].votes+=1
    return updatedState

    case'DOWNVOTE_QUOTE': 
    if (updatedState[index].votes>0) {
      updatedState[index].votes-=1
    return updatedState
    }
    
  }
  return state;
}
