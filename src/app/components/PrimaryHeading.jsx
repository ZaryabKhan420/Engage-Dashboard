import React from "react";

// Predefined Tailwind class maps
const fontSizeMap = {
  "10px": "text-xs",
  "14px": "text-sm",
  "16px": "text-base",
  "18px": "text-lg",
};

const fontWeightMap = {
  normal: "font-normal",
  medium: "font-medium",
  bold: "font-bold",
  extrabold: "font-extrabold",
};

const lineHeightMap = {
  "27px": "leading-[27px]",
  "24px": "leading-[24px]",
  "21px": "leading-[21px]",
  "18px": "leading-[18px]",
  "15px": "leading-[15px]",
};

const PrimaryHeading = ({
  title,
  fontSize = "16px",
  fontWeight = "medium",
  lineHeight = "21px",
  className = "",
}) => {
  return (
    <h1
      className={`${className} ${fontSizeMap[fontSize]} ${fontWeightMap[fontWeight]} ${lineHeightMap[lineHeight]}`}
    >
      {title}
    </h1>
  );
};

export default PrimaryHeading;
