import uuid from 'uuid';

export default (state = [], action) => {
  let id;
  let quoteToUpdate;
  let index;
  let votes;

  if(action.type !== 'ADD_QUOTE'){
    id = action.quoteId;
    index = state.findIndex(quote => quote.id === id);

    quoteToUpdate = state[index];
    console.log(state)
    console.log(id)
    console.log(index)
    console.log(quoteToUpdate)
    if(quoteToUpdate == undefined){
     return state; 
    }else{
      votes = quoteToUpdate.votes;
    }
  }

  switch(action.type){
    case 'ADD_QUOTE':
      return state.concat(action.quote)

    case 'REMOVE_QUOTE':
      return [...state.slice(0, index), ...state.slice(index + 1)]

    case 'UPVOTE_QUOTE':
      console.log(quoteToUpdate)
      return [
        ...state.slice(0, index),
        {
          ...quoteToUpdate,
          votes: quoteToUpdate.votes + 1
        }, 
        ...state.slice(index + 1)
      ]

    case 'DOWNVOTE_QUOTE':
      if(votes > 0){
        return [
          ...state.slice(0, index),
          {
            ...quoteToUpdate,
            votes: votes - 1
          }, 
          ...state.slice(index + 1)
        ]
      }else{
        return state;
      }

    default:
      return state;
  }
}	