import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from "../actions/quotes"


class Quotes extends Component {

  // handleUpvote = (id) => {
  //   upvoteQuote(id)
  // }

  
  renderQuoteCards = () => {
    return this.props.quotes.map((quote) => {
  
       return <QuoteCard key ={quote.id} quote={quote} handleUpvote={this.props.upvoteQuote} handleDownvote={this.props.downvoteQuote} content={quote.content}  votes={quote.votes} author={quote.author}/>
    })
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
                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
const mapStateToProps  = state => {
 
  return {
    quotes: state.quotes
  }
}
export default connect(mapStateToProps,  { removeQuote, upvoteQuote, downvoteQuote })(Quotes);
