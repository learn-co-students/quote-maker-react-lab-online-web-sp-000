import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

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
               {this.props.quotes.map(
                 quote => {
                   return (
                     <QuoteCard quote={quote}
                        key={quote.id}
                        removeQuote={this.props.removeQuote}
                     />
                   )
                 }
               )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { quotes: state.quotes }
}

// const mapDispatchToProps = dispatch => ({
//   removeQuote: id => dispatch({ type: 'REMOVE_QUOTE', id: id }),
//   upvoteQuote: id => dispatch({ type: 'UPVOTE_QUOTE', id: id }),
//   downvoteQuote: id => dispatch({ type: 'DOWNVOTE_QUOTE', id: id })
// })

//add arguments to connect as needed
export default connect(mapStateToProps, { removeQuote })(Quotes);
