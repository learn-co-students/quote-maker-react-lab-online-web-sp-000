import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {removeQuote, upvoteQuote, downvoteQuote} from '../actions/quotes';

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
              <ul>
                {this.props.quotes.map((quote, index) => <li key={index}><QuoteCard quote={quote} upvote={this.props.upvote} downvote={this.props.downvote} /></li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { quotes: state.quotes }
};

const mapDispatchToProps = dispatch => {
  return {
    remove: (id) => {dispatch(removeQuote(id))},
    upvote: (id) => {dispatch(upvoteQuote(id))},
    downvote: (id) => {dispatch(downvoteQuote(id))}
  }
}

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
