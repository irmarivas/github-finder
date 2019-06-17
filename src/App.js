import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/user/Users';

class App extends Component {

  constructor() {
    super();
    console.log('CONSTRUCTOR IS CALLED or EXECUTED or INVOKED');
  }

  render(){

    return (
      <div className="App">
        <Navbar title={'Github Finder'} iconClass={"fab fa-github"} whatever={"navbar bg-primary"}/>
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
