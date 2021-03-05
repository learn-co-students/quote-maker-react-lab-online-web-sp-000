
export default (state = [], action) => {
  //let idx;
  switch(action.type) {
    case 'ADD_QUOTE':
      return {
        ...state,
        state: [
        // id: action.payload.quote.id,
        // content: action.payload.quote.content,
        // author: action.payload.quote.author 
      ...state, action.quote]

      };

    case 'UPVOTE_QUOTE':
      return {
        ...state, 
        state: [
          ...state, state.votes + 1
        ]
    };

    case 'DOWNVOTE_QUOTE':
      return {
        ...state, 
        state: [
          ...state, state.votes - 1
        ]
      };

    case 'REMOVE_QUOTE': // added 'this' before .state
      //idx = state.findIndex(quote => quote.id === action.quoteId);
      return {
        ...state,
        //state: [...state.slice(0, idx), ...state.slice(idx + 1)]
      };
    default: {
      return state
    }

      

  }
  //return state;
}

