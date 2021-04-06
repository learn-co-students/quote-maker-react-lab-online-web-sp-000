import uuid from 'uuid';

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      const quote = {
        id: uuid(), 
        content: action.content, 
        author: action.author, 
        votes: action.votes
      }
      return { state: state.quote.concat(quote)}
    case 'REMOVE_QUOTE':
      return { state: state.filter(quote => quote.id !== action.id)}
    case 'UPVOTE_QUOTE':
      return { state: state.quote.id + 1}
    case 'DOWNVOTE_QUOTE':
      return { state: state.quote.id - 1 }
  }
  return state;
}
