import React, { Component } from 'react';
import Quotes from '../src/containers/Quotes';
import QuoteForm from '../src/components/QuoteForm';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row title justify-content-center" style={{ paddingTop: '12px' }}>
          <h1>Quote Maker</h1>
        </div>
        <hr />
        <QuoteForm></QuoteForm>
        <Quotes></Quotes>
      </div>
    );
  }
}

export default App;
