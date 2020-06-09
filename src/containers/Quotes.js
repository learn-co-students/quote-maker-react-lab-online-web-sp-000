import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeQuote, upvoteQuote, downvoteQuote } from "../actions/quotes.js"

import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {
  renderQuoteCards = () => {
    // console.log(this.props.quotes)
    return this.props.quotes.map(quote => {
      return (
        <QuoteCard id={quote.id} key={quote.id} quote={quote} 
          removeQuote={this.handleRemoveQuote}
          upvote={this.handleUpvote} 
          downvote={this.handleDownvote} 
        />
      )
    })
  }
  handleRemoveQuote = (id) => {
    console.log("removing quote")
    // this.props.removeQuote(this.props.quotes.filter(quote => quote.id === id)[0])
    this.props.removeQuote(id)
  }

  handleUpvote = (id) => {
    this.props.upvoteQuote(id)
  }

  handleDownvote = (id) => {
    this.props.downvoteQuote(id)
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
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
              {this.renderQuoteCards()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state)
  return { quotes: state.quotes }
}

//add arguments to connect as needed
export default connect(mapStateToProps, { removeQuote, upvoteQuote, downvoteQuote })(Quotes);




