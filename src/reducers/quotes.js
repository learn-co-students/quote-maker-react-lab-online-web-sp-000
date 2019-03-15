export default (state = [], action) => {
  const quotes = [...state]; // CLONE of the state's quotes, allowed to mutate.
  const index = quotes.findIndex(q => q.id === action.quoteId); // find the action quote in our clone
  const quote = quotes[index]; // actual REFERENCE to the EXISTING quote in the CLONED array

/* function ADD_QUOTE() {
    return [...this.quotes, this.action.quote];
  }
  function REMOVE_QUOTE() {
    return [...this.quotes.slice(0, index), ...this.quotes.slice(index + 1)];
  }
  function UPVOTE_QUOTE() {
    this.quotes[this.index].votes += 1; // allowed to mutate this clone
    return this.quotes;
  }
  function DOWNVOTE_QUOTE() {
    if (this.quote.votes > 0) this.quote.votes -= 1; // allowed to mutate this clone
    return this.quotes;
  }

  const snakeToCamel = (str) => {
    if (typeof(str) !== "string") return
    const lower = str.toLowerCase()
    const parts = lower.split('_')
    const humps = parts.splice(1).map(s => {
      return s[0].toUpperCase() + s.slice(1)
    })
    return [parts[0], ...humps].join('')
  }
  return this[action.type] ? { ...state, quotes: this[action.type]() } : state; 
 */
  switch (action.type) {
    case "ADD_QUOTE":
      return [...quotes, action.quote];
    case "REMOVE_QUOTE":
      quotes.splice(index, 1);
      return quotes
    case "UPVOTE_QUOTE":
      quote.votes += 1; // allowed to mutate this clone
      return quotes
    case "DOWNVOTE_QUOTE":
      if (quote.votes > 0) quote.votes -= 1; // allowed to mutate this clone
      return quotes
    default:
      return state;
  }
};
