import React, { useState } from 'react';
import axios from 'axios';

import './Employerstyle.css';

const Employer = () => {
  const fNameChange = (e) => {
    setFName(e.target.value);
  };

  const lNameChange = (e) => {
    setLName(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const getPositionType = (e) => {
    setPosition(e.target.value);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const telChange = (e) => {
    setTel(e.target.value);
  };

  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [password, setPassword] = useState('');
  const [posType, setPosition] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');

  let data3 = {
    firstName: fName,
    lastName: lName,
    workEmail: password,
    createPassword: posType,
    position: email,
    phoneNumber: tel,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3200/postJobs/employer-sign-up', data3)
      .then((info) => {
        console.log(info.data);
      });
  };

  return (
    <div className="employer-entire-page">
      <div className="form-title">
        <div id="title">
          <h1>Create an employer account</h1>
        </div>
        <div id="title-paragraph">
          <h4>Reach top talent and find the right candidate today!</h4>
        </div>
      </div>
      {/*form-title  */}
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <div className="aside">
            <h1>Company representative</h1>
            <p>
              This information is partaining to you as
              <br /> a representative of the company
            </p>
          </div>
          {/*aside  */}

          <div className="form-first-section">
            <div id="fname">
              <input
                className="firstName"
                type="text"
                name="firstname"
                placeholder="First Name"
                onChange={fNameChange}
              />
            </div>
            {/*fname  */}
            <div id="lname">
              <input
                className="firstName"
                type="text"
                name="firstname"
                placeholder="Last Name"
                onChange={lNameChange}
              />
            </div>
            {/*lname  */}
            <div id="work-e">
              <input
                className="firstName"
                type="text"
                name="firstname"
                placeholder="Work email"
                onChange={emailChange}
              />
            </div>
            {/*work-e  */}
            <div id="password">
              <input
                className="firstName"
                type="text"
                name="firstname"
                placeholder="Create password"
                onChange={passwordChange}
              />
            </div>
            {/*password  */}
            <div id="position">
              <div id="select-position">
                <label for="position">Position in company</label>
                <select
                  id="position"
                  name="position"
                  onChange={getPositionType}
                >
                  <option value="select-position">Select position</option>
                  <option value="director">Director</option>
                  <option value="ceo">CEO</option>
                  <option value="manager">Manager</option>
                  <option value="marketer">Marketer</option>
                </select>
              </div>
            </div>
            {/*position  */}
            <div id="phone">
              <div id="number">
                <label for="number">Phone number</label>
              </div>
              <div>
                <input className="location" type="tel" onChange={telChange} />
              </div>
            </div>
            {/*phone  */}

            <div class="already-have-acct">
              <h4>
                Already have an account? <a href="/">Login</a>
              </h4>
            </div>
          </div>
          {/*form-first-section  */}
        </div>
        {/*form-container */}
      </form>
    </div>
  );
};
export default Employer;
