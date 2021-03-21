import uuid from 'uuid';

export default (state = [], action) => {
   console.log('state: ', state, 'action: ', action)
   switch (action.type) {
      case "ADD_QUOTE":
         const quoteID = uuid();
         // [
         //    {
         //      id: '23423424242-42342423424242-fafdb',
         //      content: 'One Awesome Quote',
         //      author: 'Luke Ghenco'
         //    }
         //  ]
         return [
            ...state.concat([action.quote])
         ];
      default: 
         return state;
   };
   // return state;
}
// Action -> Reducer -> New State