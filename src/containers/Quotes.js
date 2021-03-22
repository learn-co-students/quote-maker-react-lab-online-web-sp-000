import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addQuote, 
         removeQuote, 
         upvoteQuote, 
         downvoteQuote } from '../actions/quotes';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
               {this.props.quotes.map(quote => {
                  console.log(quote)
                  return (<QuoteCard key={quote.id} 
                                    /* TODO: Fix these */
                                    quote={quote} 
                                    removeQuote={removeQuote}
                                    upvoteQuote={upvoteQuote}
                                    downvoteQuote={downvoteQuote} />);
               })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// connect to redux state so to render quotes
const mapStateToProps = state => {
   console.log(state)
   return {
      quotes: state.quotes
   }
}

const mapDispatchToProps = dispatch => {
   console.log(dispatch)
   return {
      removeQuote: quoteId => dispatch(removeQuote(quoteId)),
      upvoteQuote: quoteId => dispatch(upvoteQuote(quoteId)),
      downvoteQuote: quoteId => dispatch(downvoteQuote(quoteId))
   }
}


//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
