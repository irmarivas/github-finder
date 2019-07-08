import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/user/Users';
import Search from './components/user/Search';


const { CLIENT_ID, CLIENT_SECRET } = process.env;

class App extends Component {
  state = {
    users: [],
    isLoading: false

  }
  constructor() {
    super();
  }

  render(){

    const { isLoading, users } = this.state;

    return (
      <div className="App">
        <Navbar title={'Github Finder'} iconClass={"fab fa-github"} whatever={"navbar bg-primary"}/>
        <div className="container">
          <Search searchUsers={this.searchUsers} />
          <Users isLoading={isLoading} users={users} />
        </div>
      </div>
    );
  }

  fetchUsers = async searchText => {
    this.setState(
      {
        isLoading: true 
      }
    );

    const url = `https://api.github.com/search/users?q=${searchText}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    const data =await fetch(url);
    const res = await data.json();
    const users = res.items;
    
    this.setState(
      {
        users: users,
        isLoading: false
      }
    );
  }

  searchUsers = async searchText => {
    this.fetchUsers(searchText);

  }

}

export default App;
