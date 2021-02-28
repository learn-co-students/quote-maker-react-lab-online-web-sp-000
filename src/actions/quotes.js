// TODO: Create action creators as defined in tests

import quotes from "../reducers/quotes"

// will not export default because it allows only one action to be exported versus exporting each const individually

export const addQuote = quote => {
    return {
        type: 'ADD_QUOTE',
        quote
    }
}

export const removeQuote = quoteId => {
    return {
        type: 'REMOVE_QUOTE',
        quoteId
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