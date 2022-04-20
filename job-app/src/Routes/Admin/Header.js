// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from '../../Images/FindJobs.png';
import logo2 from '../../Images/upload icon.png';
// import circle from './image/circle.svg'

// import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {
  return (
    <div class="headerContainer">
      <div class="headerComponent">
        <div class="navBar">
          <div class="images">
            <img src={logo} style={{ width: '5rem' }} alt="logo" />
            <img
              class="employer"
              src={logo2}
              style={{ width: '5rem' }}
              alt="logo"
            />
          </div>
          <div class="leftNav">
            <i class="fa-solid fa-bell"></i>
            <i class="fa-thin fa-circle-dashed"></i>
            {/* <img class="navCircle" src={circle} style={{ width: "5rem" }} alt="logo" /> */}
          </div>
        </div>
        <div>
          <h2 class="jobs">Jobs</h2>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
