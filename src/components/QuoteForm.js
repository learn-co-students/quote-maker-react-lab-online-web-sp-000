import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';


class QuoteForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      content: '',
      author: ''
    }
  }


  state = {
    content: '',
    author: ''
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };




  handleOnSubmit = event => {
    event.preventDefault();
//Pass quote object to action controller
    const quote ={
      author: this.state.author,
      content: this.state.content,
      id: uuid(),
      votes: 0
  };
  //pass quote object to action creator
    this.props.addQuote(quote)
    //update component state to return to default state
      this.setState({
        content: '',
        author: ''
  })
}



// this.props.addQuote(quote)

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={(event) => this.handleOnSubmit(event)}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">

                      <textarea
                        onChange={this.handleOnChange}
                        className="form-control"
                        value={this.state.content}
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
                    {this.state.content}
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
    addQuote: (quote) => { dispatch(addQuote(quote)) }
  }
}



export default connect(null, mapDispatchToProps)(QuoteForm);
