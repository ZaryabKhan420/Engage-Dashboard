"use client";

import React, { useState, useRef, useEffect } from "react";

function Select({ options, className }) {
  const [selected, setSelected] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  // Create a reference to the dropdown container
  const dropdownRef = useRef(null);

  // Close the dropdown if the user clicks outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Add event listener on mount
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative w-fit text-[14px] leading-[18px]"
    >
      {/* Dropdown Toggle */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setIsOpen(false)}
        className={`p-3 border border-slate-200 rounded-lg cursor-pointer text-gray-700 flex items-center justify-between ${className}`}
      >
        <h1 className="mr-2">{selected ? selected : options[0]} </h1>
        <svg
          width="8"
          height="6"
          viewBox="0 0 8 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 1.5L4 4.5L1 1.5"
            stroke="#333333"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute top-full right-0 mt-1 w-[160px] border border-gray-300 bg-white rounded-lg shadow-lg">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
              className="p-3 hover:bg-gray-200 cursor-pointer flex items-center gap-2"
            >
              {/* Radio Button */}
              <input
                type="radio"
                id={option}
                name="custom-radio"
                value={option}
                checked={selected === option}
                onChange={() => setSelected(option)}
                className="mr-2 cursor-pointer accent-blue-500"
              />
              <label htmlFor={option} className="cursor-pointer text-gray-700">
                {option}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Select;
