// TODO: Create action creators as defined in tests
export const addQuote =  (quote) => {

    return {
        type: 'ADD_QUOTE',
        quote: Object.assign({}, quote, {votes: 0})
    }
}

export const removeQuote =  (quoteId) => {

    return {
        type: 'REMOVE_QUOTE',
        quoteId
    }
}

export const upvoteQuote =  (quoteId) => {

    return {
        type: 'REMOVE_QUOTE',
        quoteId
    }
}


// upvoteQuote(quoteId: Integer)
//       1) should return an Object with a type of "UPVOTE_QUOTE" and a quoteId
//     downvoteQuote(quoteId: INteger)
//       2) should return an Object with a type of "DOWNVOTE_QUOTE" and a quoteId