import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {

  state = {
    //set up a controlled form with internal state
    content: '',
    author: ''
  }

  handleOnChange = event => {
   
    // Handle Updating Component State
    
    //       object literal {}
    //   destructuring passed in event object ^
    //    breaking out the target's name attr and input val    
    const { value, name } = event.target;
    //use [] to dynamically set name attr to inp val
    this.setState({
      [name]: value
    });
  }

  handleOnSubmit = event => {
    // alert('A quote was submitted! '
    //   + 'content: ' + this.state.content
    //   + ' author: ' + this.state.author)
      // Handle Form Submit event default
    event.preventDefault();
    // Create quote object from state
    const quote = { ...this.state, id: uuid() };
    // Pass quote object to action creator
    this.props.addQuote(quote);
    console.log(quote);
    // Update component state to return to default state
    this.setState({
      content: '',
      author: ''
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                {/* add form sub listener*/}
                <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        className="form-control"
                        value={this.state.content}
                        //add name attribute
                        name="content"
                        //add listener
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
                        value={this.state.author}
                        //add name attribute
                        name="author"
                        //add listener
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
