import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {removeQuote} from '../actions/quotes'
import {upvoteQuote} from '../actions/quotes'
import {downvoteQuote} from '../actions/quotes'


class Quotes extends Component {
 
  render() {
    console.log('this.props', this.props)
    const quotes = this.props.quotes.map(quote => <QuoteCard key={quote.id} quote={quote} removeQuote={this.props.removeQuote} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote}/>)
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

//add arguments to connect as needed
const mapStateToProps = state => {
  return{quotes: state.quotes}

}
export default connect(mapStateToProps, {removeQuote, upvoteQuote, downvoteQuote})(Quotes);
