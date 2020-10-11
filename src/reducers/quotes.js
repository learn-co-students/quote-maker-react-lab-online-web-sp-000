export default (state = [], action) => {
  let idx;
  let qte;

  switch (action.type) {

    case 'ADD_QUOTE':
      return state.concat(action.quote)

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)

    case 'UPVOTE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId) // First, we locate the index value of our quote.
      qte = state[idx] // Second, we set our var equal to the actual quote by using that index value.

      return [
        ...state.slice(0, idx), // Third, we take the quote out our our list
        Object.assign({}, qte, {votes: qte.votes += 1}), // Fourth, we use Object.assign to recreate the specific quote object, all while modifying the vote attribute by one. 
        ...state.slice(idx + 1) // Finally, we pass our quote back into the quote list
      ]

    case 'DOWNVOTE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId) // Again, locate quote index value...
      qte = state[idx] //...then find the specific quote

      if(qte.votes > 0) { // We use a conditional to determine if the quote has a vote total greater than zero...
        return [
          ...state.slice(0, idx), // the perform the same procedure as before except we substract one from our vote total.
          Object.assign({}, qte, {votes: qte.votes -= 1}), // Using the conditional prevents our vote count from falling below zero.
          ...state.slice(idx + 1)
        ]

      }

    default:
      return state;
  }
}
