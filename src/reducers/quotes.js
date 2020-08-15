export default (state = [], action) => {
console.log(action);
  switch(action.type){
    case 'ADD_QUOTE':
      return state.concat(action.quote)

    case 'REMOVE_QUOTE':
      return state.filter(q => q.quoteId !== action.quote.id)

    // case "UPVOTE_QUOTE":
    //   return

    // case "DOWNVOTE_QUOTE"
    //   return 

    default:
      return state;
  }
}
