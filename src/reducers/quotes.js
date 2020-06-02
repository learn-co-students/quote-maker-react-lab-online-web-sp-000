export default (state = [], action) => {
  switch (action.type) {

    case 'ADD_QUOTE':
      return state.concat(action.quote)
    
    case 'REMOVE_QUOTE': 
      console.log('in remove_quote')
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


