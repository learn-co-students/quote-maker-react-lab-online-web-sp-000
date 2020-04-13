function addQuote(quote) {
    return {
        type: 'ADD_QUOTE',
        quote: quote
    }
}

function removeQuote(quoteId) {
    return {
        type: 'REMOVE_QUOTE',
        quoteId: quoteId
    }
}

function upvoteQuote(quoteId) {
    //console.log('upvoting...', quoteId)
    return {
        type: 'UPVOTE_QUOTE',
        quoteId: quoteId
    }
}

function downvoteQuote(quoteId) {
    return {
        type: 'DOWNVOTE_QUOTE',
        quoteId: quoteId
    }
}

export {addQuote, removeQuote, upvoteQuote, downvoteQuote}
