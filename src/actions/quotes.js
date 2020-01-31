// TODO: Create action creators as defined in tests
// TODO: Create action creators as defined in tests
const addQuote = (quote) => {
  return {
    quote: quote,
    type: "ADD_QUOTE"
  }
}
//should return an Object with a type of "ADD_QUOTE" and a quote object

const removeQuote = (quoteId) => {
  return {
    quoteId: quoteId,
    type: "REMOVE_QUOTE"
  }
}
//should return an Object with a type of "REMOVE_QUOTE" and a quoteId

const upvoteQuote = (quoteId) => {
  return {
    quoteId: quoteId,
    type: "UPVOTE_QUOTE"
  }
}
//should return an Object with a type of "UPVOTE_QUOTE" and a quoteId

const downvoteQuote = (quoteId) => {
  return {
    quoteId: quoteId,
    type: "DOWNVOTE_QUOTE"
  }
}

export {
  addQuote,
  removeQuote,
  upvoteQuote,
  downvoteQuote
}
