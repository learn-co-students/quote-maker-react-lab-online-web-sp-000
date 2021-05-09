import uuid from 'uuid';

export default function manageQuotes (state = {
  quotes: []
}, action) {
  switch (action.type) {
    case 'ADD_QUOTE':
      const quote = {
        id: uuid(),
        content: action.content,
        author: action.author
      }
    return { ...state, quotes: [...state.quotes, quote] }

    case 'REMOVE_QUOTE':
      const quotes = state.quotes.filter(quote => quote.id !== action.id )
      return { quotes }

    case 'UPVOTE_QUOTE':

    case 'DOWNVOTE_QUOTE':

    default:
      return state;
  }
}
