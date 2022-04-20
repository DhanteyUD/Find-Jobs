import React, { useState } from 'react';
import axios from 'axios';
import './JobCreationForm.css';
import { Link } from 'react-router-dom';

function JobApplications() {

  const getTitle = (e) => {
    setJobTitle(e.target.value);
  };

  const getCompany = (e) => {
    setCompany(e.target.value);
  };

  const getLocation = (e) => {
    setLocation(e.target.value);
  };

  const getSalary = (e) => {
    setSalary(e.target.value);
  };

  const getEmployType = (e) => {
    setEmployer(e.target.value);
  };

  const getDate = (e) => {
    setDate(e.target.value);
  };

  const getCategory = (e) => {
    setCategory(e.target.value);
  };

  const getDesc = (e) => {
    setDesc(e.target.value);
  };

  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [Salary, setSalary] = useState('');
  const [employer, setEmployer] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3200/postJobs/postjobs', data)
    .then((info) => {
      console.log(info.data);
    });
  };

  const data = {
    jobTitle,
    companyName: company,
    location: location,
    employmentType: employer,
    salary: Salary,
    submissionDeadline: date,
    sector: category,
    description: description,
  };

  return (
    
    <div className="post-job-container">
      <form onSubmit={handleSubmit} className="post-job-Form">
        <div className="form-delete">
          <Link to="../user">
            <i class="fa fa-times" aria-hidden="true"></i>
          </Link>
        </div>
        <div className="post-job-header">
          <h1 className="post-job-title">New Job</h1>
          <p>
            Kindly provide the required information to get matched with suitable
            candidates
          </p>
        </div>
        <label className="job-title" for="Job Title">
          Job Title
        </label>
        <input
          className="job-input job-title-input"
          value={jobTitle}
          type="text"
          onChange={getTitle}
        />

        <label className="job-title" for="Company Name">
          Company Name
        </label>
        <input
          className="job-input company-name-input"
          type="text"
          value={company}
          onChange={getCompany}
        />

        <label className="job-title" for="Job Location">
          Location
        </label>
        <input
          className="job-input job-location-input"
          type="text"
          onChange={getLocation}
        />

        <label className="job-title" for="Job Type">
          What type of employement is it?
        </label>
        <select
          className="job-input-select"
          name="category"
          id="employment"
          onChange={getEmployType}
        >
          <option value="Empty">Select option</option>
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
          <option value="Remote">Remote</option>
          <option value="Contract">Contract</option>
        </select>

        <label className="job-title" for="Salary range">
          Salary range
        </label>
        <input
          className="job-input job-salary-input"
          type="number"
          onChange={getSalary}
        />

        <label className="job-title" for="Submission deadline">
          Submission deadline
        </label>
        <input
          className="job-input job-deadline-input"
          type="date"
          onChange={getDate}
        />

        <label className="job-title" for="Job Category">
          What Sector is this job categorized under?
        </label>
        <select
          className="job-input-select"
          name="category"
          id="employment"
          onChange={getCategory}
        >
          <option value="Empty">Select option</option>
          <option value="Advertising and marketing">
            Advertising and marketing
          </option>
          <option value="Aerospace">Aerospace</option>
          <option value="Agriculture">Agriculture</option>
          <option value="Computer and technology">
            Computer and technology
          </option>
          <option value="Construction">Construction</option>
          <option value="Education">Education</option>
          <option value="Energy">Energy</option>
          <option value="Fashion">Fashion</option>
          <option value="Finance and economic">Finance and economic</option>
          <option value="Food and beverage">Food and beverage</option>
          <option value="Health care">Health care</option>
          <option value="Hospitality">Hospitality</option>
          <option value="Manufacturing">Manufacturing</option>
          <option value="Media and news">Media and news</option>
          <option value="Mining">Mining</option>
          <option value="Pharmaceutical">Pharmaceutical</option>
          <option value="Telecommunication">Telecommunication</option>
          <option value="Transportation">Transportation</option>
        </select>

        <label for="Submission deadline">Job Description</label>
        <br />
        <textarea
          className="phoneNumber textarea"
          type="text"
          style={{ width: '100%', height: '30%' }}
          onChange={getDesc}
        />
        <input
          className="post-job-btn"
          type="submit"
          value="Submit Application"
        />
      </form>
    </div>
  );
}

export default JobApplications;
