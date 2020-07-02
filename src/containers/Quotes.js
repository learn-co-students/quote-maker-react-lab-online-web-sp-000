import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes'

class Quotes extends Component {

  removeQuote(){
    
  }
  
  renderQuotes(){
    return this.props.quotes.map(
      quote => {
        return <QuoteCard 
          quote={quote} 
          handleRemove={ 
            () => this.props.removeQuote(quote.id) 
          }
          handleUpvote={
            () => this.props.upvoteQuote(quote.id)
          }
          handleDownvote={
            () => this.props.downvoteQuote(quote.id)
          }
        />}
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

const mapStateToProps = state =>{
  return state
}

const mapDispatchToProps = dispatch =>{
  return {
    removeQuote: quoteId => { 
      console.log(`removing quote with id# ${quoteId}`)
      dispatch(removeQuote(quoteId)) 
    },
    upvoteQuote: quoteId => {
      console.log(`upvoting quote with id# ${quoteId}`)
      dispatch(upvoteQuote(quoteId))
    },
    downvoteQuote: quoteId => {
      console.log(`downvoting quote with id# ${quoteId}`)
      dispatch(downvoteQuote(quoteId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
