import Quotes from "../containers/Quotes"

export default (state = [], action) => {

  let idx;

  switch(action.type){
    case 'ADD_QUOTE':
      return state.concat(action.quote)

    case 'REMOVE_QUOTE':
      return state.filter(q => q.id !== action.quoteId)

    case "UPVOTE_QUOTE":
      idx = state.findIndex(q => q.id === action.quoteId)

      return [ ...state.slice(0, idx),
        Object.assign({}, state[idx], { votes: state[idx].votes += 1 }),
        ...state.slice(idx + 1)
      ];

    case "DOWNVOTE_QUOTE":
      idx = state.findIndex(q => q.id === action.quoteId)

      if(state[idx].votes > 0){
        return [...state.slice(0, idx),
        Object.assign({}, state[idx], { votes: state[idx].votes -= 1 }),
        ...state.slice(idx + 1)
        ];
      }

      return state;

    default:
      return state;
  }
}
