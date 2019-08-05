import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import * as actions from '../actions/quotes.js';

class Quotes extends Component {

  render() {
    const quotes = this.props.quotes.map(quote => {
      return <QuoteCard quoteInfo={quote} key={quote.id} upvote={this.props.upvoteQuote} downvote={this.props.downvoteQuote} />
    })
    
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

const mapStateToProps = state => {
  debugger;
  return {
    quotes: state.quotes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addQuote: quote => dispatch(actions.addQuote(quote)),
    removeQuote: id => dispatch(actions.removeQuote(id)),
    upvoteQuote: id => dispatch(actions.upvoteQuote(id)),
    downvoteQuote: id => dispatch(actions.downvoteQuote(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
