export default function quotes (state = [], action) {
  let findQuote;
  let idx;

  switch (action.type) {

    case 'ADD_QUOTE':
      return [...state, action.quote]

    case 'REMOVE_QUOTE':
      idx = state.findIndex(function (quote) {
        return quote.id === action.quoteId
      })

      return [...state.slice(0, idx), ...state.slice(idx + 1)]

    case 'UPVOTE_QUOTE':
      findQuote = state.find(function(quote) {
        return quote.id === action.quoteId
      })

      findQuote.votes += 1

      idx = state.findIndex(function (quote) {
        return quote.id === action.quoteId
      })

      return [...state.slice(0, idx), findQuote, ...state.slice(idx + 1)]

    case 'DOWNVOTE_QUOTE':
      findQuote = state.find(function(quote) {
        return quote.id === action.quoteId
      })

      if (findQuote.votes === 0) {

      } else {
        findQuote.votes -= 1
      }
      

      idx = state.findIndex(function (quote) {
        return quote.id === action.quoteId
      })

      return [...state.slice(0, idx), findQuote, ...state.slice(idx + 1)]

    default:
      return state;
  }
  
}
