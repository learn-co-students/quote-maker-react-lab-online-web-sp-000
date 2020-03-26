import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { upvoteQuote, downvoteQuote } from '../actions/quotes';

class Quotes extends Component {
  upvoteQuote = (id) => {
    this.props.upvoteQuote(id)
  }

  downvoteQuote = (id) => {
    this.props.downvoteQuote(id)
  }

  displayQuotes = () => {
    if(this.props.quotes.length !== 0) {
      return this.props.quotes.map(quoteInfo => <QuoteCard quote={quoteInfo} upvoteQuote={this.upvoteQuote} downvoteQuote={this.downvoteQuote}/>)
    }
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
              {this.displayQuotes()}
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
    upvoteQuote: (id) => {dispatch(upvoteQuote(id))},
    downvoteQuote: (id) => {dispatch(downvoteQuote(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
