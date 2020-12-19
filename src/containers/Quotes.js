import React, { Component } from 'react';
import { connect } from 'react-redux';
import { downvoteQuote, upvoteQuote } from '../actions/quotes';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  upvote(quoteId) {
    this.props.upvoteQuote(quoteId)
  }

  downvote(quoteId) {
    this.props.downvoteQuote(quoteId)
  }

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
              {this.props.quotes.map(function (quote) {
                return (
                  <QuoteCard key={quote.id} quote={quote} upvote={() => this.upvote(quote.id)} downvote={() => this.downvote(quote.id)} />
                )
              }, this)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {quotes: state.quotes}
}

const mapDispatchToProps = dispatch => {
  return {
    upvoteQuote: (quoteId) => {
      dispatch(upvoteQuote(quoteId))
    },
    downvoteQuote: (quoteId) => {
      dispatch(downvoteQuote(quoteId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
