import React, { Component } from "react";
import { connect } from "react-redux";
import QuoteCard from "../components/QuoteCard";
import { upvoteQuote, downvoteQuote, removeQuote } from "../actions/quotes";

class Quotes extends Component {
  handleUpvote = (quoteId) => {
    this.props.upvoteQuote(quoteId);
  };

  handleDownvote = (quoteId) => {
    this.props.downvoteQuote(quoteId);
  };

  handleRemoveQuote = (quoteId) => {
    this.props.removeQuote(quoteId);
  };

  renderQuoteCards() {
    return this.props.quotes.map((quote, id) => {
      return (
        <QuoteCard
          key={id}
          quote={quote}
          handleUpvote={this.handleUpvote}
          handleDownvote={this.handleDownvote}
          handleRemoveQuote={this.handleRemoveQuote}
        />
      );
    });
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
              {this.renderQuoteCards()}
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { quotes: state.quotes };
};

//add arguments to connect as needed
export default connect(mapStateToProps, {
  upvoteQuote,
  downvoteQuote,
  removeQuote,
})(Quotes);
