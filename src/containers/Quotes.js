import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {upvoteQuote, downvoteQuote, removeQuote } from '../actions/quotes'

class Quotes extends Component {

  render() {
    console.log("Quotes Compoment", this.props)
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
              {this.props.quotes.map(quote => <QuoteCard quote={quote} upvoteQuote={this.props.upvoteQuote} key={quote.id}
              downvoteQuote={this.props.downvoteQuote} removeQuote={this.props.removeQuote}
              />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return ({
    quotes: state.quotes
  })
}

const mapDispatchToProps = dispatch => {
  return({
    upvoteQuote: (quote) => dispatch(upvoteQuote(quote)),
    downvoteQuote: (quote) => dispatch(downvoteQuote(quote)),
    removeQuote: (quote) => dispatch(removeQuote(quote))
  })
}
//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps )(Quotes);
