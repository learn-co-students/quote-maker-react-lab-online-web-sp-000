import uuid from 'uuid';

const id = uuid();

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      const newQuote = { id: id, ...action.quote };
      return [...state, newQuote];
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id != action.quoteId);
    case 'UPVOTE_QUOTE':
      const upvotedQuote = state.find(quote => quote.id == action.quoteId);
      const preUpvoteState = state.filter(quote => quote.id != action.quoteId)
      if (upvotedQuote.vote) {
        return [...preUpvoteState, { ...upvotedQuote, votes: upvotedQuote.votes + 1 }]
      } else {
        return [...preUpvoteState, { ...upvotedQuote, votes: 1 }]
      };
    case 'DOWNVOTE_QUOTE':
      const downvotedQuote = state.find(quote => quote.id == action.quoteId);
      let preDownvoteState = state.filter(quote => quote.id != action.quoteId)
      if (downvotedQuote.votes > 0) {
        return [...preDownvoteState, { ...downvotedQuote, votes: downvotedQuote.votes - 1 }];
      } else {
        return [...preDownvoteState, { ...downvotedQuote, votes: 0 }];
      }
    default:
      return state;
  }
}
