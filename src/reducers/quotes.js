// export default (state = [{content: 'first sign of first class..', author: 'J. K. Fritzgerals'}], action) => {
export default (state = [], action) => {
	switch(action.type) {
		case 'ADD_QUOTE':
			return [...state, action.quote];
		case 'REMOVE_QUOTE':
			// debugger
			return state.filter(quote => quote.id != action.quoteId);
		case 'UPVOTE_QUOTE':
			// debugger
			return state.map(quote => quote.id === action.quoteId ? {...quote, votes: quote.votes + 1} : quote)

		case 'DOWNVOTE_QUOTE':
			const checkVote = (quote) => quote.votes > 0 ? quote.votes - 1 : 0;
			return state.map(quote => {
				return quote.id === action.quoteId ? {...quote, votes: checkVote(quote)} : quote
			})

		default:
			return state;
	}
}
