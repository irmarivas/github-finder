import React, { Component } from 'react';
import './App.css';

class App extends Component {
  lastName = () => {
    return `Rivas`;
  }
  render(){
    const name = 'Irma';

    return (
      <div className="App">
        <h1>
            Hello {name} {this.lastName()}
        </h1>
      </div>
    );
  }
}

export default App;
