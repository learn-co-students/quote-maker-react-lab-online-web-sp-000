import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes'

class Quotes extends Component {

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>u
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.props.quotes.map((quote, index) => 
                <QuoteCard key={index} quote={quote} downvoteQuote={this.props.downVote} upvoteQuote={this.props.upVote} removeQuote={this.props.remove} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes
  }
};

const mapDispatchToProps = dispatch => {
  return {
    upVote: (quote) => dispatch(upvoteQuote(quote)),
    downVote: (quote) => dispatch(downvoteQuote(quote)),
    remove: (quote) => dispatch(removeQuote(quote))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
