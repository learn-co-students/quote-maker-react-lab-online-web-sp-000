export default (state = [], action) => {
  let index
  let quote
  switch(action.type){
    case "ADD_QUOTE":
      return [...state, action.quote];   

    case "REMOVE_QUOTE":  
      return state.filter(quote => quote.id !== action.quoteId);

    case 'UPVOTE_QUOTE':
      index = state.findIndex(q => action.quoteId === q.id);
      quote = state[index];
      return [
        ...state.slice(0, index),
        {
          id: quote.id,
          content: quote.content,
          author: quote.author,
          votes: quote.votes += 1
        }
      ];

    case 'DOWNVOTE_QUOTE':
      index = state.findIndex(q => action.quoteId === q.id);
      quote = state[index];
      if (quote.votes === 0) {
        return state;
      } else {
        return [
          ...state.slice(0, index),
          {
            id: quote.id,
            content: quote.content,
            author: quote.author,
            votes: quote.votes -= 1
          }
        ];
      }

    default: return state;
  }  
}