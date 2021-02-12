// TODO: Create action creators as defined in tests
export const addQuote = quote => {
    return {
        quote: Object.assign({}, quote, {votes: 0}),
        type: 'ADD_QUOTE'
    }
}

export const removeQuote = quoteId => {
    return {
        type: 'REMOVE_QUOTE',
        quoteId: quoteId
    }
}

export const upvoteQuote = quoteId => {
    return {
        type: 'UPVOTE_QUOTE',
        quoteId
    }
}

export const downvoteQuote = quoteId => {
    return {
        type: 'DOWNVOTE_QUOTE',
        quoteId
    }
}