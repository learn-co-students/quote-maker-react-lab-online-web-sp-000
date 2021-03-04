import uuid from 'uuid'
// const id = uuid();


export default (state = [], action) => {
  const idx = state.map(quote => quote.id).indexOf(action.quoteId)
  const quote = state.find(q => q.id === action.quoteId)

  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    
    case 'REMOVE_QUOTE':
      return [
        ...state.slice(0, idx),
        ...state.slice(idx + 1)
      ]
      
    case 'UPVOTE_QUOTE':
      return [
        ...state.slice(0, idx - 1),
        {
          ...quote,
          votes: quote.votes + 1
        },
        ...state.slice(idx + 1)
      ]

    case 'DOWNVOTE_QUOTE':
      if (quote.votes > 0) {
        return [
          ...state.slice(0, idx - 1),
          {
            ...quote,
            votes: quote.votes - 1
          },
          ...state.slice(idx + 1)
        ]
      } else {
        return state
      }
    // DOWNVOTE Quote
    default:
      return state

  }
}

// Sample Quote Object
// [
//   {
//     id: '23423424242-42342423424242-fafdb',
//     content: 'One Awesome Quote',
//     author: 'Luke Ghenco'
//   }
// ]
