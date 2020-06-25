import uuid from 'uuid';
import {
  addQuote, 
  removeQuote, 
  downvoteQuote, 
  upvoteQuote
} from '../actions/quotes'

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      const id = uuid();
      let newQuote = action.quote
      newQuote.id = id
      if (!newQuote.votes){
        newQuote.votes = 0
      } 
      let updatedQuotes = state.slice()
      updatedQuotes.push(newQuote)
      return  updatedQuotes
      

    case 'REMOVE_QUOTE': {
      let updatedQuotes = state.slice()
      let quoteIndex = updatedQuotes.findIndex(quote => quote.id === action.quoteId)
      updatedQuotes.splice(quoteIndex, 1)
      return updatedQuotes
    }

    case 'UPVOTE_QUOTE': {
      let updatedQuotes = state.slice()
      let quote = updatedQuotes.find(quote => quote.id === action.quoteId)
      let votes = parseInt(quote.votes)
      votes += 1
      quote.votes = votes
      return updatedQuotes
    }

    case 'DOWNVOTE_QUOTE': {
      let updatedQuotes = state.slice()
      let quote = updatedQuotes.find(quote => quote.id === action.quoteId)
      if (quote.votes>0) {
        quote.votes -= 1
      }
      return updatedQuotes
    }

    default:
      return state;
  }
}
