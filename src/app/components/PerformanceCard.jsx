import React from "react";
import { PrimaryHeading } from "./index";

const PerformanceCard = ({
  value,
  description,
  extraValue,
  classes = "",
  ...props
}) => {
  return description !== "Closed Deals" ? (
    <div className="w-full p-5 flex flex-col justify-center items-center gap-2 bg-[#F8F9FC] rounded-lg">
      <div className="flex justify-center items-center gap-1">
        <PrimaryHeading
          title={value}
          fontSize="18px"
          fontWeight="bold"
          lineHeight="27px"
        />
        <PrimaryHeading
          title={extraValue}
          fontSize="18px"
          fontWeight="normal"
          lineHeight="27px"
        />
      </div>
      <div>
        <PrimaryHeading
          title={description}
          fontSize="10px"
          fontWeight="normal"
          lineHeight="15px"
          className="text-center"
        />
      </div>
    </div>
  ) : (
    <div className="relative w-full p-5 flex flex-col justify-center items-center gap-2 bg-[#F8F9FC] rounded-lg">
      <div className="p-2 absolute top-1 left-1 rounded-lg bg-[#E7EEFE] text-[12px] text-textAccent">
        Rank 2
      </div>
      <div className="flex justify-center items-center gap-1">
        <PrimaryHeading
          title={value}
          fontSize="18px"
          fontWeight="bold"
          lineHeight="27px"
        />
        <span className="text-textAccent text-[10px]">+1</span>
      </div>
      <div>
        <PrimaryHeading
          title={description}
          fontSize="10px"
          fontWeight="medium"
          lineHeight="15px"
          className="text-center"
        />
      </div>
    </div>
  );
};

export default PerformanceCard;
