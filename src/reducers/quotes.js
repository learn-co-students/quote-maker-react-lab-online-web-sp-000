import uuid from 'uuid'


export default (state = [], action) => {
switch (action.type){
  case "ADD_QUOTE":
    console.log("addQuote",action)
    return state.concat(action.quote)
    default:
    return state 

}
}

const id = uuid();
console.log(id)