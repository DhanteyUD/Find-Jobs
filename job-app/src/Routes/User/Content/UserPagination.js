import React from 'react';
import { Pagination } from 'react-bootstrap';
import './Content.css';

export default function UserPagination({ page, setPage, hasNextPage }) {
  function adjustPage(amount) {
    setPage((prevPage) => prevPage + amount);
  }

  return (
    <div className="page">
      <Pagination>
        {page !== 1 && <Pagination.Prev onClick={() => adjustPage(-1)} />}
        {page !== 1 && (
          <Pagination.Item onClick={() => setPage(1)}>1</Pagination.Item>
        )}
        {page > 2 && <Pagination.Ellipsis />}
        {page > 2 && (
          <Pagination.Item onClick={() => adjustPage(-1)}>
            {page - 1}
          </Pagination.Item>
        )}
        <Pagination.Item active>{page}</Pagination.Item>
        {hasNextPage && (
          <Pagination.Item onClick={() => adjustPage(1)}>
            {page + 1}
          </Pagination.Item>
        )}
        {hasNextPage && <Pagination.Next onClick={() => adjustPage(1)} />}
      </Pagination>
    </div>
  );
}
