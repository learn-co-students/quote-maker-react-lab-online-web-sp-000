import '../actions/quotes'

export default (state = [], action) => {
  let index;

  switch (action.type) {

    case 'ADD_QUOTE':
      state.push(action.quote);
      return state;

    case 'REMOVE_QUOTE':
    index = state.indexOf(
      state.map(
        element => {if (element.id === action.quoteId)
          return element
        }
      )[0]
    );
      state.splice(index,1);
      return state;

    case 'UPVOTE_QUOTE':
      index = state.indexOf(
        state.map(
          element => {if (element.id === action.quoteId)
            return element
          }
        )[0]
      );

      if (!state[index].votes){
        state[index].votes = 0;
      }
      state[index].votes++;
      return state;

    case 'DOWNVOTE_QUOTE':
      index = state.indexOf(
        state.map(
          element => {if (element.id === action.quoteId)
            return element
          }
        )[0]
      );

      if (!state[index].votes){
        state[index].votes = 0;
      }
      if (state[index].votes !== 0){
        state[index].votes--;
      }

      return state;

    default:
      return state;
  }
}
