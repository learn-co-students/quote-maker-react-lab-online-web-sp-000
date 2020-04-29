import React from 'react';

//is quotecard purely presentational component?
//why isn't it written as a class?
//how is quotecard importing those props?
//why is the solution passing in those specific props?

const QuoteCard = (props) => 
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          { <p>{props.quote.content}</p>}
          { <footer>- author <cite title="Source Title">{props.quote.author}</cite></footer> }
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
        { <div>Votes: {props.quote.votes}</div> }
      </div>
    </div>
  </div>;

export default QuoteCard;
