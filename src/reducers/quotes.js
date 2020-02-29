export default (state = [], action) => {

  switch (action.type){

    case "ADD_QUOTE":
     console.log("add quote is hit")
     return "add quote here!!"
    default: 
    console.log("default situation")
    return "default!!"
}
  }
  
