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
         // console.log('state: ', state, 'action: ', action)
         // debugger
         return [
            ...state.filter(quote => quote.id !== action.quoteId)
         ];
      case "UPVOTE_QUOTE":
         debugger 
         console.log(state)
         return [
            ...state.map(quote => {
               if (quote.id === action.quoteId) quote.votes++;
               return quote
            })
         ];
      case "DOWNVOTE_QUOTE":
         return [
            ...state.map(quote => {
               if (quote.id === action.quoteId) {
                  quote.votes > 0 ? quote.votes-- : quote.votes
               }
               return quote
            })
         ];
      default: 
         return state;
   };
   // return state;
}
// Action -> Reducer -> New State





