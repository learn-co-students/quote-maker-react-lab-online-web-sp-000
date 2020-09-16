import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {

  state = {
    //set up a controlled form with internal state
  
    content: "",
    author:""
  }

  handleOnChange = event => {
    // Handle Updating Component State
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const quote = {}
    this.props.addQuote({type:'ADD_QUOTE', user: this.state})
    this.setState({
      content: "",
      author: ""
    })
    // Handle Form Submit event default
    // Create quote object from state
    // Pass quote object to action creator
    // Update component state to return to default state
  }

  render() {
    console.log("props", this.props)
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
                      <textarea name="content"
                        className="form-control"
                        value={this.state.content} onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                    
                      <input name="author" className="form-control" type="text" value={this.state.author} onChange={this.handleOnChange}/>
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


const mapStateToProps = (state) => {
  return {
   
  quotes: state.quotes
  
  }
}


// const mapDispatchToProps = (dispatch) => {
//   return {
//     addQuote:(quote) => {
//       dispatch(addQuote(quote))
//     }
//   }
// }



//add arguments to connect as needed
export default connect(mapStateToProps, {addQuote})(QuoteForm);
