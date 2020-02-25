export default (state = [], action) => {

  switch(action.type) {
   
    case("ADD_QUOTE"): 
    console.log(action)
    return state = [...state, action.quote];

    case("REMOVE_QUOTE"):
      let foundQuote = state.findIndex(quote => quote.id === action.QuoteId)
    
      return state = [...state.slice(0, foundQuote), ...state.slice(foundQuote + 1)]


  

    case("UPVOTE_QUOTE"):
    return state = [...state];

    case("DOWNVOTE_QUOTE"):
    return state = [...state];

    default:
    return state;
  }
}
