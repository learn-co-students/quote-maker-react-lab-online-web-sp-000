// TODO: Create action creators as defined in tests


export const addQuote = (quote) => {
   // console.log(`this is the quote value in the action: ${JSON.stringify(quote)}`)
    return { 
        type: 'ADD_QUOTE',
        
        quote: quote
  
    }
}

export const removeQuote = (quoteId) => {
    console.log(quoteId)
    return {
        type: 'REMOVE_QUOTE',
       
        quoteId: quoteId
        
        
    }
} 

export const upvoteQuote = (quoteId) => {
    return {
        type: 'UPVOTE_QUOTE',

        quoteId: quoteId, 
        // votes: votes
        
        
    }
}

export const downvoteQuote = (quoteId) => {
    return {
        type: 'DOWNVOTE_QUOTE',
        
        quoteId: quoteId
        
        
    }
}


