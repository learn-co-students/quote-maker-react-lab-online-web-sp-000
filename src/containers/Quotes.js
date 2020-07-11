import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { upvoteQuote, downvoteQuote, removeQuote } from '../actions/quotes';

class Quotes extends Component {

  renderQuoteComponent = () => {
    return (
      this.props.quotes.map((quote, i) => {
        return (
          <QuoteCard key={i} removeQuote={this.props.removeQuote} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote} quote={quote} />
        )
      })
    )
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
              {this.renderQuoteComponent()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    quotes: store.quotes
  }
}


export default connect(mapStateToProps, {removeQuote, upvoteQuote, downvoteQuote})(Quotes);
