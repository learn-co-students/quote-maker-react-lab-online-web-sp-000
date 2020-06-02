import React from 'react';
import { connect } from 'react-redux';


const QuoteCard = (props) =>
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          <p>- content {props.quote.content}</p>
          <footer>- author <cite title="Source Title">{props.quote.author}</cite></footer>
        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
          >
            Upvote
          </button>
          <button
            onClick={(props) => props.dispatch(props.upvoteQuote(props.quote.id))}
            type="button"
            className="btn btn-secondary"
          >
            Downvote
          </button>
          <button
            type="button"
            className="btn btn-danger"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div>Votes: {props.quote.votes}</div>
      </div>
    </div>
  </div>;

// function mapStateToProps(state) { 
//   return { quotes: state.quotes }
// }

//export default QuoteCard;
export default connect(null, null)(QuoteCard);