import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {removeQuote, upvoteQuote, downvoteQuote} from '../actions/quotes.js'
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
            {this.props.quotes.map(prop => <QuoteCard removeQuote={this.props.removeQuote}  downvoteQuote={this.props.downvoteQuote} quote={quote}/>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}


mapStateToProps = (state) => {
return {
 quotes: state.quotes

}
mapDispatchToProps = dispatch  => {
return{
removeQuote: () => dispatch({ type: 'REMOVE_QUOTE' }),
upvoteQuote: () => dispatch({type: "UPVOTE_QUOTE"}),
downvoteQuote: () => dispatch({type: "DOWNVOTE_QUOTE"})


}



}

}
  export default connect(mapStateToProps)(Quotes);

