import React from "react";

const SearchBar = ({ onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="w-full p-2 rounded-lg border border-slate-200 flex justify-start items-center gap-2">
      <button
        type="button"
        aria-label="Search"
        className="flex items-center justify-center"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.0205 13.1878L15.5892 15.75M8.7243 2.25C12.2111 2.25 15.0374 5.07635 15.0374 8.56312C15.0374 12.0499 12.2111 14.877 8.7243 14.877C5.23749 14.877 2.41113 12.0499 2.41113 8.56312C2.41113 5.07635 5.23749 2.25 8.7243 2.25Z"
            stroke="#B3B3B3"
            strokeWidth="1.125"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.99899 5.05566C11.0476 5.37457 11.8767 6.19044 12.2131 7.23034"
            stroke="#B3B3B3"
            strokeWidth="1.125"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <input
        type="input"
        placeholder="Search by Name, Mobile number"
        className="w-full text-xs p-1 outline-none border-none"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
