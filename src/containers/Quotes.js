import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { upvoteQuote, downvoteQuote, removeQuote } from '../actions/quotes';

class Quotes extends Component {

  handleUpvote = id => this.props.upvoteQuote(id)

  renderQuotes = () => {
    return this.props.quotes.map(q => (
      <QuoteCard key={q.id} quote={q} upvoteQuote={() => this.props.upvoteQuote(q.id)} downvoteQuote={() => this.props.downvoteQuote(q.id)} removeQuote={() => this.props.removeQuote(q.id)} />
    ))
  }
  

  render() {
    console.log(this.props.quotes)
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
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
               {this.renderQuotes()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


//add arguments to connect as needed
export default connect(state => state, {upvoteQuote, downvoteQuote, removeQuote})(Quotes);
