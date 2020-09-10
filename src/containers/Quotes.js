import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote } from '../actions/quotes';
import { upvoteQuote } from '../actions/quotes';
import { downvoteQuote } from '../actions/quotes';

class Quotes extends Component {

  render() {
    console.log(this.props)
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
              {this.props.quotes.map((quote, index) => <QuoteCard key= {index} quote= {quote} removeQuote= {this.props.removeQuote} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote}  /> )}
               
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { quotes: state.quotes }
}

const mapDispatchToProps = dispatch => {
  return {
    removeQuote: quoteId => dispatch({ type: 'REMOVE_QUOTE', quoteId: quoteId }),
    upvoteQuote: quoteId => dispatch({ type: 'UPVOTE_QUOTE', quoteId: quoteId }),
    downvoteQuote: quoteId => dispatch({ type: 'DOWNVOTE_QUOTE', quoteId: quoteId }),
  };
};


//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
