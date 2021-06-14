import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import QuoteForm from '../components/QuoteForm'
import {removeQuote, upvoteQuote, downvoteQuote} from '../actions/quotes'
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
              {this.props.quotes.map(quote => {
                return <QuoteCard key={quote.id} quote={quote} downvote={this.props.downvote} upvote={this.props.upvote} delete={this.props.delete} />
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ quotes }) => ({ quotes })

const mapDispatchToProps = dispatch => ({
  upvote: quoteId => dispatch(upvoteQuote(quoteId)),
  downvote: quoteId => dispatch(downvoteQuote(quoteId)),
  delete: quoteId => dispatch(removeQuote(quoteId))
})

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
