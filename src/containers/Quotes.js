import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {removeQuote, upvoteQuote, downvoteQuote} from '../actions/quotes'

class Quotes extends Component {

  quoteCards = (quotes) => {
    // debugger;
    return quotes.map(quote => <QuoteCard quote={quote} removeMe={this.props.removeMe} upvote={this.props.upvote} downvote={this.props.downvote}/>)
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
              {this.quoteCards(this.props.quotes)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    removeMe: (id) => dispatch(removeQuote(id)),
    upvote: (id) => dispatch(upvoteQuote(id)),
    downvote: (id) => dispatch(downvoteQuote(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
