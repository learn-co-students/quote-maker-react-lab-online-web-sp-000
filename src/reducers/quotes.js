import uuid from 'uuid'

export default function quote (state = [], action) {
let idx;
let oldQuote;
let updatedQuote;
let newState;
  switch(action.type){

    case "ADD_QUOTE":
      
      let quote = {
        content: action.quote.content,
        author: action.quote.author,
        id: action.quote.id,
        votes: action.quote.votes,
      }


      return state.concat(quote);

    case "UPVOTE_QUOTE":
        
      oldQuote = state.find(quote => quote.id === action.quoteId);
      
      idx = state.indexOf(oldQuote);
     console.log("index: " + idx)
      updatedQuote = {...oldQuote, votes: oldQuote.votes + 1};
     console.log(updatedQuote)
      newState = state.slice()
     newState.splice(idx, 1, updatedQuote)
      
        return  newState;

    case "DOWNVOTE_QUOTE":
        
      oldQuote = state.find(quote => quote.id === action.quoteId)
       idx = state.indexOf(oldQuote)
       updatedQuote = oldQuote;

       if(oldQuote.votes > 0){
        updatedQuote = {...oldQuote, votes: oldQuote.votes - 1};
       }
      
      newState = state.slice()
    newState.splice(idx, 1, updatedQuote)
        return  newState;

    case "REMOVE_QUOTE":
      oldQuote = state.find(quote => quote.id === action.quoteId);
      idx = state.indexOf(oldQuote);
      
      newState = state.slice()
      newState.splice(idx,1)
      return newState
    default:
      return state;
  }
 
}
