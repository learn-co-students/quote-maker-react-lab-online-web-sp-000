// TODO: Create action creators as defined in tests

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

    // import uuid from 'uuid';

    // function addQuote(action) {
    //     const id = uuid();
    //     console.log(`A new quote is being made with an id of ${id}`)
    //     let newQuote = action.quote
    //     newQuote.id = id
    //     return { quotes: state.concat(newQuote) }; // make quote an object with :id, :content, and :author keys
    // }

    // function removeQuote(action) {
    //     let newState = state.slice()
    //     let quoteIndex = newState.findIndex(quote => quote.id === action.quoteId)
    //     newState.splice(quoteIndex, 1)
    //     return {quotes: newState}
    // }

    // function upvoteQuote(action) {
    //     let newState = state.slice()
    //     let quote = newState.find(quote => quote.id === action.quoteId)
    //     quote.votes += 1
    //     return {quotes: newState}
    // }

    // function downvoteQuote(action) {
    //     let newState = state.slice()
    //     let quote = newState.find(quote => quote.id === action.quoteId)
    //     quote.votes -= 1
    //     return {quotes: newState}
    // }
// }