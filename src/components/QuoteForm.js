import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {

  //set up a controlled form with internal state
  state = {
    content: '',
    author: '',
  }

  handleOnChange = event => {
    this.setState({
        [event.target.name]: event.target.value
    });
  }

  // Handle Form Submit event default
  // Create quote object from state
  // Pass quote object to action creator
  // Update component state to return to default state
  handleOnSubmit = event => {
    event.preventDefault();
    const newQuote = {...this.state, id: uuid() };
    this.props.addQuote(newQuote);
    this.setState(
      {
        content: '',
        author: ''
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form onSubmit={(event) => this.handleOnSubmit(event)} className="form-horizontal">
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        className="form-control"
                        value={this.state.content}
                        name="content"
                        onChange={(event) => this.handleOnChange(event)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        name="author"
                        type="text"
                        onChange={(event) => this.handleOnChange(event)}
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
      addQuote: newQuote => dispatch(addQuote(newQuote))
    };
  };


//add arguments to connect as needed
export default connect(null, mapDispatchToProps)(QuoteForm);
