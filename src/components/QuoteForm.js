import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {

  state = {
    content: '',
    author: ''
  };

  handleOnChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  handleOnSubmit = event => {
    // Handle Form Submit event 
    event.preventDefault();
    // Create quote object from state
    let quote = Object.assign({}, this.state, {id: uuid()})
    // Pass quote object to action creator
    this.props.newQuote(quote);
    // Update component state to return to default state
    this.setState({
      content: '',
      author: ''
    })
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        onChange={this.handleOnChange}
                        className="form-control"
                        name="content"
                        value={this.state.content}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        onChange={this.handleOnChange}
                        className="form-control"
                        name="author"
                        type="text"
                        value={this.state.author}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    newQuote: (quote) => dispatch(addQuote(quote))
  };
};

export default connect(null, mapDispatchToProps)(QuoteForm);
