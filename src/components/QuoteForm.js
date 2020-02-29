import React from "react";
import { connect } from "react-redux";
import { addQuote } from "../actions/quotes";
import uuid from "uuid";

class QuoteForm extends React.Component {

	state = {
		content: "",
		author: ""
	}

	handleOnChange = event => {
		this.setState({[event.target.name]: event.target.value})
	}

	handleOnSubmit = event => {
		const quote = {id: uuid(), ...this.state}

		event.preventDefault();
		this.props.addQuote(quote);
		this.setState({
			content: "",
			author: ""
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
												name="content"
												onChange={this.handleOnChange}
												value={this.state.content} />
										</div>
									</div>
									<div className="form-group">
										<label htmlFor="author" className="col-md-4 control-label">Author</label>
										<div className="col-md-5">
											<input
												className="form-control"
												type="text"
												name="author"
												onChange={this.handleOnChange}
												value={this.state.author} />
										</div>
									</div>
									<div className="form-group">
										<div className="col-md-6 col-md-offset-4">
											<button type="submit" className="btn btn-secondary">Add</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}

}

export default connect(null, ({ addQuote }))(QuoteForm)
