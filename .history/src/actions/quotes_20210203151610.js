// TODO: Create action creators as defined in tests
export const addQuote =  (quote) => {

    return {
        type: 'ADD_QUOTE',
        quote: Object.assign({}, quote, {votes: 0})
    }
}

export const removeQuote =  (quoteID) => {

    return {
        type: 'REMOVE_QUOTE',
        quoteId
    }
}