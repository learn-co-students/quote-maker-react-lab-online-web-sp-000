import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {downvoteQuote, removeQuote, upvoteQuote} from "../actions/quotes";

class Quotes extends Component {

    getCards() {
        return this.props.quotes.map((e, i) => {
            return <QuoteCard
                key={i}
                quote={e}
                removeQuote={this.props.removeQuote}
                upvoteQuote={this.props.upvoteQuote}
                downvoteQuote={this.props.downvoteQuote}
            />
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
              {this.getCards()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const stateToProps = ({ quotes }) => ({ quotes })
export default connect(stateToProps, {removeQuote, upvoteQuote, downvoteQuote})(Quotes);
