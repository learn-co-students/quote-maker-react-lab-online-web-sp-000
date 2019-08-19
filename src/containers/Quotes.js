import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import * as actions from '../actions/quotes.js';


class Quotes extends Component {

  render() {

    const quotes = this.props.quotes.map(quote => {
      return <QuoteCard quoteInfo={quote} key={quote.id} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote} 
      removeQuote={this.props.removeQuote} />
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
  return {
    quotes: state.quotes 
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeQuote: id => dispatch(actions.removeQuote(id)),
    upvoteQuote: id => dispatch(actions.upvoteQuote(id)),
    downvoteQuote: id => dispatch(actions.downvoteQuote(id))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
