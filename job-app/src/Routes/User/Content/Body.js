import React, { useState } from 'react';
import useGetJobs from '../../../useGetJobs';
import { Container } from 'react-bootstrap';
import Job from './Job';
import './Content.css';
import UserPagination from './UserPagination';
import SearchForm from './SearchForm';

function Body() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = useGetJobs(params, page);

  function handleParamChange(e) {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams((prevParams) => {
      return { ...prevParams, [param]: value };
    });
  }

  return (
    <React.Fragment>
      <SearchForm params={params} onParamChange={handleParamChange} />
      <Container>
        <UserPagination
          page={page}
          setPage={setPage}
          hasNextPage={hasNextPage}
        />
        {loading && <h1 className="loading-page">Loading...</h1>}
        {error && (
          <h1 className="error">
            Error :-( <br />
            Please refresh page
          </h1>
        )}
        {jobs.map((job) => {
          return <Job key={job.id} job={job} />;
        })}
        <UserPagination
          page={page}
          setPage={setPage}
          hasNextPage={hasNextPage}
        />
      </Container>
    </React.Fragment>
  );
}

export default Body;
