import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {
// OBJECTIVE: set up a controlled form with internal state
// DESCRIPTION OF ANSWER: state includes the fields that are or will be included on the form. in this case, we want to know the the actual quote (called 'content' in this exercise) and the author of that quote. We set the initial state of those items as empty strings.
//CODE FOR ANSWER
  state = {
    content: '',
    author: ''
  }

//OBJECTIVE: Handle Updating Form Component State
//DESCRIPTION OF ANSWER: this method captures the form values as key/value pairs with the generic name, value properties  //how do we know what name is here? Couldn't we just do this? content:[event.target.value] and author: event.target.value or do we want to store the quote and author as one key/value pair
//CODE FOR ANSWER
  handleOnChange = event => {
    let {value, name} = event.target

    this.setState({
      [name]: value
    })
  }


//OBJECTIVE: Create callback for form submit
  handleOnSubmit = event => {
    // Handle Form Submit event default
    event.preventDefault()

    // Create quote object from state
    const quote = {...this.state, id: uuid()}

    // Pass quote object to action creator
    this.props.addQuote(quote)

    // Update component state to return to default state
    this.setState({
      content: '',
      author: ''
    })
  }

//render form with styling, remember: handleOnSubmit goes on form element not submit btn
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
                        className="form-control"
                        name="content"
                        value={this.state.content}
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        type="text"
                        name='author'
                        value={this.state.author}
                        onChange={this.handleOnChange}
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

//add arguments to connect as needed
export default connect(null, { addQuote })(QuoteForm);
