import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes'
import { downvoteQuote } from '../actions/quotes';
import { upvoteQuote } from '../actions/quotes';
import { removeQuote } from '../actions/quotes';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  

  render() {
    // let quotes = this.props.quotes.map(quote => console.log(quote))
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
              {console.log(this.props.quotes)}
              {/* {this.props.quotes.map(quote => <QuoteCard quote={quote} addQuote={this.props.addQuote} removeQuote={this.props.removeQuote} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote}/> )} */}
              {/* <p>{this.props.quotes}</p> */}
              {/* <QuoteCard quote={this.props.quotes}  /> */}
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
const mapStateToProps = (state) => {
  return {
    quotes: state.quotes 
  }
}


//add arguments to connect as needed
export default connect(mapStateToProps, {addQuote, removeQuote, upvoteQuote, downvoteQuote})(Quotes);
