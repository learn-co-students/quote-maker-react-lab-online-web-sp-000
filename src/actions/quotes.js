// TODO: Create action creators as defined in tests

export function addQuote(quote) {
  return {
    type: "ADD_QUOTE",
    quote
  }
}

export function removeQuote(id) {
  return {
    type: "REMOVE_QUOTE",
    quoteId: id
  }
}

export function upvoteQuote(id) {
  console.log(id)
  let action = {
    type: "UPVOTE_QUOTE",
    quoteId: id
  }
  console.log(action)
  return action;
}

export function downvoteQuote(id) {
  return {
    type: "DOWNVOTE_QUOTE",
    quoteId: id
  }
}
