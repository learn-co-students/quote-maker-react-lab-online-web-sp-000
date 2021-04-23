// TODO: Create action creators as defined in tests

function addQuote(quote) {
  return {
    type: 'ADD_QUOTE',
    quote: { ...quote, votes: 0 }
  }
}

function removeQuote(quoteId) {
  return {
    type: 'REMOVE_QUOTE',
    quoteId: quoteId
  }
}

function upvoteQuote(quoteId) {
  return {
    type: 'UPVOTE_QUOTE',
    quoteId: quoteId
  }
}

function downvoteQuote(quoteId) {
  console.log('action creator downvotequote called')
  return {
    type: 'DOWNVOTE_QUOTE',
    quoteId: quoteId
  }
}


export {
    addQuote,
    removeQuote,
    upvoteQuote,
    downvoteQuote
}
