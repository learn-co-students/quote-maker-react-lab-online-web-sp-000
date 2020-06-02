import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {removeQuote, downvoteQuote, upvoteQuote } from '../actions/quotes'

class Quotes extends Component {

  render() {
    console.log('in Quotes container, this.props', this.props)
    console.log('in Quotes container, this.props ', this.props.quotes.quotes)
    let p = [];
    //! whyyyyy are quotes nested under quotes? Where is this happening?
    if (this.props.quotes.quotes) {
      p = this.props.quotes.quotes.map((singleQuote, index) => <QuoteCard key={index} quote={singleQuote} removeQuote={removeQuote} upvoteQuote={upvoteQuote} downvoteQuote={downvoteQuote}/>)
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
              {p}
              {/* Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes */}
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

