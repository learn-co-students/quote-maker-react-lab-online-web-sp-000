export default (state = [], action) => {
  switch (action.type) {

    case 'ADD_QUOTE':
      return state.concat(action.quote)
    
    case 'REMOVE_QUOTE': 
      console.log('in remove_quote')
      return {
        state 
      }     //! still need to write this

    
    case 'UPVOTE_QUOTE': 
      console.log('in upvote_quote')
      return {
        state 
      }  //! still need to write this
    
    case 'DOWNVOTE_QUOTE': 
    //! still need to write this
      return {
        state 
      }

    default:
      return state;
  }
}


