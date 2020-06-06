import uuid from 'uuid';

// export default (state = [], action) => {
//   return state;
// }

const id = uuid();
console.log(id);

export default (state = [], action) => {
  let idx;
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote]
    case "REMOVE_QUOTE":
      let newArray = state.slice();
      return newArray.filter(quote => quote.id !== action.quoteId);
    //case "REMOVE_QUOTE":
      // let newArray = [...state];
      // return newArray.filter(quote => quote.id !== action.id);
      //return [...state.slice.];
      // idx = state.findIndex(quote => quote.id === action.id);
      // return [...state.slice(0, idx), ...state.slice(idx + 1)];

    case "UPVOTE_QUOTE":
      return
    case "DOWNVOTE_QUOTE":
      return
    default:
      return state;
  }
}





// export default function manageQuote(state = [], action) {
//   switch (action.type) {
//     case "ADD_QUOTE":
//       console.log('here');
//     case "REMOVE_QUOTE":
//       return []
//     case "UPVOTE_QUOTE":
//       return
//     case "DOWNVOTE_QUOTE":
//       return
//     default:
//       return state;
//   }
// }





       // addQuote(quote: {})
       //   should return an Object with a type of "ADD_QUOTE" and a quote object:
       //
       // removeQuote(quoteId: Integer)
       //   should return an Object with a type of "REMOVE_QUOTE" and a quoteId:
       //
       // upvoteQuote(quoteId: Integer)
       //   should return an Object with a type of "UPVOTE_QUOTE" and a quoteId:
       //
       // downvoteQuote(quoteId: INteger)
       //   should return an Object with a type of "DOWNVOTE_QUOTE" and a quoteId:
