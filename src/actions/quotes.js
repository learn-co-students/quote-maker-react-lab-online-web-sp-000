const addQuote = (quote) => {
  return {
    quote: quote,
    type: "ADD_QUOTE"
  }
}

const removeQuote = (quoteId) => {
  return {
    quoteId: quoteId,
    type: "REMOVE_QUOTE"
  }
}

const upvoteQuote = (quoteId) => {
  return {
    quoteId: quoteId,
    type: "UPVOTE_QUOTE"
  }
}

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