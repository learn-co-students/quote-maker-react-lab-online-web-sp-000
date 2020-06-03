//? TODO: Create action creators as defined in tests

export const addQuote = quote => {
  return {
    type: 'ADD_QUOTE',
    quote
  };
};

export const removeQuote = (quoteId) => {
  console.log('In removeQuote action', quoteId);
  return {
    type: 'REMOVE_QUOTE',
    quoteId
  };
};

export const upvoteQuote = (quoteId) => {
  console.log('In upvoteQuote action', quoteId);
  return {
    type: 'UPVOTE_QUOTE',
    quoteId
  };
};

export const downvoteQuote = (quoteId) => {
  console.log('In downvoteQuote action', quoteId);
  return {
    type: 'DOWNVOTE_QUOTE',
    quoteId
  };
};