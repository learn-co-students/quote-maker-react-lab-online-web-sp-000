import uuid from 'uuid';

const id = uuid();
console.log(id);

export default (state = [], action) => {
  let idx;
  let myQuote;

  switch (action.type) {

    case 'ADD_QUOTE':
      return [...state, action.quote]

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);

    case 'UPVOTE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId)
      myQuote = state[idx]

      return [
        ...state.slice(0,idx),
         Object.assign({}, myQuote, {votes: myQuote.votes +=1}),
         ...state.slice(idx+1)]

    case 'DOWNVOTE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId)
      myQuote = state[idx]

      if (myQuote.votes > 0) {
        return [
          ...state.slice(0,idx),
          Object.assign({}, myQuote, {votes: myQuote.votes -=1}),
          ...state.slice(idx+1)]
        }

    default:
      return state;
  }
}
