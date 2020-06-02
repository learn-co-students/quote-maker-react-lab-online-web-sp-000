import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {removeQuote, downvoteQuote, upvoteQuote } from '../actions/quotes'

class Quotes extends Component {

  render() {
    let quoteCardRender = [];
    if (this.props.quotes) {
      quoteCardRender = this.props.quotes.map((singleQuote, index) => <QuoteCard key={index} quote={singleQuote} removeQuote={removeQuote} upvoteQuote={upvoteQuote} downvoteQuote={downvoteQuote}/>)
    }

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
              {/* Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes */}
              {quoteCardRender}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes
  };
};

//add arguments to connect as needed
//export default connect()(Quotes);
export default connect(mapStateToProps)(Quotes);

