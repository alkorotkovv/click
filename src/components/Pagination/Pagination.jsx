import React, { useState } from 'react';
import "./Pagination"

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const pages = [...Array(10)].map((_, i) => i + 1);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {pages.map((page) => (
        <button key={page} onClick={() => handlePageClick(page)}>
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;