import React from "react";
import { PrimaryHeading } from "./index";

const Loader = ({
  svg,
  description,
  value,
  extraValue = "",
  unit,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col justify-center items-start gap-2 ${className}`}
    >
      {/* Displaying the SVG */}
      <div>{svg}</div>

      {/* Wrapper for value and unit */}
      <div className="flex justify-start items-center gap-2">
        {/* If PrimaryHeading is a styled <h3> or <h4>, it should be used appropriately */}
        <PrimaryHeading
          title={value}
          fontSize="16px"
          lineHeight="24px"
          fontWeight="bold"
        />
        <PrimaryHeading
          title={unit}
          fontSize="14px"
          lineHeight="21px"
          fontWeight="medium"
        />
      </div>

      {/* Description - Ensure that description is not rendered as a <p> if inside a heading */}
      <div>
        <PrimaryHeading
          title={description}
          fontSize="10px"
          lineHeight="18px"
          fontWeight="medium" // fixed typo 'mwdium' to 'medium'
          className="text-textSecondary"
        />
      </div>
    </div>
  );
};

export default Loader;
