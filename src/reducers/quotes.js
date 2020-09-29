import uuid from 'uuid';
import { stat } from 'fs';
 
const id = uuid();

export default (state = [], action) => {
  let index
  let newState
  switch(action.type){
    case "ADD_QUOTE":
      return state.concat(action.quote);
    case "REMOVE_QUOTE":
      console.log("Removing Quote")
      return state.filter( quote => quote.id !== action.quoteId)
    case "UPVOTE_QUOTE":
      console.log("Upvoting Quote")
      //find quote
      index = state.findIndex( quote => quote.id === action.quoteId)
      newState = [...state]
 
      newState[index].votes += 1
      //increase its vote by one
      return newState
      //return modified state

      return state
    case "DOWNVOTE_QUOTE":
      console.log("Downvoting Quote")
      index = state.findIndex( quote => quote.id === action.quoteId)
      newState = [...state]
      if (newState[index].votes !== 0){
        newState[index].votes -= 1
      }
      
      //increase its vote by one
      return newState

    default:
      return state;
  }
 
}
