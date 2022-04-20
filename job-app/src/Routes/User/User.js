import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import Header from './Header/Header';
import Body from './Content/Body';
import Footer from './Footer/Footer';
import './User.css';

class User extends Component {
  render() {
    return (
      <div className="User">
        <NavBar />
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default User;
