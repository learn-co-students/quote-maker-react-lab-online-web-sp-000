import React, { Component } from 'react';
import { connect } from 'react-redux';
import { downvoteQuote, upvoteQuote } from '../actions/quotes';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  upvote(quoteId) {
    this.props.upvoteQuote(quoteId)
  }

  downvote(quoteId) {
    this.props.downvoteQuote(quoteId)
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
              {this.props.quotes.map(function (quote) {
                
                //debugger
                return (
                  <QuoteCard key={quote.id} quote={quote} upvote={() => this.upvote(quote.id)} downvote={() => this.downvote(quote.id)} />
                )
              }, this)}
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

const mapStateToProps = state => {
  return {quotes: state.quotes}
}

const mapDispatchToProps = dispatch => {
  return {
    upvoteQuote: (quoteId) => {
      //debugger
      dispatch(upvoteQuote(quoteId))
    //debugger
    },
    downvoteQuote: (quoteId) => {
      dispatch(downvoteQuote(quoteId))
    }
  }
}

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
