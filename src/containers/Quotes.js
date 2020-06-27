import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

class Quotes extends Component {

  renderQuoteCards = () =>  this.props.quotes.map(
    (quote, id) => <QuoteCard 
      key={id}
      quote={quote}
      // author={quote.author} 
      // content={quote.content} 
      // votes={quote.votes} 
      // quoteId={quote.quoteId}
      removeQuote={this.props.removeQuote}
      upvoteQuote = {this.props.upvoteQuote}
      downvoteQuote = {this.props.downvoteQuote}
    />
  )
  
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
              {this.renderQuoteCards()}
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
}

const mapDispatchToProps = dispatch => ({
  removeQuote: quoteId => dispatch(removeQuote(quoteId)),
  upvoteQuote: quoteId => dispatch(upvoteQuote(quoteId)),
  downvoteQuote: quoteId => dispatch(downvoteQuote(quoteId))
})

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
