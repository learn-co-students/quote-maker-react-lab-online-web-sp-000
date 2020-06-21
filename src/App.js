import React, { Component } from 'react';
// imported QuoteForm and Quotes to be used in this App component 
import QuoteForm from './components/QuoteForm'
import Quotes from './containers/Quotes'

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row title justify-content-center" style={{ paddingTop: '12px' }}>
          <h1>Quote Maker</h1>
        </div>
        <hr />
        <QuoteForm />
        <Quotes />
      </div>
    );
  }
}

export default App;
