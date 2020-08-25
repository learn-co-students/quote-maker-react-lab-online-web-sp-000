import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote } from '../actions/quotes';

class Quotes extends Component {

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
            {this.props.quotes.map(quote => <QuoteCard quote={quote} removeQuote={removeQuote}/>)}

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

//add arguments to connect as needed
const mapStateToProps = (state) => {
  return {quotes: state.quotes}
}
const mapDispatchToProps = (dispatch) => {
  return {
    removeQuote: (quoteId) => {
      dispatch(removeQuote(quoteId))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
