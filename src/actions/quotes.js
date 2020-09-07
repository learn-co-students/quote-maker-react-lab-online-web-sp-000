// TODO: Create action creators as defined in tests
function addQuote(quote) {
    return {
        type: 'ADD_QUOTE',
        quote: quote
    }
}

const removeQuote = (id) => {
    return {
        type: 'REMOVE_QUOTE',
        quoteId: id
    }
}

const upvoteQuote = (id) => {
    return {
        type: 'UPVOTE_QUOTE',
        quoteId: id
    }
}

const downvoteQuote = (id) => {
    return {
        type: 'DOWNVOTE_QUOTE',
        quoteId: id
    }
}

module.exports = {
    addQuote,
    removeQuote,
    upvoteQuote,
    downvoteQuote
}