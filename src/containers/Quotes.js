import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote } from '../actions/quotes';
import { upvoteQuote } from '../actions/quotes';
import { downvoteQuote } from '../actions/quotes';

class Quotes extends Component {


  render() {

    let cards = this.props.quotes.map(quote =>
      <QuoteCard
        key={quote.id}
        id={quote.id}
        content={quote.content}
        author={quote.author}
        votes={quote.votes}
        remove={(event) =>
          this.props.dispatch(removeQuote(quote.id))}
        upvote={(event) =>
          this.props.dispatch(upvoteQuote(quote.id))}
        downvote={(event) =>
          this.props.dispatch(downvoteQuote(quote.id))}
        />
      )

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
  return { quotes: state.quotes }
}
export default connect(mapStateToProps)(Quotes);
