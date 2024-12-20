import React from "react";

const ActivityCard = ({
  title,
  icon,
  description,
  name,
  date,
  day,
  time,
  duration,
  number,
}) => {
  return (
    <div className="flex flex-col justify-start items-start gap-4 border-b border-slate-200 my-2 pb-5 w-full">
      <div className="flex justify-start items-center gap-4">
        {icon}
        <h1 className="text-sm font-bold">{title}</h1>
      </div>
      <p className="text-xs">{description}</p>
      <div className="p-2 rounded-lg bg-[#F8F9FC] flex flex-col justify-start w-full items-start gap-3">
        <div className="flex justify-start items-center gap-2">
          {/* <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.99187 8.7926C4.91993 8.7926 3.15054 9.10587 3.15054 10.3605C3.15054 11.6151 4.90871 11.9395 6.99187 11.9395C9.06381 11.9395 10.8327 11.6258 10.8327 10.3717C10.8327 9.1176 9.07503 8.7926 6.99187 8.7926Z"
              stroke="#B2C8F8"
              strokeWidth="0.964286"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.99184 7.0032C8.35154 7.0032 9.45358 5.90065 9.45358 4.54096C9.45358 3.18126 8.35154 2.07922 6.99184 2.07922C5.63215 2.07922 4.52959 3.18126 4.52959 4.54096C4.52501 5.89606 5.61991 6.99861 6.9745 7.0032H6.99184Z"
              stroke="#B2C8F8"
              strokeWidth="0.964286"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg> */}
          <h1 className="text-sm">
            {name} <span className="h-full w-[1px] text-slate-200 mx-3">|</span>{" "}
            {number}
          </h1>
        </div>
        <div className="flex justify-start items-center gap-2">
          {/* <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.66376 5.79968H10.9136"
              stroke="#B2C8F8"
              strokeWidth="0.964286"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.65848 2.37146V3.89464"
              stroke="#B2C8F8"
              strokeWidth="0.964286"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.91934 2.37146V3.89464"
              stroke="#B2C8F8"
              strokeWidth="0.964286"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.74781 3.10266H4.82875C3.4692 3.10266 2.62054 3.85975 2.62054 5.25133V9.44057C2.62054 10.8542 3.4692 11.6288 4.82875 11.6288H8.74379C10.1073 11.6288 10.952 10.8677 10.952 9.4756V5.25133C10.956 3.85975 10.1113 3.10266 8.74781 3.10266Z"
              stroke="#B2C8F8"
              strokeWidth="0.964286"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.68567 8.58551L6.58837 9.48973L8.44829 7.62878"
              stroke="#B2C8F8"
              strokeWidth="0.964286"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg> */}
          <h1 className="text-sm">
            {date} - {time}
          </h1>
        </div>
      </div>
      <div className="flex justify-between items-center w-full">
        <h2 className="text-xs text-textSecondary">
          {day}, {time}
        </h2>
        <h2 className="text-xs text-textSecondary">{duration}</h2>
      </div>
    </div>
  );
};

export default ActivityCard;
