import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { upvoteQuote, downvoteQuote, removeQuote } from '../actions/quotes';

class Quotes extends Component {
  renderQuotes = () => {
    // console.log(this.props)
    return (
      // removeQuote={() => this.props.removeQuote(quote)}
      // upvoteQuote={() => this.props.upvoteQuote(quote)}
      // downvoteQuote={() => this.props.downvoteQuote(quote)}
      this.props.quotes.map(quote => <QuoteCard quote={quote} 
        removeQuote={() => this.props.removeQuote(quote)}
        upvoteQuote={() => this.props.upvoteQuote(quote)}
        downvoteQuote={() => this.props.downvoteQuote(quote)}/>)
    )
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
              {this.renderQuotes()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
const mapStateToProps = state => {
  return {
    quotes: state.quotes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    upvoteQuote: quote => dispatch(upvoteQuote(quote.id)),
    downvoteQuote: quote => dispatch(downvoteQuote(quote.id)),
    removeQuote: quote => dispatch(removeQuote(quote.id))
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);