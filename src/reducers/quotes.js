import uuid from 'uuid';

export default function quoteReducer(state = [], action) {
  if (action.type == 'ADD_QUOTE') {
    let quote = action.quote;
    quote.id = uuid();
    return [...state, action.quote]
  } else if (action.type == 'REMOVE_QUOTE') {
    return state.filter(q => {return q.id != action.quoteId})
  } else if (action.type == 'UPVOTE_QUOTE') {
    let quote = state.find(q => {return q.id == action.quoteId});
    quote.votes++;
    return [...state.filter(q => {return q.id != action.quoteId}), quote]
  } else if (action.type == 'DOWNVOTE_QUOTE') {
    let quote = state.find(q => {return q.id == action.quoteId});
    if (quote.votes > 0) {quote.votes = quote.votes - 1};
    return [...state.filter(q => {return q.id != action.quoteId}), quote];
  } else {return state}
}
