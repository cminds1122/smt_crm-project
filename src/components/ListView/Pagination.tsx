import React, { useState, useEffect } from "react";
import "./Pagination.scss";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    generatePageNumbers();
  }, [currentPage, totalPages]);
  /* eslint-enable react-hooks/exhaustive-deps */


  const generatePageNumbers = () => {
    let pages = [];

    if (totalPages <= 5) {
      // Show all pages if totalPages <= 5
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // More complex logic for more pages
      if (currentPage <= 3) {
        pages = [1, 2, 3, 4, 5];
      } else if (currentPage > totalPages - 3) {
        pages = [
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        ];
      } else {
        pages = [
          currentPage - 2,
          currentPage - 1,
          currentPage,
          currentPage + 1,
          currentPage + 2,
        ];
      }
    }

    setPageNumbers(pages as number[]);
  };

  const handlePageClick = (page: number | string) => {
    if (typeof page === "number") {
      onPageChange(page);
    }
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };



  return (
    <div className="pagination">
      <span>
        Page {currentPage} of {totalPages}
      </span>

      <div>
        <div>
          {currentPage > 1 && (
            <button className="prev" onClick={handlePrevClick}>
              Previous
            </button>
          )}
          {pageNumbers.map((page, index) =>
            typeof page === "number" ? (
              <button
                key={index}
                className={`page ${currentPage === page ? "active" : ""}`}
                onClick={() => handlePageClick(page)}
              >
                {page}
              </button>
            ) : (
              <span key={index} className="ellipsis">
                {page}
              </span>
            )
          )}
          {currentPage < totalPages && (
            <button className="next" onClick={handleNextClick}>
              Next
            </button>
          )}
          <span></span>
        </div>
      </div>
      <span></span>
    </div>
  );
};

export default Pagination;
