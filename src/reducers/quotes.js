export default (state = [], action) => {

  switch (action.type) {
    case 'ADD_QUOTE':
      console.log( state.concat(action.quote) );
      return state.concat(action.quote);

    case 'REMOVE_QUOTE':
      console.log( `Looking for quote ${action.quoteId}`);
      return state.filter(quote => quote.id !== action.quoteId);

    case 'UPVOTE_QUOTE':
      var selectedQuote = state.filter(quote => quote.id === action.quoteId);
      selectedQuote[0].votes = selectedQuote[0].votes + 1;
      return state.filter(quote => quote.id !== action.quoteId).concat(selectedQuote);

    case 'DOWNVOTE_QUOTE':
      var selectedQuote = state.filter(quote => quote.id === action.quoteId);
      if (selectedQuote[0].votes > 0) {
        selectedQuote[0].votes = selectedQuote[0].votes - 1;
        return state.filter(quote => quote.id !== action.quoteId).concat(selectedQuote);
      }

    default:
      return state;
  }
}
