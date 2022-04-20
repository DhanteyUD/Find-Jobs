import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Image/logo.svg';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-text">
        <img
          className="findjobs"
          src={logo}
          style={{ width: '5rem' }}
          alt="logo"
        />
        <h1 className="copyright">
          <i className="fa fa-copyright" aria-hidden="true"></i>2022
        </h1>
        <p className="findJobsText">FindJobs</p>
        <p className="Terms-condition">T&C</p>
        <Link className="sign-out" to="/">
          <p>
            Sign out <i class="fa fa-sign-out" aria-hidden="true"></i>
          </p>
        </Link>
        <Link className="admin-link" to="/user/R_and_E">
          <p>
            Recruiter / Employer{' '}
            <i class="fa fa-briefcase" aria-hidden="true"></i>
          </p>
        </Link>
      </div>
      <div className="footer-icons">
        <i class="fa fa-instagram" aria-hidden="true"></i>
        <i className="fa fa-twitter"></i>
        <i className="fa fa-facebook"></i>
      </div>
    </div>
  );
}
