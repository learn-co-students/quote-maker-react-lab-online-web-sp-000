import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {upvoteQuote} from '../actions/quotes';
import {downvoteQuote} from '../actions/quotes';
import { removeQuote }from '../actions/quotes';

class Quotes extends Component {

  renderQuoteCards = () => {
    console.log(this.props)
    return this.props.quotes.map(quote => <QuoteCard key={quote.id} quote={quote} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote} removeQuote={this.props.removeQuote} votes={quote.votes}/>)
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
              {this.renderQuoteCards()}
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

const mapStateToProps = state => {
  return {
    quotes: state.quotes
  }
}

const mapDispatchToProps = dispatch => {
  return{
    upvoteQuote: id => dispatch(upvoteQuote(id)),
    downvoteQuote: id => dispatch(downvoteQuote(id)),
    removeQuote: id => dispatch(removeQuote(id)),
  }
}
//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
