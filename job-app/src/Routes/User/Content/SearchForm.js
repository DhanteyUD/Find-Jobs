import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import './Content.css';

export default function SearchForm({ params, onParamChange }) {
  return (
    <Form className="form">
      <Row>
        <Col className="title-form">
          <i className="fa fa-search form-search-icon"></i>
          <Form.Control
            className="title-input"
            placeholder="job title, keywords or company"
            onChange={onParamChange}
            value={params.title}
            name="title"
            type="text"
          />
        </Col>

        <Col className="location-form">
          <i className="fa fa-map-marker form-marker-icon"></i>
          <Form.Control
            className="location-input"
            placeholder="city or state"
            onChange={onParamChange}
            value={params.location}
            name="location"
            type="text"
          />
          <button className="form-button">Search</button>
        </Col>
      </Row>
    </Form>
  );
}
