import React from 'react';
import Footer from '../../User/Footer/Footer';
import { Link } from 'react-router-dom';
import './recuiterAndEmployer.css';

const LoginAndSignUp = () => {
  return (
    <>
      <div class="loginSignUpContainer">
        <div class="create-text">
          <h2>Create your Account</h2>
        </div>
        <div class="card-container">
          <div class="user-card">
            <i class="fa fa-user rAndE"></i>
            <h2>Job Seeker</h2>
            <p>
              Are you looking for your dream job?
              <br />
              Create a unique career profile with findJobs
            </p>
            <Link to="/sign_up">
              {' '}
              <input
                type="button"
                name="Jobseeker"
                value="FindJob seeker sign up"
                className="rAndE-button"
              />
            </Link>
          </div>
          <div class="employer-card">
            <i class="fa fa-briefcase rAndE"></i>
            <h2>Employer</h2>
            <p>
              Are you looking for quality candidates to employ?
              <br />
              Advertise and search with findJobs
            </p>
            <Link to="/user/employer">
              {' '}
              <input
                type="button"
                name="employer"
                value="Recuiter sign up"
                className="rAndE-button"
              />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LoginAndSignUp;
