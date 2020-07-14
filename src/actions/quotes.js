export function addQuote(quote) {
    console.log(quote);
    return {
        type: 'ADD_QUOTE',
        quote: quote
    }
}

export function removeQuote(quoteId) {
    console.log(quoteId);
    return {
        type: 'REMOVE_QUOTE',
        quoteId: quoteId
    }
}

export function upvoteQuote(quoteId) {
    console.log(quoteId);
    return {
        type: 'UPVOTE_QUOTE',
        quoteId: quoteId
    }
}

export function downvoteQuote(quoteId) {
    console.log(quoteId);
    return {
        type: 'DOWNVOTE_QUOTE',
        quoteId: quoteId
    }
}