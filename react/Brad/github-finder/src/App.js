import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import UserItem from './components/layout/users/UserItem';

class App extends Component {


  render() {


    return (
      <>
        <Navbar />
        <UserItem />
        <UserItem />
        <UserItem />
      </>
    );
  }

}

export default App;
