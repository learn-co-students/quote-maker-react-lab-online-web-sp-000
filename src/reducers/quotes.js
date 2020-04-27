import uuid from 'uuid';
 
const id = uuid();

export default (state = [], action) => {
<<<<<<< HEAD
  let index;
  let quote;

  switch (action.type) {

    case 'ADD_QUOTE':
      return state.concat(action.quote);

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);

    case 'UPVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[index];

      return [
        ...state.slice(0, index),
        Object.assign({}, quote, { votes: quote.votes += 1 }),
        ...state.slice(index + 1)
      ];

    case 'DOWNVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[index];
      if (quote.votes > 0) {
        return [
          ...state.slice(0, index),
          Object.assign({}, quote, { votes: quote.votes -= 1 }),
          ...state.slice(index + 1)
        ];
      }
      return state;

    default:
      return state;
  }
}
=======
  switch (action.type) {
        case "ADD_QUOTE":
            return {...state,
              ...state.quots
            };
        case "REMOVE_QUOTE":
            return {};
        case "UPVOTE_QUOTE":
            return {};
        case "DOWNVOTE_QUOTE":
            return {};
        default:
  return state;
  }
}
>>>>>>> 9bf9d8e9264df74816f0b5dc9bf6cfee5cabc62b
