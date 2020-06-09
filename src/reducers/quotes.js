import uuid from "uuid"

const id = uuid();

export default function manageQuotes(state = [], action) {
  // let idx
  console.log(action)
  switch (action.type) {
  	case "ADD_QUOTE":
  		console.log(uuid())
  		action.quote["id"] = uuid()
  		action.quote.votes ? null : action.quote.votes = 0
  		return [...state, action.quote]
  
  	case "REMOVE_QUOTE":
  		console.log(action.quoteId)
  		return state.filter(quote => quote.id != action.quoteId)

  	case "UPVOTE_QUOTE":
  		return state.map(quote => {
  			if (quote.id === action.quoteId) {
					quote.votes += 1
  			} 
  			return quote
  		})

  	case "DOWNVOTE_QUOTE":
  		return state.map(quote => {
  			if (quote.id === action.quoteId) {
					if (quote.votes > 0) {
						quote.votes -= 1
					}
  			} 
  			return quote
  		})

		default:
			return state;
  }
}

