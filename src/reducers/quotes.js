//  import uuid from 'uuid';

 const  quotes = function ( state = [], action)  {

    switch (action.type) {
      case 'ADD_QUOTE':
        let  quote = {
          id: action.quote.id,
          content: action.quote.content,
          author: action.quote.author,
          votes: action.quote.votes
        }
          return  state = state.concat(quote) ;
  
        case 'REMOVE_QUOTE':
          return state = state.filter(quote => quote.id !== action.quoteId) 
          
        case 'UPVOTE_QUOTE':
        return state = state.map((quote) => {
          if (quote.id === action.quoteId){
            quote.votes += 1
            return quote
          } else{
            return quote
          }
        }) 

        case 'DOWNVOTE_QUOTE':
          return state = state.map((quote) => {
            if (quote.id === action.quoteId && quote.votes > 0){
              quote.votes -= 1
              return quote
            } else{
              return quote
            }
          }) 
  
      default:
        return state;
    }


}

export default quotes



