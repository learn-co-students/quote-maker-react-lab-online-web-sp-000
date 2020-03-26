// TODO: Create action creators as defined in tests

// action creator:
// function that returns a JS object called a action.
// when the object is dispatched, then thats the point which the action is sent
// to the reducer - quotes.js -

// export const addQuote = quote => {
//     return {
//         type: 'ADD_QUOTE',
//         payload: quote
//     }
// }
//
// export const removeQuote = quote => {
//     return {
//         type: 'REMOVE_QUOTE',
//         payload: quote
//     }
// }
//
// export const upvoteQuote = quote => {
//     return {
//         type: 'UPVOTE_QUOTE',
//         payload: quote
//     }
// }
//
// export const downvoteQuote = quote => {
//     return {
//         type: 'DOWNVOTE_QUOTE',
//         payload: quote
//     }
// }

export const addQuote = quote => {
    return {
        type: 'ADD_QUOTE',
        quote: Object.assign({}, quote, { votes: 0 })
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
