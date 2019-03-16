import React, { Component } from "react";
import uuid from "uuid";
import { connect } from "react-redux";
import { addQuote } from "../actions/quotes";

class QuoteForm extends Component {
  state = {
    // id: "",
    content: "sample content",
    author: "sample author"
  };

  handleOnChange = event => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };

  handleOnSubmit = event => {
    const x = this
    event.preventDefault();
    const quote = {
      id: uuid(),
      content: this.state.content,
      author: this.state.author
    };
    this.props.addQuote(quote);
    this.setState({
      id: uuid(),
      content: "",
      author: ""
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form
                  className="form-horizontal"
                  onSubmit={this.handleOnSubmit}
                >
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">
                      Quote
                    </label>
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
                    <label htmlFor="author" className="col-md-4 control-label">
                      Author
                    </label>
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        type="text"
                        value={this.state.author}
                        name="author"
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">
                        Add
                      </button>
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
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    addQuote: () => {
      dispatch(addQuote())
    }
  };
};

export default connect(
  mapStateToProps,
  // mapDispatchToProps
  { addQuote }
)(QuoteForm);
