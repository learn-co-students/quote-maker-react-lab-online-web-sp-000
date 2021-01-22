import React, { Component } from 'react';
import { connect } from 'react-redux';
import {downvoteQuote, upvoteQuote, removeQuote } from '../actions/quotes';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {
  renderQuotes(){
  
    console.log(this.props.quotes)
    return this.props.quotes.map(quote=><QuoteCard quote = {quote} removeQuote = {this.props.removeQuote} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote}/>)
    
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
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
                
                */
               
               this.renderQuotes()
               
           
        
        
               
              }

            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {quotes: state.quotes}
  
}

const mapDispatchToProps = dispatch =>{
  return {
    removeQuote: (quoteId)=>{dispatch(removeQuote(quoteId))},
    downvoteQuote: (quoteId)=>{dispatch(downvoteQuote(quoteId))},
    upvoteQuote: (quoteId)=>{dispatch(upvoteQuote(quoteId))}
  }
}




//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
