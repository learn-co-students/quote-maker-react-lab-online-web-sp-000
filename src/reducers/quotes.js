const quotes = (state = [], action) => {


  switch(action.type){
    case "ADD_QUOTE":
    let quote= {
        id: action.quote.id,
        content: action.quote.content,
        author: action.quote.author,
        votes: action.quote.votes
      }
      console.log([...state, quote] )
      return [...state, quote] 

    case "REMOVE_QUOTE":
      return state.filter(quote=> quote.id !== action.quoteId)
    
    case "UPVOTE_QUOTE":
      return state.map(quote=>{
        if(quote.id !== action.quoteId){
          return quote
        }else{
          return {...quote, votes: quote.votes + 1}
        }
      })

    case "DOWNVOTE_QUOTE":
      return state.map(quote=>{
        if(quote.id !== action.quoteId){
          return quote
        }else{
          let votes = (quote.votes >=1 ? (quote.votes -1) : 0)
          console.log(votes)
          return {...quote, votes: votes }
        }
      })

    default:
      return state
 
  }
}

export default quotes