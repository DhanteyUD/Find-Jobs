import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Img from "../../Images/upload icon.png";
import "./ApplicationForm.css";

const ApplicationForm = () => {
  
  const getFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const getLastName = (e) => {
    setLastName(e.target.value);
  };

  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  const getLocation = (e) => {
    setLocation(e.target.value);
  };

  const getPhone = (e) => {
    setPhone(e.target.value);
  };

  const getCv = (e) => {
    setCv(e.target.value);
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [cv, setCv] = useState("");

  const data1 = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    location: location,
    phoneNumber: phone,
    uploadCv: cv,
  };

  const handleSubmits = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3200/postJobs/jobs", data1).then((users) => {
      console.log(users.data);
    });
  };

  return (
    <div className="apply-job-container">
      <form onSubmit={handleSubmits} className="apply-job-Form">
        <div className="form-delete">
          <Link to="../user">
            <i class="fa fa-times" aria-hidden="true"></i>
          </Link>
        </div>

        <div className="apply-form-header">
          <h1 className="apply-title">Front End Developer</h1>
          <p>
            <i class="fa fa-map-marker"></i>Alausa, Lagos
          </p>
        </div>

        <label className="label" for="Last Name">
          First Name
        </label>
        <input
          className="firstName applicationInput"
          type="text"
          onChange={getFirstName}
        />

        <label className="label" for="Last Name">
          Last Name
        </label>
        <input
          className="lastName applicationInput"
          type="text"
          onChange={getLastName}
        />

        <label className="label" for="Email">
          Email Address
        </label>
        <input
          className="email applicationInput"
          type="email"
          onChange={getEmail}
        />

        <label className="label" for="Location">
          Location
        </label>
        <input
          className="location applicationInput"
          type="text"
          onChange={getLocation}
        />

        <label className="label" for="Phone Number">
          Phone Number
        </label>
        <input
          className="phoneNumber applicationInput"
          type="tel"
          onChange={getPhone}
        />

        <div className="upload">
          <img src={Img} alt="upload image"></img>

          <p className="cv-content">Drag and drop your CV here</p>

          <p className="cv-option">or</p>
          <input className="cv-upload" type="file" onChange={getCv} />
          <br />
          <br />

          <input
            className="Application-btn"
            type="submit"
            value="Submit Application"
          />
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
