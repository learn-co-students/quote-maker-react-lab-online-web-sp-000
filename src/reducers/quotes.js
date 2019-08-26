// REDUCER REDUCER REDUCER REDUCER REDUCER REDUCER 

import uuid from 'uuid'
import { stat } from 'fs';

export default (state = [], action) => {
  
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote];

    case 'UPVOTE_QUOTE':
      // return { votes: state.votes + 1};
      quoteIndex = state.findIndex(quote => {
        return quote.id === action.quoteId
      })

      state[quoteIndex].votes = state[quoteIndex].votes + 1

      return state

    case 'DOWNVOTE_QUOTE':
        quoteIndex = state.findIndex(quote => {
          return quote.id === action.quoteId
        })
        
        if (state[quoteIndex].votes > 0){
          state[quoteIndex].votes = state[quoteIndex].votes - 1
        };

        return state

    case 'REMOVE_QUOTE':
      let quoteIndex = state.findIndex(quote => {
        quote.id === action.quoteId
      })

      return state.splice(quoteIndex, 1)

    default:
      return state;
  }
  
}
