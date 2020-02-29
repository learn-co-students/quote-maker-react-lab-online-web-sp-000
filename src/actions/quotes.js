// TODO: Create action creators as defined in tests
export const addQuote = (quote) =>{type: "ADD_QUOTE", quote}
export const removeQuote = (quoteID) =>{type: "REMOVE_QUOTE", quoteID}
export const upvoteQuote = (quoteID) =>{type: "UPVOTE_QUOTE", quoteID}
export const downvoteQuote = (quoteID) =>{type:"DOWNVOTE_QUOTE", quoteID}

