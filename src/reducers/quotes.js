import uuid from 'uuid';

export default (state = [], action) => {
   // console.log('state: ', state, 'action: ', action)
   switch (action.type) {
      case "ADD_QUOTE":
         const quoteId = uuid();
         // [
         //    {
         //      id: '23423424242-42342423424242-fafdb',
         //      content: 'One Awesome Quote',
         //      author: 'Luke Ghenco'
         //    }
         //  ]
         action.quote.id = quoteId;
         return [
            ...state.concat([action.quote])
         ];
      case "REMOVE_QUOTE":
         // export const removeQuote = (quoteId) => {
         //    return {
         //       type: "REMOVE_QUOTE",
         //       quoteId: quoteId
         //    }
         // };
         console.log('state: ', state, 'action: ', action)
         return [
            state.filter(quote => quote.id === action.quote.id)
         ];
      default: 
         return state;
   };
   // return state;
}
// Action -> Reducer -> New State