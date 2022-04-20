import React from 'react';
import { Link } from 'react-router-dom';
import Pic from '../../Images/FindJobs.png';
import Pictwo from '../../Images/interviewlogo.png';
import Circleone from '../../Images/Ellipse 2.png';
import Circletwo from '../../Images/Ellipse 3.png';
import Circlethree from '../../Images/Ellipse 4.png';
import './CompanyLogin.css';

export default function CompanyLoginPage() {
  return (
    <div className="whole-login-page">
      <div className="log-in-container">
        <div className="interview-section">
          <div className="company-logo">
            <div id="find-jobs"></div>
            <div id="for-employers">
              <img src={Pic} alt="logo" />
            </div>
          </div>
          <div className="interview-title">
            <h1>
              Find the best
              <br />
              candidates for your
              <br />
              organisation
            </h1>
          </div>
          <div className="interviewlogo">
            <img src={Pictwo} alt="logo" />
          </div>
        </div>
        <div className="login">
          <div class="circleflex">
            <div className="none"></div>
            <div className="circle-img">
              <div className="blue-circle">
                <img className="circle-one" src={Circleone} alt="circle" />
              </div>
              <div className="red-circle">
                <img className="circle-two" src={Circletwo} alt="circle" />
              </div>
              <div className="pink-circle">
                <img className="circle-three" src={Circlethree} alt="circle" />
              </div>
            </div>
          </div>{' '}
          <h1 className="login-title">Login</h1>
          <div id="email-section">
            <div id="e">
              <label className="email-label" for="email">
                Email
              </label>
            </div>
            <div id="e-input">
              <input className="Email" id="user-mail" type="text" />
            </div>
          </div>
          <div id="password-section">
            <div id="p">
              <label className="password-label" for password="password">
                Password
              </label>
            </div>
            <div id="p-input">
              <input className="Password" id="user-password" type="text" />
            </div>
          </div>
          <div className="login-signup">
            <Link to="/user">
              <button className="login-btn" type="button">
                Login
              </button>
            </Link>
            <p className="signup-txt">Don't have an account?</p>
            <Link to="/sign_up">
              <button className="signup-btn" type="button">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </div>{' '}
    </div>
  );
}
