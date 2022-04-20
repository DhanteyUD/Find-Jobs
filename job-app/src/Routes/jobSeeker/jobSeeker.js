import React from "react";
import "./jobSeeker.css";

const Recruiter = () => {
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
            />
          </div>
          {/*fname  */}
          <div id="lname">
            <input
              className="firstName"
              type="text"
              name="firstname"
              placeholder="Last Name"
            />
          </div>
          {/*lname  */}
          <div id="work-e">
            <input
              className="firstName"
              type="text"
              name="firstname"
              placeholder="Work email"
            />
          </div>
          {/*work-e  */}
          <div id="password">
            <input
              className="firstName"
              type="text"
              name="firstname"
              placeholder="Create password"
            />
          </div>
          {/*password  */}
          <div id="position">
            <div id="select-position">
              <label for="position">Position in company</label>
              <select id="position" name="position">
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
              <label for="Location">Phone number</label>
            </div>
            <div>
              <input className="location" type="text" />
            </div>
          </div>
          {/*phone  */}

          <div class="already-have-acct">
            <h4>
              Already have an account? <a href="#">Login</a>
            </h4>
          </div>
        </div>
        {/*form-first-section  */}
      </div>
      {/*form-container */}
    </div>
  );
};
export default Recruiter;
