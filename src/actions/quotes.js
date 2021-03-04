// TODO: Create action creators as defined in tests

export const addQuote = (quote) => {
  return {
    quote: quote,
    type: 'ADD_QUOTE'
  }
}

export const removeQuote = (id) => {
  return {
    quoteId: id,
    type: 'REMOVE_QUOTE'
  }
}

export const upvoteQuote = (id) => {
  return {
    quoteId: id,
    type: 'UPVOTE_QUOTE'
  }
}

export const downvoteQuote = (id) => {
  return {
    quoteId: id,
    type: 'DOWNVOTE_QUOTE'
  }
}
