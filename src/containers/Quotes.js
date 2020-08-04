import React, { Component } from 'react'
import { connect } from 'react-redux'
import { downvoteQuote, removeQuote, upvoteQuote } from '../actions/quotes'
import QuoteCard from '../components/QuoteCard'

class Quotes extends Component {
  render () {
    return (
      <div>
        <hr />
        <div className='row justify-content-center'>
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              {this.props.quotes.map((q, i) => (
                <QuoteCard
                  key={i}
                  quote={q}
                  upvoteQuote={this.props.upvoteQuote}
                  downvoteQuote={this.props.downvoteQuote}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = s => ({
  quotes: s.quotes
})
const mapDispatchToProps = d => ({
  removeQuote: id => d(removeQuote(id)),
  upvoteQuote: id => d(upvoteQuote(id)),
  downvoteQuote: id => d(downvoteQuote(id))
})

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes)
