export default (state = [], action) => {
  let idx;
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]

    case 'REMOVE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId)
      return [...state.slice(0, idx), ...state.slice(idx + 1)]

      case "UPVOTE_QUOTE":
        let copy = [...state]
        copy.map(quote => {
          if (quote.id === action.quoteId){
            quote.votes++;
          }
        })
        return copy;

    case 'DOWNVOTE_QUOTE':
      let copy2 = [...state]
        copy2.map(quote => {
          if (quote.id === action.quoteId){
            !!quote.votes ? quote.votes-- : null;
          }
        })
        return copy2;


    default:
      return state
  }
}
