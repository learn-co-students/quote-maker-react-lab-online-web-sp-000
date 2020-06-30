import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes'

class Quotes extends Component {

  handleUpvote = (quoteId) => {
    this.props.upvoteQuote(quoteId)
  }

  handleDownvote = (quoteId) => {
    this.props.downvoteQuote(quoteId)
  }

  handleRemoveQuote = (quoteId) => {
    this.props.removeQuote(quoteId)
  }

  renderQuotes = () => {
    return (
      this.props.quotes.map(quote => <QuoteCard upvoteQuote={this.handleUpvote} downvoteQuote={this.handleDownvote} key={quote.id} quote={quote} removeQuote={this.handleRemoveQuote} />)
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
              {this.renderQuotes()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed

const mapStateToProps = state => {
  return {
    quotes: state.quotes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeQuote: quoteId => dispatch(removeQuote(quoteId)),
    upvoteQuote: quoteId => dispatch(upvoteQuote(quoteId)),
    downvoteQuote: quoteId => dispatch(downvoteQuote(quoteId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
