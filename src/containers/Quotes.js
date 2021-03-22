import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote } from '../actions/quotes'
import { upvoteQuote } from '../actions/quotes'
import { downvoteQuote } from '../actions/quotes'

class Quotes extends Component {

  render() {
    let quotes = this.props.quotes.map((quote, idx) => 
      <li key={idx}> 
        <QuoteCard 
          quote={quote} 
          removeQuote={this.props.removeQuote} 
          upvoteQuote={this.props.upvoteQuote} 
          downvoteQuote = {this.props.downvoteQuote} />
      </li> );
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
              {quotes}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed

const mapStateToProps = state =>{
  return { quotes: state.quotes}
}

const mapDispatchToProps = dispatch => {
  return {
    removeQuote: (quoteId) => dispatch(removeQuote(quoteId)),
    upvoteQuote: (quoteId) => dispatch(upvoteQuote(quoteId)),
    downvoteQuote: (quoteId) => dispatch(downvoteQuote(quoteId))
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     // dispatching actions returned by action creators
//     increment: () => dispatch(increment()),
//     decrement: () => dispatch(decrement()),
//     reset: () => dispatch(reset()),
//   }
// }
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
