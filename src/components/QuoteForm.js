import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {
   // 4) always renders a textarea[name="content"] tag for quote content
   // 5) always renders a input[name="author"] tag for quote author
   // 6) should control its inputs based on internal state
   // 7) should handleOnSubmit and preventDefault()
   // 8) should reset state after form handleOnSubmit
   // 9) should modify the store on handleOnSubmit

  state = {
    //set up a controlled form with internal state
    content: '',
    author: ''
  }

  handleOnChange = event => {
    // Handle Updating Component State
    let contentInput, authorInput
    if (event.target.name === "content") {
       contentInput = event.target.value;
    } else {
       authorInput = event.target.value;
    }
    this.setState({
       content: contentInput,
       author: authorInput
    })
  }

  handleOnSubmit = event => {
    // Handle Form Submit event default
    // Create quote object from state
    // Pass quote object to action creator
    // Update component state to return to default state
    event.preventDefault();
    this.props.addQuote(this.state);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal">
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        className="form-control"
                        name="content"
                        onChange={event => this.handleOnChange(event)}
                        value={this.state.content}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        name="author"
                        onChange={event => this.handleOnChange(event)}
                        type="text"
                        value={this.state.author}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default" onSubmit={this.handleOnSubmit}>Add</button>
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

// create map dispatch to props and connect  it
const mapDispatchToProps = (dispatch) => {
   // return an object calling dispatch addQuote as argument
   return {
      addQuote: () => dispatch(addQuote())
   }
}

//add arguments to connect as needed
export default connect(null, mapDispatchToProps)(QuoteForm);
