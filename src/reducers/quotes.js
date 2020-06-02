export default (state = [], action) => {
  switch (action.type) {

    case 'ADD_QUOTE':
      return {
        ...state,
        quotes: [...state, action.quote]
      }
    
    case 'REMOVE_QUOTE': 
    //! still need to write this
      return {
        state 
      }
    
    case 'UPVOTE_QUOTE': 
    //! still need to write this
      return {
        state 
      }
    
    case 'DOWNVOTE_QUOTE': 
    //! still need to write this
      return {
        state 
      }

    default:
      return state;
  }
}


