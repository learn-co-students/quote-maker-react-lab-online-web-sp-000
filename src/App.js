import React, { Component } from 'react';
import QuoteForm from './components/QuoteForm';
import Quotes from './containers/Quotes';

<<<<<<< HEAD
export class App extends Component {
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
=======
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
>>>>>>> 9bf9d8e9264df74816f0b5dc9bf6cfee5cabc62b
}

export default App;