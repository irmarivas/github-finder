import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/user/Users';
import Search from './components/user/Search';


const { CLIENT_ID, CLIENT_SECRET } = process.env;

class App extends Component {
  state = {
    users: [],
    isLoading: true

  }
  constructor() {
    super();
    console.log('CONSTRUCTOR IS CALLED or EXECUTED or INVOKED');
  }

  render(){

    const { isLoading, users } = this.state;

    return (
      <div className="App">
        <Navbar title={'Github Finder'} iconClass={"fab fa-github"} whatever={"navbar bg-primary"}/>
        <div className="container">
          <Search />
          <Users isLoading={isLoading} users={users} />
        </div>
      </div>
    );
  }

  componentDidMount(){
    console.log('COMPONENT MOUNTED SUCCESSFULLY');
    console.log('MAKE REQUESTS HERE');
    this.fetchUsers();
  }

  fetchUsers = async () => {
    this.setState(
      {
        isLoading: true 
      }
    );

    const url = `https://api.github.com/users?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    const data = await fetch(url);
    const users = await data.json();
    
    this.setState(
      {
        users: users,
        isLoading: false
      }
    );

    console.log(users);
  }

  }

export default App;
