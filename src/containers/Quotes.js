import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { upvoteQuote, downvoteQuote } from '../actions/quotes';

class Quotes extends Component {

  handleUpvote = id => {
    this.props.dispatch(upvoteQuote(id))
  }

  handleDownvote = id => {
    this.props.dispatch(downvoteQuote(id))
  }

  render() {
    let cards = this.props.quotes.map(quote => {
      return <QuoteCard handleUpvote={this.handleUpvote} handleDownvote={this.handleDownvote} quote={quote}/>
    })
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
              {cards}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state
}

//add arguments to connect as needed
export default connect(mapStateToProps)(Quotes);
