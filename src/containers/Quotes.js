import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {
  upvoteQuote,
  downvoteQuote,
  removeQuote
} from '../actions/quotes';

class Quotes extends Component {

  render() {

    const quotes = this.props.quotes.map(q => <QuoteCard
      quote={q}
      key={q.id}
      removeQuote={this.props.removeQuote} 
      upvoteQuote={this.props.upvoteQuote} 
      downvoteQuote={this.props.downvoteQuote} 
      />)

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
              {quotes}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ quotes }) => ({ quotes })

const mapDispatchToProps = dispatch => ({
    removeQuote: (id) => dispatch(removeQuote(id)),
    upvoteQuote: (id) => dispatch(upvoteQuote(id)),
    downvoteQuote: (id) => dispatch(downvoteQuote(id))
})

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
