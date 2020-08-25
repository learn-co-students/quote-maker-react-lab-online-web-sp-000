import React from 'react';

const QuoteCard = (props) =>

  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          {/* <div><p>{props.content}</p><footer>- author <cite title="Source Title">{prop.author}</cite></footer></div> */}
          {<p>{props.quote.content}</p>}
          {<footer>- author <cite title="Source Title">{props.quote.author}</cite></footer>}
        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
            onClick={console.log('upvote')}
          >
            Upvote
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={console.log('downvote')}
          >
            Downvote
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={console.log('hello')}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        {/* <div>Votes: {Render Quote Votes}</div> */}
      </div>
    </div>
  </div>;

export default QuoteCard;
