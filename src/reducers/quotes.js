export default (state = [], action) => {

  let i;

  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote];

    case 'REMOVE_QUOTE':
        i = state.findIndex(quote => quote.id === action.quoteId)
        return [...state.slice(0, i), ...state.slice(i + 1)];

      // find the quote and add a vote to it
    case 'UPVOTE_QUOTE':
        const quoteUp = state.find(quote => quote.id === action.quoteId)
        quoteUp.votes = quoteUp.votes + 1
        return [...state];

    case 'DOWNVOTE_QUOTE':
        const quoteDown = state.find(quote => quote.id === action.quoteId)
          if (quoteDown.votes > 0) {
            quoteDown.votes = quoteDown.votes - 1
          }
        return [...state];

      default:
        return state;
  }
}
