import React from 'react';

const QuoteCard = ({ quoteInfo, upvote, downvote }) =>
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          <p>{quoteInfo.content}</p>
          <footer>- author <cite title="Source Title">{quoteInfo.author}</cite></footer>
        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => upvote(quoteInfo.id)}
          >
            Upvote
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => downvote(quoteInfo.id)}
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
        <div>Votes: {quoteInfo.votes}</div>
      </div>
    </div>
  </div>;

export default QuoteCard;
