import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { 
  downvoteQuote,
  upvoteQuote,
  removeQuote
} from '../actions/quotes'

class Quotes extends Component {
  
  handleUpvote = (e, id) => {
    this.props.upvoteQuote(id)
  }

  handleDownvote = (e, id) => {
    this.props.downvoteQuote(id)
  }

  handleRemoveQuote = (e, id) => {
    this.props.removeQuote(id)
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
            {this.props.quotes.map(quote => {
                return <QuoteCard key={quote.id} quote={quote} upvoteQuote={this.handleUpvote} downvoteQuote={this.handleDownvote} removeQuote={this.handleRemoveQuote}/>
            })}
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
    upvoteQuote: id => {dispatch(upvoteQuote(id))},
    downvoteQuote: id => {dispatch(downvoteQuote(id))},
    removeQuote: id => {dispatch(removeQuote(id))}
  }
}

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
