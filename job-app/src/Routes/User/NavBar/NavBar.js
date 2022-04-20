import React, { Component } from 'react';
import { Button } from './Button';
import { MenuItems } from './MenuItems';
import './NavBar.css';
import logo from '../logo/FindJobs.svg';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <img className="logo" src={logo} alt="logo" />
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fa fa-times' : 'fa fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.className} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <Link to="/user/post_job">
          <Button>Post Job</Button>
        </Link>
      </nav>
    );
  }
}

export default NavBar;
