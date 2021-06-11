import uuid from 'uuid';

export default (state = [], action) => {
  console.log("state is:", state);
  console.log("action is:", action);

  switch (action.type){
    case "ADD_QUOTE":
      return [...state, action.quote];

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);

    case "UPVOTE_QUOTE":
      console.log("state is:", state);
      console.log("action is:", action);
      return (
        state = state.map(quote => {
          if (quote.id === action.quoteId) {
            quote.votes = quote.votes + 1
            return quote
          } else {
            return quote
          }
        })
      )

    case 'DOWNVOTE_QUOTE':
      return (
        state = state.map(quote => {
          if (quote.id === action.quoteId) {
            if (quote.votes > 0) {
              quote.votes = quote.votes - 1
            }
            return quote
          } else {
            return quote
          }
        })

      )

      default:
        return state;
  }


}

// export default function quotes(state = [], action) {

//   //switch (action.type)
//   // case add, create uuid and add to array
//   // case remove
//   // case upvote
//   //case downvote
//   return state;
// }
