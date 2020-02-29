const addQuote = quote => ({type: "ADD_QUOTE", quote});
const removeQuote = quoteId => ({type: "REMOVE_QUOTE", quoteId});
const upvoteQuote = quoteId => ({type: "UPVOTE_QUOTE", quoteId});
const downvoteQuote = quoteId => ({type: "DOWNVOTE_QUOTE", quoteId});

export { addQuote, removeQuote, upvoteQuote, downvoteQuote }
