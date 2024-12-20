import React from "react";
import PrimaryHeading from "./PrimaryHeading";

const UserDetails = () => {
  const details = [
    {
      id: 1,
      title: "Branch:",
      value: "Business bay",
    },
    {
      id: 2,
      title: "RERA No:",
      value: "CN-1062603",
    },
    {
      id: 3,
      title: "AOS:",
      value: "Downtown Dubai, Old Town, Marina,...",
    },
  ];
  return (
    <div className="flex flex-col justify-start items-start gap-3">
      {details.map((item) => {
        return (
          <div key={item.id} className="flex justify-start items-start gap-2">
            <PrimaryHeading
              fontWeight="medium"
              fontSize="10px"
              lineHeight="18px"
              className="text-textSecondary"
              title={item.title}
            />
            <PrimaryHeading
              fontWeight="medium"
              fontSize="10px"
              lineHeight="18px"
              className="text-textPrimary"
              title={item.value}
            />
          </div>
        );
      })}
    </div>
  );
};

export default UserDetails;
