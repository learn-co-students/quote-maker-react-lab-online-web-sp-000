import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';
import { bindActionCreators } from 'redux';



/*
Our Quote form will have a textarea for a quotes content and an input for a quotes author. 
We will be using component state for updating the inputs so make sure to have a state of 
  { content: '', author: '' } in your QuoteForm constructor. 
You will make a dispatch action to Redux using an action you will create called addQuote() 
that will take a quote as an argument and start the reducer process.
*/
export class QuoteForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      content: '',
      author: ''
    }
  }
 
  handleOnChange = event => {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: target.value
    })
  }

 

  handleOnSubmit = event => {
    event.preventDefault()
    let newQuote = {...this.state, id: uuid(), votes: 0}
    this.props.addQuote(newQuote)
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
                <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        className="form-control"
                        value={this.state.content}
                        onChange={this.handleOnChange} 
                        name="content"
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
                        onChange={this.handleOnChange} 
                        name="author"
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addQuote: addQuote
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(QuoteForm);
