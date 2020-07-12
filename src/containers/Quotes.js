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
      content = {q.content}
      author = {q.author}
      votes = {q.votes}
      id = {q.id}
      key = {q.id}
      onRemoveQuote={(id) => this.props.remove(id)} 
      onUpvoteQuote={(id) => this.props.upvote(id)} 
      onDownvoteQuote={(id) => this.props.downvote(id)} 
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
    remove: (id) => dispatch(removeQuote(id)),
    upvote: (id) => dispatch(upvoteQuote(id)),
    downvote: (id) => dispatch(downvoteQuote(id))
})

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
