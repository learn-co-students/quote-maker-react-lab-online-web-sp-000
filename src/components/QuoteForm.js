import React, { Component } from 'react';
//import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';
import uuid from 'uuid';

class QuoteForm extends Component {

  state = {
    //set up a controlled form with internal state
    content: "",
    author: "",
  }

  handleOnChange = event => {
    // Handle Updating Component State
   
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {

    // Handle Form Submit event default
    // Create quote object from state
    // Pass quote object to action creator
    // Update component state to return to default state
    let quote = {...this.state, id: uuid(), votes: 0,}

    event.preventDefault();
    this.props.addQuote(quote)
    this.setState({
      content: "",
      author: "",
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={event => this.handleOnSubmit(event)}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea name="content" onChange={this.handleOnChange}
                        className="form-control"
                        value={this.state.content}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        name="author"
                        className="form-control"
                        type="text"
                        onChange={this.handleOnChange}
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
    addQuote: quote => dispatch(addQuote(quote))
  }
}

//add arguments to connect as needed
export default connect(null, mapDispatchToProps)(QuoteForm);
