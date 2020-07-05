import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {removeQuote, upvoteQuote, downvoteQuote} from '../actions/quotes'

class Quotes extends Component {

  render() {
    console.log(this.props.quotes)
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
              {this.props.quotes.map(quote => (
                <QuoteCard
                  key={quote.id}
                  quote={quote}
                  upvote={quoteId => this.props.upvote(quoteId)}
                  remove={quoteId => this.props.remove(quoteId)}
                  downvote={quoteId => this.props.downvote(quoteId)}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    remove: quoteId => dispatch(removeQuote(quoteId)),
    upvote: quoteId => dispatch(upvoteQuote(quoteId)),
    downvote: quoteId => dispatch(downvoteQuote(quoteId))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
