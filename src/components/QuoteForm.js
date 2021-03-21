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
   //  event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
       [name]: value
    });
  }

  handleOnSubmit = event => {
    // Handle Form Submit event default
    // Create quote object from state
    // Pass quote object to action creator
    // Update component state to return to default state
    event.preventDefault();
    this.props.addQuote(this.state);
    this.setState({
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
                <form className="form-horizontal" onSubmit={event => this.handleOnSubmit(event)}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        className="form-control"
                        name="content"
                        onChange={this.handleOnChange}
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
                        onChange={this.handleOnChange}
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
                  {this.state.content}
                  {this.state.author}
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
      addQuote: quoteFormData => 
         dispatch(addQuote(quoteFormData))
   }
}

//add arguments to connect as needed
export default connect(null, mapDispatchToProps)(QuoteForm);
