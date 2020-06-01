export default (state = [], action) => {
  switch (action.type) {

    case 'ADD_QUOTE':
      console.log('in add_quote action, adding ', action.quote)
      return {
        ...state,
        quotes: [...state.quotes, action.quote]
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


