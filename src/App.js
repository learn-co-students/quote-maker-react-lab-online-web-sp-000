import React from "react";
import Quotes from "./containers/Quotes";
import QuoteForm from "./components/QuoteForm";

class App extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row title justify-content-center" style={{ paddingTop: "12px" }}>
					<h1>Quote Maker</h1>
				</div>
				<hr />
				<QuoteForm />
				<Quotes />
			</div>
		)
	}
}

export default App
