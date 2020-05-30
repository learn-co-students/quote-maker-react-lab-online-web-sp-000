import uuid from 'uuid';


export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote);

    case 'REMOVE_QUOTE':
      return state.filter(q => q.id !== action.quoteId)

    case 'UPVOTE_QUOTE':
      return state.map(q => {
        return (q.id === action.quoteId) ? {...q, votes: q.votes += 1} : q
      })

    case 'DOWNVOTE_QUOTE':
      return state.map(q => {
        const newVotes = (q.votes < 1 ) ? 0 : q.votes -= 1
        return (q.id === action.quoteId) ? {...q, votes: newVotes} : q
      })

    default:
      return state;
  }
}
