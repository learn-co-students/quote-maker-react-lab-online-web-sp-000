import uuid from 'uuid';

// export default (state = [], action) => {
//   return state;
// }

const id = uuid();
console.log(id);

export default (state = [], action) => {
  let idx;
  let newArray;
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote]
    case "REMOVE_QUOTE":
      // let newArray = state.slice();
      // return newArray.filter(quote => quote.id !== action.quoteId);

      idx = state.findIndex(quote => quote.id === action.quoteId);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    case "UPVOTE_QUOTE":
      newArray = state.slice();
      idx = state.findIndex(quote => quote.id === action.quoteId);
      newArray[idx].votes += 1;
      return newArray;
    case "DOWNVOTE_QUOTE":
      newArray = state.slice();
      idx = state.findIndex(quote => quote.id === action.quoteId);
      if (newArray[idx].votes > 0) {
        newArray[idx].votes -= 1
        return newArray
      }
      return newArray;
    default:
      return state;
  }
}
