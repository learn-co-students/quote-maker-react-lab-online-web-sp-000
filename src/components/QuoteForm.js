import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {

  state = {
    //? set up a controlled form with internal state
    content: "",
    author: "",
    id: ""
  }


  handleOnChange = event => {
    // Handle Updating Component State
    const target = event.target
    const value = target.value 
    const name = target.name 
    this.setState({
      [name]: value 
    });
  }

  handleOnSubmit = event => {
    //? Handle Form Submit event default
    event.preventDefault();

    //? Create quote object from state
    let newQuote = {};
    newQuote.content = this.state.content;
    newQuote.author = this.state.author;
    newQuote.id = uuid();
    console.log('newQuote', newQuote);
    //? Pass quote object to action creator
    this.props.addQuote(newQuote)

    //? Update component state to return to default state
    this.setState({
      content: "",
      author: "",
      id: ""    
    })
    console.log(this.state)
  }

  render() {
    console.log('in QuoteForm render, this.props', this.props.props) //! whyyyyy are my props nested under props???
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
                        name="content"
                        onChange={(event) => this.handleOnChange(event)}
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
                        onChange={(event) => this.handleOnChange(event)}
                        className="form-control"
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
  };

};



const mapStateToProps = (state) => {
  console.log('in mapStateToProps, state', state)
  return {
    quotes: state.quotes
  };
};

//add arguments to connect as needed
//export default connect()(QuoteForm);
export default connect(mapStateToProps, {addQuote})(QuoteForm);