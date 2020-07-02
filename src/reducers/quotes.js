export default (state = [], action) => {
  
  const alterVotes = (quoteId, amount) => {
    let newObj = [...state]
    console.log(newObj)
    const index = newObj.findIndex( quote => quote.id === action.quoteId )
    
    newObj[index].votes += amount;
    if(newObj[index].votes < 0){
      newObj[index].votes = 0
    }
    
    return newObj 
  }

  switch(action.type){    
    case "ADD_QUOTE":
      return [...state, action.quote] 
    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id != action.quoteId)
    case "UPVOTE_QUOTE":
      return alterVotes(action.quoteId, 1)
    case "DOWNVOTE_QUOTE":
      return alterVotes(action.quoteId, -1)
    default:
      return state;
  }
}


