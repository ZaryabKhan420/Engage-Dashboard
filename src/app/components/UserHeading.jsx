import React from "react";
import PrimaryHeading from "./PrimaryHeading";

const UserHeading = () => {
  return (
    <div className="flex justify-start items-center gap-3">
      <img src="Star.png" alt="User Star Icon" />
      <div>
        <PrimaryHeading
          title="Liam Dawett"
          fontWeight="medium" // Fixed typo here: 'fontWeight' instead of 'fontWight'
          fontSize="14px"
          lineHeight="21px"
        />
        <div className="flex justify-start items-center gap-3 bg-[#F8F9FC] py-1 px-2 rounded-lg">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.45245 7.35325C9.30137 7.49967 9.23195 7.71142 9.26637 7.91909L9.78495 10.7891C9.8287 11.0323 9.72604 11.2785 9.52245 11.4191C9.32295 11.5649 9.05754 11.5824 8.83995 11.4658L6.25637 10.1183C6.16654 10.0704 6.06679 10.0448 5.9647 10.0418H5.80662C5.75179 10.05 5.69812 10.0675 5.64912 10.0943L3.06495 11.4483C2.9372 11.5124 2.79254 11.5352 2.65079 11.5124C2.30545 11.4471 2.07504 11.1181 2.13162 10.771L2.65079 7.901C2.6852 7.69159 2.61579 7.47867 2.4647 7.32992L0.358287 5.28825C0.18212 5.11733 0.12087 4.86067 0.20137 4.62909C0.279537 4.39809 0.479037 4.2295 0.719954 4.19159L3.61912 3.771C3.83962 3.74825 4.03329 3.61409 4.13245 3.41575L5.40995 0.796585C5.44029 0.738252 5.47937 0.684585 5.52662 0.639085L5.57912 0.598252C5.60654 0.567919 5.63804 0.542835 5.67304 0.522419L5.73662 0.499085L5.83579 0.458252H6.08137C6.3007 0.481002 6.49379 0.612252 6.5947 0.808252L7.88912 3.41575C7.98245 3.6065 8.16387 3.73892 8.37329 3.771L11.2725 4.19159C11.5175 4.22659 11.7222 4.39575 11.8033 4.62909C11.8797 4.863 11.8138 5.11967 11.6341 5.28825L9.45245 7.35325Z"
              fill="#1A5CEB"
            />
          </svg>
          <PrimaryHeading
            title="4.5"
            fontWeight="extrabold"
            fontSize="14px"
            lineHeight="18px"
          />
          <PrimaryHeading
            title="(21)"
            fontWeight="medium"
            fontSize="10px"
            lineHeight="15px"
            className="text-textAccent"
          />
          <span className="text-slate-200">|</span>
          <PrimaryHeading
            title="Engage Hero"
            fontWeight="medium"
            fontSize="10px"
            lineHeight="15px"
            className="text-textAccent"
          />
        </div>
      </div>
    </div>
  );
};

export default UserHeading;
