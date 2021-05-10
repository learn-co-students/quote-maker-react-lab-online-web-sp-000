import React, { Component } from 'react';
import QuoteForm from './components/QuoteForm.js';
import Quotes from './containers/Quotes.js';
// import ErrorBoundary from './error_boundary/error_boundary.js'

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row title justify-content-center" style={{ paddingTop: '12px' }}>
          <h1>Quote Maker</h1>
        </div>
        <hr />
        {/* <ErrorBoundary> */}
          <QuoteForm />
        {/* </ErrorBoundary> */}

        {/* <ErrorBoundary> */}
        <Quotes />
        {/* </ErrorBoundary> */}
        {/*
          TODO:

          Render QuoteForm and Quotes Components
         */}
      </div>
    );
  }
}

export default App;
