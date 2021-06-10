import uuid from 'uuid';

export default (state = [], action) => {

  switch (action.type){
    case "ADD_QUOTE":
      return action.quote

        // id: uuid(),
        // content: action.quote.content,
        // author: action.quote.author,
        // votes: 0

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);

    case "UPVOTE_QUOTE":
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
      // const quoteIndex = state.quotes.findIndex(quote => quote.id === action.quoteId)

      default:
        return state;

    // case downvote
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
