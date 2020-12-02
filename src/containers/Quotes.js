import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote } from '../actions/quotes';
import { upvoteQuote } from '../actions/quotes';
import { downvoteQuote } from '../actions/quotes'


class Quotes extends Component {

  // renderQuotes = () => {
  //   this.props.quotes.map(quote => <QuoteCard key={quote.id} removeQuote={this.props.removeQuote} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote} quote={quote} />)
  //   console.log(this.props.quotes)
  // }

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
              {/* {this.renderQuotes()} */}
              {this.props.quotes.map(quote => <QuoteCard key={quote.id} removeQuote={this.props.removeQuote} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote} quote={quote} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeQuote: (quoteId) => {dispatch(removeQuote(quoteId))},
    upvoteQuote: (quoteId) => {dispatch(upvoteQuote(quoteId))},
    downvoteQuote: (quoteId) => {dispatch(downvoteQuote(quoteId))}
  }
}

const mapStateToProps = (state) => {
  return { quotes: state.quotes }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
