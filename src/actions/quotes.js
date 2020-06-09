// TODO: Create action creators as defined in tests
export const addQuote = quote => {
		console.log(quote)
	return {
		type: "ADD_QUOTE",
		quote
	}
}

export const removeQuote = quoteId => {
		console.log(quoteId)
	return {
		type: "REMOVE_QUOTE",
		quoteId
	}
}

export const upvoteQuote = quoteId => {
		console.log(quoteId)
	return {
		type: "UPVOTE_QUOTE",
		quoteId
	}
}

export const downvoteQuote = quoteId => {
		console.log(quoteId)
	return {
		type: "DOWNVOTE_QUOTE",
		quoteId
	}
}


