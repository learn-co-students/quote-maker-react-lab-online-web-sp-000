export default (state = [], action) => {
  let idx;
  let quote;
  switch (action.type) {

    case 'ADD_QUOTE':
      // console.log('quote obj in reducer', action.quote);
      return state.concat(action.quote);

    case 'REMOVE_QUOTE':
      idx = state.findIndex(q => action.quoteId === q.id);
      return [
        ...state.slice(0, idx),
        ...state.slice(idx + 1)
      ];

    case 'UPVOTE_QUOTE':
      idx = state.findIndex(q => action.quoteId === q.id);
      quote = state[idx];
      return [
        ...state.slice(0, idx),
        {
          id: quote.id,
          content: quote.content,
          author: quote.author,
          votes: quote.votes + 1
        }
      ];

    case 'DOWNVOTE_QUOTE':
      idx = state.findIndex(q => action.quoteId === q.id);
      quote = state[idx];
      if (quote.votes === 0) {
        return state;
      } else {
        return [
          ...state.slice(0, idx),
          {
            id: quote.id,
            content: quote.content,
            author: quote.author,
            votes: quote.votes - 1
          }
        ];
      }

    default:
      return state;
  }
}
