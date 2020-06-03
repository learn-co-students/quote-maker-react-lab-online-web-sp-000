export default (state = [], action) => {
  switch (action.type) {

    case 'ADD_QUOTE':
      return state.concat(action.quote)
    
    case 'REMOVE_QUOTE': 
      console.log('in REMOVE_QUOTE reducer', action)
      return {
        state 
      }     //! still need to write this

    
    case 'UPVOTE_QUOTE': 
      console.log('in UPVOTE_QUOTE reducer')
      return {
        state 
      }  //! still need to write this
    
    case 'DOWNVOTE_QUOTE':
      console.log('in DOWNVOTE_QUOTE reducer')
 
    //! still need to write this
      return {
        state 
      }

    default:
      return state;
  }
}


