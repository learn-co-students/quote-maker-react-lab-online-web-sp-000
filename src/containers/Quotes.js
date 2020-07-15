import React, { Component } from "react";
import { connect } from "react-redux";
import QuoteCard from "../components/QuoteCard";
import { removeQuote } from "../actions/quotes";
import { upvoteQuote } from "../actions/quotes";
import { downvoteQuote } from "../actions/quotes";

class Quotes extends Component {
  // handleClick = event => {
  //   event.target.name === "upvoteQuote"
  //     ? this.props.dispatch(upvoteQuote(event.target.id))
  //     : this.props.dispatch(downvoteQuote(event.target.id));
  // };

  upvote = id => {
    this.props.dispatch(upvoteQuote(id));
  };

  downvote = id => {
    this.props.dispatch(downvoteQuote(id));
  };
  makeQuoteCards() {
    return this.props.quotes.map(quote => (
      <QuoteCard quote={quote} upvote={this.upvote} downvote={this.downvote} />
    ));
  }
  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
          <p>{this.makeQuoteCards()}</p>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4"> </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    quotes: state.quotes
  };
};
//add arguments to connect as needed
export default connect(mapStateToProps)(Quotes);
