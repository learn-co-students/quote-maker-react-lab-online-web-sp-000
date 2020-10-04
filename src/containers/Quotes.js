import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes'
class Quotes extends Component {

  // renderQuotes = () => this.props.quotes.map((quote, id) => <Quote key={id} content={quote}/>)
  state = {
    quotes: []
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
                {this.props.quotes.map(quote =>
                  <QuoteCard key={quote.id} removeQuote={this.props.removeQuote} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote} quote={quote}
                  />)}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  
  const mapStateToProps = state => (
    { quotes: state.quotes }
  )
  
  export default connect(mapStateToProps, { removeQuote, upvoteQuote, downvoteQuote })(Quotes);