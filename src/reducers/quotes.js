// import uuid from 'uuid'

export default (state = [], action) => {
  // debugger
  let idx = state.findIndex(quote => quote.id === action.quoteId)
  
  switch(action.type){
    case "ADD_QUOTE" :
      // const quote = Object.assign(action.quote, {votes: 0})
      return state.concat(action.quote)

    case "REMOVE_QUOTE" :
      // debugger
      return state.filter(quote => quote.id !== action.quoteId)

    case "UPVOTE_QUOTE" :
      // debugger
      
      
      // Object.assign(state[idx], {votes: state[idx].votes + 1})
      state = [...state.slice(0,idx), Object.assign({}, state[idx], {votes: state[idx].votes + 1}), ...state.slice(idx + 1)]
      // debugger
      return state

    case "DOWNVOTE_QUOTE" :
      // const downvotedQuote = state.find(quote => quote.id === action.quoteId)
      // idx = state.fin
      if(state[idx].votes > 0){
        // Object.assign(downvotedQuote, {votes: downvotedQuote.votes - 1})
        state = [...state.slice(0,idx), Object.assign({}, state[idx], {votes: state[idx].votes - 1}), ...state.slice(idx + 1)]
      }
      return state
    
    default:
      return state
  }
}
