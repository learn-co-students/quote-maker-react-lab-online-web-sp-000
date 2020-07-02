import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

const QUOTE_FIELD_NAME = "content"
const AUTHOR_FIELD_NAME = "author"

class QuoteForm extends Component {
  
  state = {
    [QUOTE_FIELD_NAME]: "",
    [AUTHOR_FIELD_NAME]: "",
    votes: 0,
    id: uuid()
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    // Handle Form Submit event default
    // Create quote object from state
    // Pass quote object to action creator
    // Update component state to return to default state
    event.preventDefault()

    let formData = Object.assign({}, this.state)
    this.props.addQuote(formData)
    this.setState({
      [QUOTE_FIELD_NAME]: "",
      [AUTHOR_FIELD_NAME]: "",
      votes: 0,
      id: uuid()
    })
    
  }

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
                        name={QUOTE_FIELD_NAME}
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
                        name = {AUTHOR_FIELD_NAME}
                        type="text"
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

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    addQuote: quoteObject => { dispatch(addQuote(quoteObject)) }
  }
}

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(QuoteForm);
