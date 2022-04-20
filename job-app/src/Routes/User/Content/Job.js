import React, { useState } from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import Modal from './Modal';
import './Content.css';

export default function Job({ job }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <React.Fragment>
      <Card>
        <Card.Body>
          <div className="d-flex justify-content-between">
            <div>
              <Card.Title>{job.jobTitle}</Card.Title>
              <Card.Subtitle className="text-muted date">
                <i class="fa fa-lock" aria-hidden="true"></i>{' '}
                {new Date(job.submissionDeadline).toDateString()}
              </Card.Subtitle>
              <Card.Subtitle className="company">
                <i className="fa fa-building" aria-hidden="true"></i>{' '}
                {job.companyName}
              </Card.Subtitle>
              <Card.Subtitle className="location">
                <i className="fa fa-map-marker" aria-hidden="true"></i>{' '}
                {job.location}
              </Card.Subtitle>
              <Badge bg="secondary">{job.sector}</Badge>
              <Badge bg="primary">{job.employmentType}</Badge>
              <Badge bg="success">{job.language}</Badge>
              <div style={{ wordBreak: 'break-all' }}>
                <Card.Link href={job.link}>{job.link}</Card.Link>
              </div>
            </div>
            <span className="text-muted price">{job.salary}</span>
          </div>
          <Card.Text>
            <Button
              className="btn-menu"
              onClick={() => setOpenModal((prevOpen) => !prevOpen)}
            >
              {openModal ? 'Close' : 'See More'}
            </Button>
          </Card.Text>
          <div>
            <ReactMarkdown source={job.description} />
          </div>
        </Card.Body>
      </Card>
      {openModal && <Modal closeModal={setOpenModal} key={job.id} job={job} />}
    </React.Fragment>
  );
}
