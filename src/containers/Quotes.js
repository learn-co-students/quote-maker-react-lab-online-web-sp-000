import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {removeQuote, upvoteQuote, downvoteQuote} from '../action/quotes.js'
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
            {this.props.map(prop => <QuoteCard removeQuote={this.props.removeQuote}  downvoteQuote={this.props.downvoteQuote} quote={quote}/>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  
  export default connect()(Quotes);

