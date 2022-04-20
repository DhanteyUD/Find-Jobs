import React from 'react';
// import logo from '../../Image/logo.svg';
const Footer = () => {
  return (
    <div class="footer">
      <div class="footer">
        <div class="footer-text">
          <img
            class="findjobs"
            // src={logo}
            style={{ width: '5rem' }}
            alt="logo"
          />
          <i class="fa-solid fa-copyright">2021</i>
          <p class="findJobsText">findJobs</p>
          <p class="Terms-condition">T&C</p>
        </div>
        <div className="footer-icons">
          <i class="fa-brands fa-instagram-square"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-facebook-f"></i>
        </div>
      </div>
    </div>
  );
};
export default Footer;
