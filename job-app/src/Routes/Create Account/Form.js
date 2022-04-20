import React from 'react';
import './Form.css';
import { Link } from 'react-router-dom';

const Form = () => {
  return (
    <div className="seeker-container">
      <div className="header-text">
        <h2>Create a Job Seeker Account </h2>
        <p>Your new career is one click away</p>
      </div>
      <div className="contact-form-card">
        <div className="personalDetails">
          <h3>Personal Information</h3>
          <p>personal details pertaining to your personal account</p>
        </div>
        <div className="form-group">
          <form action="https://">
            <div>
              <label className="forms">
                <input
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  className="seeker-input seeker-firstname"
                  // onChange={nameChange}
                />
              </label>
              <label>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  className="seeker-input seeker-lastname"
                />
              </label>
            </div>
            <div>
              <label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="seeker-input seeker-email"
                />
              </label>
              <label>
                <input
                  type="password"
                  name=""
                  placeholder="Password"
                  className="seeker-input seeker-password"
                />
              </label>
            </div>
            <div>
              <label class="">
                <input
                  className="seeker-input seeker-date"
                  type="date"
                  id="start"
                  name="trip-start"
                  min="2022-04-01"
                  max="2031-12-31"
                />
              </label>
              <label className="country">
                <input
                  type="text"
                  placeholder="Country"
                  className="seeker-input seeker-country"
                />
              </label>
            </div>
            <div>
              <label>
                <input
                  type="gender"
                  placeholder="Gender"
                  className="seeker-input seeker-gender"
                />
              </label>
              <label>
                <input
                  className="seeker-input seeker-phone-number"
                  type="number"
                  placeholder="Phone-number"
                />
              </label>
            </div>
            <div>
              <label>
                <input
                  type="text"
                  placeholder="Availabiity"
                  className="seeker-input seeker-availability"
                />
              </label>
            </div>
            <Link to="/">
              <label>
                <input type="button" value="Save" className="seeker-button" />
              </label>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
