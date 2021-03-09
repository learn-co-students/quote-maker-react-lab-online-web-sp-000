
export default (state = [], action) => {
  let idx;
  switch(action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote);
      

    case 'UPVOTE_QUOTE':
      //console.log(action) //returns '[object, Object]'
      //const matchedQuote = state.find(state.id === action.quoteId);
     // const [matchedQuote] = quote
      //console.log(matchedQuote.votes)
      //console.log(matchedQuote)
      
      idx = state.findIndex(quote => quote.id === action.quoteId);
      let quoteMatch = [...state.slice(0, idx), ...state.slice(idx +1)]
      let [quoteMatchObj] = quoteMatch
      let votes = quoteMatchObj.votes + 1
      console.log(votes)
      if(idx) {
        return this.setState(...state, {...quoteMatchObj, votes: votes})//{...state, quoteMatchObj}

      }
      return console.log('hi');
              //state: [...state.slice(0, idx), ...state.slice(idx + 1)]


    case 'DOWNVOTE_QUOTE':
      return {
        ...state, 
        state: [
          ...state, state.votes - 1
        ]
      };

    case 'REMOVE_QUOTE': 
      return state.filter((quote) => quote.id !== action.quoteId)
  
      ;
    default: {
      return state
    }
  }
}

