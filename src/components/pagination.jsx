import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="mt-4 flex justify-end">
      {pages.map((page) => (
        <button
          key={page}
          className={`mx-2 px-4 py-2 ${
            currentPage === page
              ? "bg-gray-600 text-white"
              : "bg-gray-800 text-gray-300"
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
