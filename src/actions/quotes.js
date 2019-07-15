//Click or Submit or other Event in Component triggers > Action > Reducer > Change State. (When you build the component and the click event it will probably become even more clear. )

export const addQuote = (quote) => {
  return {
    type: 'ADD_QUOTE',
    quote: Object.assign({}, quote, {votes: 0})
  }
}

export const removeQuote = (quoteId) => {
  return {
    type: 'REMOVE_QUOTE',
    quoteId
  }
}

export const upvoteQuote = (quoteId) => {
  return {
    type: 'UPVOTE_QUOTE',
    quoteId
  }
}

export const downvoteQuote = (quoteId) => {
  return {
    type: 'DOWNVOTE_QUOTE',
    quoteId
  }
}
