export default (state = [], action) => {
  switch(action.type) {
    
    case "ADD_QUOTE":
      return [ ...state,
        {author: action.quote.author,
        content: action.quote.content,
        id: action.quote.id,
        votes: action.quote.votes}
      ]

      case "REMOVE_QUOTE":
        let idx = state.findIndex(quote => quote.id === action.quoteId);
        console.log("Index: " + idx)
        return [...state.slice(0, idx), ...state.slice(idx + 1)];
     

    default: 
      return state
  }
}
