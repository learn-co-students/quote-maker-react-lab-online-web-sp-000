export default (state = [], action) => {

    let index;
    let quote;
  // const 
    switch (action.type) {

    case 'ADD_QUOTE':
      return state.concat(action.quote);
    }
  return state;
}
