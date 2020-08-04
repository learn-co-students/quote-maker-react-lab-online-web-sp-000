export default (state = [], action) => {
  const upvote = q => ({ ...q, votes: q.votes + 1 })
  const downvote = q => (q.votes > 0 ? { ...q, votes: q.votes - 1 } : q)

  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      return state.filter(q => q.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      return state.map(q => (q.id === action.quoteId ? upvote(q) : q))
    case 'DOWNVOTE_QUOTE':
      return state.map(q => (q.id === action.quoteId ? downvote(q) : q))

    default:
      return state
  }
}
