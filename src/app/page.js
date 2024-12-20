"use client";
import { useEffect, useState, useMemo } from "react";
import {
  UserHeading,
  PrimaryHeading,
  Header,
  UserDetails,
  Loader,
  PerformanceCard,
  Select,
  SearchBar,
  ActivityCard,
} from "./components/index";

import { DatePickerWithRange } from "@/components/ui/DatePickerWithRange";
export default function Home() {
  const [search, setSearch] = useState("");

  const performanceStats = [
    {
      id: 1,
      value: "12",
      description: "Number of calls",
    },
    {
      id: 2,
      value: "24",
      description: "viewings done",
    },
    {
      id: 3,
      value: "12.4",
      extraValue: "M",
      description: "Total Deals Value (AED)",
    },
    {
      id: 4,
      value: "32",
      description: "Total Leads",
    },
    {
      id: 5,
      value: "12",
      description: "Total Enquires",
    },
    {
      id: 6,
      value: "8",
      description: "Closed Deals",
    },
  ];

  const barsStats = [
    {
      id: 1,
      title: "Qualified",
      color: "#B0C6F8",
      number: 20,
      percentage: 50,
    },
    {
      id: 2,
      title: "Viewing",
      color: "#B0C6F8",
      number: 12,
      percentage: 30,
    },
    {
      id: 3,
      title: "Offer",
      color: "#B0C6F8",
      number: 8,
      percentage: 20,
    },
    {
      id: 4,
      title: "Reserves",
      color: "#E9EAED",
      number: 5,
      percentage: 12.5,
    },
    {
      id: 5,
      title: "Deals",
      color: "#E9EAED",
      number: 10,
      percentage: 25,
    },
  ];

  const searchTitles = [
    {
      id: 1,
      title: "Stage",
      width: 10,
    },
    {
      id: 2,
      title: "Name",
      width: 25,
    },
    {
      id: 3,
      title: "Mobile",
      width: 25,
    },
    {
      id: 4,
      title: "Location",
      width: 25,
    },
    {
      id: 5,
      title: "Beds",
      width: 10,
    },
  ];

  const searchResults = [
    {
      id: 1,
      stage: "New",
      name: "Nellie Danella M",
      mobile: "+971 2311 3221",
      location: "Business bay",
      beds: "Studio",
      value: "25:50",
      textColor: "#333333",
      primaryColor: "#D1DEFB",
      secondaryColor: "#1A5CEB",
    },
    {
      id: 2,
      stage: "New",
      name: "WhatsApp User",
      mobile: "+971 2311 0912",
      location: "Downtown",
      beds: "2",
      value: "25:50",
      textColor: "#333333",
      primaryColor: "#D1DEFB",
      secondaryColor: "#1A5CEB",
    },
    {
      id: 3,
      stage: "New",
      name: "Arlene McCoy",
      mobile: "+971 050 2134",
      location: "Old town",
      beds: "1",
      value: "25:50",
      textColor: "#333333",
      primaryColor: "#D1DEFB",
      secondaryColor: "#1A5CEB",
    },
    {
      id: 4,
      stage: "New",
      name: "Arlene McCoy",
      mobile: "+971 050 2134",
      location: "Old town",
      beds: "1",
      value: "25:50",
      textColor: "#333333",
      primaryColor: "#D1DEFB",
      secondaryColor: "#1A5CEB",
    },
    {
      id: 5,
      stage: "New",
      name: "Jane Cooper",
      mobile: "+971 050 2364",
      location: "Downtown",
      beds: "studio",
      value: "20:10",
      textColor: "#333333",
      primaryColor: "#D1DEFB",
      secondaryColor: "#1A5CEB",
    },
    {
      id: 6,
      stage: "New",
      name: "Theresa Webb",
      mobile: "+971 050 9805",
      location: "Business bay",
      beds: "2",
      value: "18:40",
      textColor: "#333333",
      primaryColor: "#D1DEFB",
      secondaryColor: "#1A5CEB",
    },
    {
      id: 7,
      stage: "New",
      name: "Esther Howard",
      mobile: "+971 050 2341",
      location: "Downtown",
      beds: "3",
      value: "12:10",
      textColor: "#333333",
      primaryColor: "#D1DEFB",
      secondaryColor: "#1A5CEB",
    },
    {
      id: 8,
      stage: "New",
      name: "Brooklyn Simmons",
      mobile: "+971 050 2341",
      location: "Business bay",
      beds: "studio",
      value: "08:20",
      textColor: "#EB8D18",
      primaryColor: "#FEFBD1",
      secondaryColor: "#EB8D18",
    },
    {
      id: 9,
      stage: "New",
      name: "Jacob Jones",
      mobile: "+971 050 2300",
      location: "Downtown",
      beds: "1",
      value: "04:30",
      textColor: "#E42B30",
      primaryColor: "#FAD5D6",
      secondaryColor: "#E42B30",
    },
    {
      id: 10,
      stage: "New",
      name: "Theresa Webb",
      mobile: "+971 050 9805",
      location: "Business bay",
      beds: "2",
      value: "",
      textColor: "",
      primaryColor: "",
      secondaryColor: "",
    },
  ];

  const activityData = [
    {
      id: 1,
      title: "Lead reassigned to you!",
      description:
        "There is a new lead reassigned to you due to unmet SLA. Please tap to see more information.",
      name: "Courtney Hennry",
      number: "+971 2311 3221",
      duration: "Yesterday",
      day: "Friday",
      time: "09:30 am",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.0005 9.01416C8.88807 9.01416 8.79688 9.10611 8.79688 9.21846C8.79688 9.33164 8.88883 9.42284 9.00125 9.42284C9.1136 9.42209 9.20555 9.33089 9.20555 9.21846C9.20555 9.10536 9.1136 9.01416 9.00125 9.01416"
            stroke="#1A5CEB"
            strokeWidth="1.125"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.58105 9.2178C5.58105 11.1066 7.11223 12.6378 9.0018 12.6378C10.8906 12.6378 12.4217 11.1066 12.4217 9.2178C12.4217 7.32903 10.8906 5.79785 9.0018 5.79785C7.11223 5.79785 5.58105 7.32903 5.58105 9.2178Z"
            stroke="#1A5CEB"
            strokeWidth="1.125"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.7027 2.25L13.2633 4.09866L11.4248 4.65625"
            stroke="#1A5CEB"
            strokeWidth="1.125"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.0885 4.12479C11.9689 3.22496 10.5466 2.68652 8.9985 2.68652C5.39035 2.68652 2.46533 5.61154 2.46533 9.21975C2.46533 12.8279 5.39035 15.7529 8.9985 15.7529C12.6067 15.7529 15.5317 12.8279 15.5317 9.21975C15.5317 8.80448 15.493 8.3982 15.4189 8.00445"
            stroke="#1A5CEB"
            strokeWidth="1.125"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Viewing booked for your listing",
      description:
        "You booked a viewing for a below lead. check out the details.",
      name: "Courtney Hennry",
      number: "+971 2311 3221",
      duration: "Yesterday",
      day: "Friday",
      time: "09:30 am",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.25 6.3518V5.16892C2.25 3.55694 3.55694 2.25 5.16964 2.25H6.13654"
            stroke="#1A5CEB"
            strokeWidth="1.35"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.25 11.6489V12.8318C2.25 14.4438 3.55694 15.7508 5.16964 15.7508H6.11245"
            stroke="#1A5CEB"
            strokeWidth="1.35"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.7503 11.6489V12.8318C15.7503 14.4438 14.4433 15.7508 12.8306 15.7508H11.8638"
            stroke="#1A5CEB"
            strokeWidth="1.35"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.7491 6.3518V5.16892C15.7491 3.55694 14.4423 2.25 12.8295 2.25H11.8867"
            stroke="#1A5CEB"
            strokeWidth="1.35"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.99998 12.1865C10.6581 12.1865 12.1747 10.9942 13.0287 9.00767C12.1747 7.02107 10.6581 5.82886 8.99998 5.82886C7.3437 5.82886 5.82703 7.02107 4.97314 9.00767C5.82703 10.9951 7.3437 12.1865 9.00178 12.1865H8.99998Z"
            stroke="#1A5CEB"
            strokeWidth="1.35"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.1311 9.00859C10.1311 9.63222 9.62497 10.1384 9.00127 10.1384C8.37727 10.1384 7.87109 9.63222 7.87109 9.00859C7.87109 8.38452 8.37727 7.87842 9.00127 7.87842C9.62497 7.87842 10.1311 8.38452 10.1311 9.00859Z"
            stroke="#1A5CEB"
            strokeWidth="1.35"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Lead Stage Updated",
      description: 'You updated the lead stage to "Qualified"',
      name: "Courtney Hennry",
      number: "+971 2311 3221",
      duration: "Yesterday",
      day: "Friday",
      time: "09:30 am",
      icon: (
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.99175 8.79272C4.91981 8.79272 3.15042 9.10599 3.15042 10.3606C3.15042 11.6152 4.90858 11.9397 6.99175 11.9397C9.06369 11.9397 10.8326 11.6259 10.8326 10.3718C10.8326 9.11772 9.07491 8.79272 6.99175 8.79272Z"
            stroke="#1A5CEB"
            strokeWidth="0.964286"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.99178 7.0032C8.35148 7.0032 9.45352 5.90065 9.45352 4.54096C9.45352 3.18126 8.35148 2.07922 6.99178 2.07922C5.63209 2.07922 4.52952 3.18126 4.52952 4.54096C4.52495 5.89606 5.61985 6.99861 6.97444 7.0032H6.99178Z"
            stroke="#1A5CEB"
            strokeWidth="0.964286"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Lead reassigned to you!",
      description:
        "There is a new lead reassigned to you due to unmet SLA. Please tap to see more information.",
      name: "Courtney Hennry",
      number: "+971 2311 3221",
      duration: "Yesterday",
      day: "Friday",
      time: "09:30 am",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.0005 9.01416C8.88807 9.01416 8.79688 9.10611 8.79688 9.21846C8.79688 9.33164 8.88883 9.42284 9.00125 9.42284C9.1136 9.42209 9.20555 9.33089 9.20555 9.21846C9.20555 9.10536 9.1136 9.01416 9.00125 9.01416"
            stroke="#1A5CEB"
            strokeWidth="1.125"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.58105 9.2178C5.58105 11.1066 7.11223 12.6378 9.0018 12.6378C10.8906 12.6378 12.4217 11.1066 12.4217 9.2178C12.4217 7.32903 10.8906 5.79785 9.0018 5.79785C7.11223 5.79785 5.58105 7.32903 5.58105 9.2178Z"
            stroke="#1A5CEB"
            strokeWidth="1.125"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.7027 2.25L13.2633 4.09866L11.4248 4.65625"
            stroke="#1A5CEB"
            strokeWidth="1.125"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.0885 4.12479C11.9689 3.22496 10.5466 2.68652 8.9985 2.68652C5.39035 2.68652 2.46533 5.61154 2.46533 9.21975C2.46533 12.8279 5.39035 15.7529 8.9985 15.7529C12.6067 15.7529 15.5317 12.8279 15.5317 9.21975C15.5317 8.80448 15.493 8.3982 15.4189 8.00445"
            stroke="#1A5CEB"
            strokeWidth="1.125"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 5,
      title: "Viewing booked for your listing",
      description:
        "You booked a viewing for a below lead. check out the details.",
      name: "Courtney Hennry",
      number: "+971 2311 3221",
      duration: "Yesterday",
      day: "Friday",
      time: "09:30 am",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.25 6.3518V5.16892C2.25 3.55694 3.55694 2.25 5.16964 2.25H6.13654"
            stroke="#1A5CEB"
            strokeWidth="1.35"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.25 11.6489V12.8318C2.25 14.4438 3.55694 15.7508 5.16964 15.7508H6.11245"
            stroke="#1A5CEB"
            strokeWidth="1.35"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.7503 11.6489V12.8318C15.7503 14.4438 14.4433 15.7508 12.8306 15.7508H11.8638"
            stroke="#1A5CEB"
            strokeWidth="1.35"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.7491 6.3518V5.16892C15.7491 3.55694 14.4423 2.25 12.8295 2.25H11.8867"
            stroke="#1A5CEB"
            strokeWidth="1.35"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.99998 12.1865C10.6581 12.1865 12.1747 10.9942 13.0287 9.00767C12.1747 7.02107 10.6581 5.82886 8.99998 5.82886C7.3437 5.82886 5.82703 7.02107 4.97314 9.00767C5.82703 10.9951 7.3437 12.1865 9.00178 12.1865H8.99998Z"
            stroke="#1A5CEB"
            strokeWidth="1.35"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.1311 9.00859C10.1311 9.63222 9.62497 10.1384 9.00127 10.1384C8.37727 10.1384 7.87109 9.63222 7.87109 9.00859C7.87109 8.38452 8.37727 7.87842 9.00127 7.87842C9.62497 7.87842 10.1311 8.38452 10.1311 9.00859Z"
            stroke="#1A5CEB"
            strokeWidth="1.35"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  const findSearches = () => {
    if (search === "") {
      return searchResults;
    } else {
      const input = search.trim().toLowerCase();
      const newArray = searchResults.filter((item) => {
        return (
          item.name.toLowerCase().includes(input) || item.mobile.includes(input)
        );
      });
      return newArray;
    }
  };

  const result = useMemo(() => findSearches(), [search]);

  return (
    <div>
      <div className="grid grid-cols-5 lg:grid-cols-9 xl:grid-cols-12 h-full container gap-4 my-8 ">
        {/* Left Part  */}
        <div className="col-span-5 lg:col-span-3 xl:col-span-3 flex flex-col gap-5">
          {/* User Card  */}
          <div className="border border-slate-200 rounded-lg p-4 flex flex-col justify-start items-start gap-4">
            <PrimaryHeading
              title="My Profile"
              fontSize="14px"
              fontWeight="bold"
              lineHeight="21px"
            />
            <UserHeading />
            <UserDetails />
            <div className="w-full h-[1px] bg-textSecondary"></div>
            <div className="flex justify-around items-center w-full">
              <Loader
                description="Avg response time"
                value="5"
                unit="min"
                svg={
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="20"
                      cy="20"
                      r="19.6"
                      stroke="#EEF0F6"
                      strokeWidth="0.8"
                    />
                    <mask id="path-2-inside-1_1653_5790" fill="white">
                      <path d="M38.536 27.511C39.7864 24.4254 40.2466 21.0763 39.875 17.7678C39.5034 14.4592 38.3117 11.2957 36.408 8.56426C34.5043 5.83282 31.9489 3.61985 28.9734 2.12605C25.9979 0.632254 22.6966 -0.0951005 19.3689 0.00995995L19.525 4.95618C22.0294 4.87711 24.5138 5.4245 26.7531 6.54868C28.9923 7.67286 30.9155 9.33827 32.3481 11.3939C33.7808 13.4494 34.6776 15.8302 34.9573 18.3201C35.2369 20.81 34.8906 23.3304 33.9496 25.6526L38.536 27.511Z" />
                    </mask>
                    <path
                      d="M38.536 27.511C39.7864 24.4254 40.2466 21.0763 39.875 17.7678C39.5034 14.4592 38.3117 11.2957 36.408 8.56426C34.5043 5.83282 31.9489 3.61985 28.9734 2.12605C25.9979 0.632254 22.6966 -0.0951005 19.3689 0.00995995L19.525 4.95618C22.0294 4.87711 24.5138 5.4245 26.7531 6.54868C28.9923 7.67286 30.9155 9.33827 32.3481 11.3939C33.7808 13.4494 34.6776 15.8302 34.9573 18.3201C35.2369 20.81 34.8906 23.3304 33.9496 25.6526L38.536 27.511Z"
                      stroke="#1A5CEB"
                      strokeWidth="6.4"
                      mask="url(#path-2-inside-1_1653_5790)"
                    />
                  </svg>
                }
              />
              <Loader
                svg={
                  <svg
                    width="39"
                    height="40"
                    viewBox="0 0 39 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask id="path-1-inside-1_1653_5802" fill="white">
                      <path d="M22.8233 0.200278C19.1516 -0.323277 15.4067 0.184433 12.0069 1.66667C8.60718 3.14892 5.68655 5.5473 3.57138 8.59384C1.45621 11.6404 0.22983 15.2151 0.0292654 18.9184C-0.171299 22.6218 0.661857 26.3081 2.43564 29.5652C4.20942 32.8224 6.85395 35.5221 10.0737 37.3629C13.2935 39.2036 16.9617 40.1128 20.6685 39.9888C24.3752 39.8649 27.9745 38.7126 31.0641 36.6609C34.1537 34.6092 36.612 31.7387 38.1642 28.3704L33.6697 26.2993C32.5016 28.8342 30.6516 30.9944 28.3265 32.5384C26.0013 34.0825 23.2926 34.9496 20.5031 35.0429C17.7135 35.1362 14.9529 34.452 12.5298 33.0667C10.1067 31.6814 8.11655 29.6497 6.78166 27.1984C5.44677 24.7472 4.81977 21.9731 4.97071 19.1861C5.12164 16.399 6.04458 13.7088 7.63638 11.4161C9.22819 9.12339 11.4262 7.31845 13.9847 6.20297C16.5432 5.08748 19.3615 4.7054 22.1247 5.0994L22.8233 0.200278Z" />
                    </mask>
                    <path
                      d="M22.8233 0.200278C19.1516 -0.323277 15.4067 0.184433 12.0069 1.66667C8.60718 3.14892 5.68655 5.5473 3.57138 8.59384C1.45621 11.6404 0.22983 15.2151 0.0292654 18.9184C-0.171299 22.6218 0.661857 26.3081 2.43564 29.5652C4.20942 32.8224 6.85395 35.5221 10.0737 37.3629C13.2935 39.2036 16.9617 40.1128 20.6685 39.9888C24.3752 39.8649 27.9745 38.7126 31.0641 36.6609C34.1537 34.6092 36.612 31.7387 38.1642 28.3704L33.6697 26.2993C32.5016 28.8342 30.6516 30.9944 28.3265 32.5384C26.0013 34.0825 23.2926 34.9496 20.5031 35.0429C17.7135 35.1362 14.9529 34.452 12.5298 33.0667C10.1067 31.6814 8.11655 29.6497 6.78166 27.1984C5.44677 24.7472 4.81977 21.9731 4.97071 19.1861C5.12164 16.399 6.04458 13.7088 7.63638 11.4161C9.22819 9.12339 11.4262 7.31845 13.9847 6.20297C16.5432 5.08748 19.3615 4.7054 22.1247 5.0994L22.8233 0.200278Z"
                      stroke="#1A5CEB"
                      strokeWidth="6.4"
                      mask="url(#path-1-inside-1_1653_5802)"
                    />
                  </svg>
                }
                description="Response Rate"
                value="65"
                unit="%"
              />
            </div>
          </div>

          {/* Performance Card  */}

          <div className="border border-slate-200 rounded-lg p-4 flex flex-col justify-start items-start gap-4">
            <div className="flex flex-col justify-start items-start gap-4 w-full">
              <PrimaryHeading
                title="My Performance"
                fontSize="14px"
                fontWeight="bold"
                lineHeight="21px"
              />
              <div className="w-full flex justify-end">
                <DatePickerWithRange />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {performanceStats.map((item) => {
                  return (
                    <PerformanceCard
                      key={item.id}
                      value={item.value}
                      extraValue={item?.extraValue}
                      description={item.description}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          {/* Funnel Card  */}

          <div className="border border-slate-200 rounded-lg p-4 flex flex-col justify-start items-start gap-6">
            <div className="w-full flex justify-start items-center gap-2">
              <PrimaryHeading
                title="My Funnel"
                fontSize="14px"
                fontWeight="bold"
                lineHeight="21px"
              />
              <div className="h-full w-[2px] bg-textSecondary"></div>
              <PrimaryHeading
                title="All Time"
                fontSize="14px"
                fontWeight="normal"
                lineHeight="21px"
                className="text-textSecondary"
              />
            </div>
            <div className="flex flex-col justify-start items-start gap-4 w-full">
              <PrimaryHeading
                title="Total Received Leads"
                fontSize="14px"
                fontWeight="bold"
                lineHeight="21px"
                className="text-[#3C5891]"
              />
              <div className="bg-red-500 w-full ">
                <img
                  src="funnel image.png"
                  alt="Statistics"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Center  */}
        <div className="col-span-5 lg:col-span-6  xl:col-span-6 flex justify-start items-start gap-4">
          <div className="border border-slate-200 rounded-lg p-4 w-full flex flex-col justify-start items-start gap-4">
            {/* Header  */}
            <div className="flex justify-between items-center w-full ">
              <div className="flex justify-start items-center gap-2 flex-wrap">
                <PrimaryHeading
                  title="My Leads"
                  fontSize="14px"
                  fontWeight="bold"
                  lineHeight="21px"
                />
                <span className="text-textSecondary">|</span>
                <PrimaryHeading
                  title="Lead Statistics"
                  fontSize="14px"
                  fontWeight="normal"
                  lineHeight="21px"
                  className="text-textSecondary"
                />
              </div>

              <div>
                <Select
                  options={["Clients only", "External agents", "All"]}
                  className={"font-semibold"}
                />
              </div>
            </div>
            {/* bars  */}
            <div className="flex flex-col justify-start items-end gap-4 w-full mt-3">
              <div className="flex justify-start items-center gap-4  w-full">
                <h1 className="text-xs sm:text-sm font-bold w-[15%] text-right">
                  New
                </h1>

                <div className="p-1 rounded-lg border border-slate-200 flex justify-start items-center gap-2 w-[85%]">
                  <p className="h-full w-[70%] bg-textAccent rounded-md">
                    &nbsp;
                  </p>
                  <div className="h-full w-[30%] bg-[#EAECF6] rounded-md flex justify-between items-center px-2">
                    <p className="text-xs font-bold h-full p-1">32</p>
                    <p className="text-xs h-full">40</p>
                  </div>
                </div>
              </div>
              {barsStats.map((bar) => {
                console.log(bar.percentage);
                return (
                  <div
                    className="flex justify-between items-center gap-4 w-full "
                    key={bar.id}
                  >
                    <h1 className="w-[15%] text-right text-xs sm:text-sm">
                      {bar.title}
                    </h1>

                    <div className="p-1 rounded-lg border border-slate-200 flex justify-start items-center gap-2 w-[85%]">
                      <div
                        className={`h-full rounded-md`}
                        style={{
                          width: `${bar.percentage}%`,
                          backgroundColor: `${bar.color}`,
                        }}
                      >
                        &nbsp;
                      </div>
                      <p className="text-xs font-bold h-full">{bar.number}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Search Bar  */}
            <div className="mt-5 w-full">
              <div className="flex justify-between items-center gap-2 flex-wrap md:flex-nowrap w-full">
                <div className="w-[100%] md:w-[60%]">
                  <SearchBar onSearch={setSearch} />
                </div>
                <div className="w-[100%] md:w-[40%] flex justify-end items-center gap-2 flex-wrap md:flex-nowrap">
                  <Select options={["Tenants", "Tenants2", "Tenants3"]} />
                  <Select
                    options={["Newest", "Last modified", "Shortest SLA"]}
                  />
                </div>
              </div>

              <div className="flex flex-col justify-start items-start gap-4 mt-8">
                {/* <!-- Header Section -->  */}
                <div className="flex justify-start items-center w-full gap-4 p-1 ">
                  <h1 className="w-[50%] md:w-[10%] text-textSecondary text-[14px] font-normal text-left">
                    Stage
                  </h1>
                  <h1 className="w-[50%] md:w-[20%] text-textSecondary text-[14px] font-normal text-left">
                    Name
                  </h1>
                  <h1 className="w-[25%] md:w-[18%] text-textSecondary text-[14px] font-normal text-left hidden md:block">
                    Mobile
                  </h1>
                  <h1 className="w-[25%] md:w-[18%] text-textSecondary text-[14px] font-normal text-left hidden md:block">
                    Location
                  </h1>
                  <h1 className="w-[10%] md:w-[10%] text-textSecondary text-[14px] font-normal text-left hidden md:block">
                    Beds
                  </h1>
                  <h1 className="w-[20%] md:w-[12%] text-textSecondary text-[14px] font-normal text-left hidden md:block"></h1>{" "}
                  {/* Placeholder for Actions */}
                </div>

                {/* <!-- Results Section -->  */}
                <div className="w-full p-1 flex flex-col justify-start items-start gap-4">
                  {result.map((item) => (
                    <div
                      className="flex justify-start items-center w-full gap-5 cursor-pointer group p-1 hover:bg-[#F8F9FC] transition-all duration-300"
                      key={item.id}
                    >
                      {/* Stage */}
                      <div className="w-[50%] md:w-[10%] flex justify-between items-center border border-slate-200 rounded-lg p-2 ">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-[12px] font-normal">New</span>
                      </div>

                      {/* Name */}
                      <h1 className="w-[50%] md:w-[20%] text-[12px]">
                        {item.name}
                      </h1>

                      {/* Mobile */}
                      <h1 className="w-[25%] md:w-[18%] text-[12px] hidden md:block">
                        {item.mobile}
                      </h1>

                      {/* Location */}
                      <h1 className="w-[25%] md:w-[18%] text-[12px] hidden md:block">
                        {item.location}
                      </h1>

                      {/* Beds */}
                      <h1 className="w-[10%] md:w-[10%] text-[12px] group-hover:hidden hidden md:block">
                        {item.beds}
                      </h1>

                      {/* Actions or SLA */}
                      <div className="w-[20%] md:w-[12%] md:flex justify-center items-center gap-2 group-hover:hidden hidden">
                        {item.value ? (
                          <div className="flex items-center gap-1 text-[12px] p-2 rounded-md border border-slate-200">
                            <span className="text-gray-500">SLA:</span>
                            <span
                              className="font-bold"
                              style={{ color: item.textColor }}
                            >
                              {item.value}
                            </span>
                            <div
                              className="w-4 h-4 rounded-full flex justify-center items-center"
                              style={{ backgroundColor: item.primaryColor }}
                            >
                              <div
                                className="w-[6px] h-[6px] rounded-full"
                                style={{ backgroundColor: item.secondaryColor }}
                              ></div>
                            </div>
                          </div>
                        ) : (
                          <div></div>
                        )}
                      </div>
                      <div className="md:group-hover:flex gap-1 hidden">
                        <button className="w-8 h-8 bg-white flex justify-center items-center rounded-md gap-1">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.75 11.3212C15.75 13.3951 14.3664 15.0808 12.3137 15.0757H5.6863C3.63357 15.0808 2.25 13.3951 2.25 11.3212V6.68523C2.25 4.61353 3.63357 2.92566 5.6863 2.92566H12.3137C14.3664 2.92566 15.75 4.61353 15.75 6.68523V11.3212Z"
                              stroke="#1F1F1F"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12.9864 6.87415L9.98723 9.31291C9.42241 9.76171 8.62193 9.76171 8.05711 9.31291L5.03238 6.87415"
                              stroke="#1F1F1F"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                        <button className="w-8 h-8 bg-white flex justify-center items-center rounded-md">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.9337 3C13.3107 3.26397 15.1887 5.13935 15.4552 7.51634"
                              stroke="#1F1F1F"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10.9337 5.27551C12.0712 5.49645 12.9601 6.38597 13.1816 7.52341"
                              stroke="#1F1F1F"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.80051 9.40482C11.3625 11.9661 11.9437 9.00298 13.5749 10.6331C15.1475 12.2053 16.052 12.5203 14.0588 14.5122C13.8093 14.7128 12.2236 17.1259 6.65085 11.5546C1.07744 5.98263 3.48909 4.39526 3.68972 4.14575C5.68701 2.14827 5.99726 3.05741 7.56987 4.62961C9.20038 6.2604 6.23856 6.84352 8.80051 9.40482Z"
                              stroke="#1F1F1F"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                        <button className="w-8 h-8 bg-white text-white flex justify-center items-center rounded-md">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.96204 15.0276C5.79786 14.9451 5.61762 14.9167 5.43884 14.959C4.83099 15.102 3.85026 15.3465 3.1366 15.526C2.73088 15.6281 2.36164 15.2669 2.45578 14.8597C2.6331 14.0906 2.87901 13.0209 2.99576 12.486C3.03225 12.3196 3.00963 12.1481 2.93739 11.9941C2.50978 11.0784 2.25 10.0648 2.25 9.00015C2.25 4.86634 6.01604 1.5695 10.2863 2.37073C12.9695 2.87422 15.1258 5.03125 15.6293 7.71367C16.4305 11.9839 13.1336 15.75 8.99985 15.75C7.9425 15.75 6.88586 15.4946 5.96204 15.0276Z"
                              stroke="#1F1F1F"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M6.44917 6.34439C5.40934 7.38934 6.19742 9.0494 7.58389 10.4359C8.97034 11.8224 10.6041 12.5842 11.6491 11.5444L11.7454 11.448C12.1643 11.0299 12.103 10.3345 11.6178 9.9959C11.4609 9.88715 11.2967 9.77188 11.1222 9.65C10.745 9.3851 10.2291 9.42598 9.90289 9.75065L9.72634 9.92585C8.96666 9.47338 8.58139 9.03845 8.06839 8.2679L8.24351 8.09135C8.56751 7.76443 8.60838 7.2485 8.34423 6.87125C8.22161 6.69684 8.10708 6.53266 7.99766 6.37577C7.65978 5.89052 6.96435 5.82995 6.5455 6.24807L6.44917 6.34439Z"
                              stroke="#1F1F1F"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                        <button className="bg-textPrimary rounded-md  text-xs text-white p-2">
                          update
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right  */}
        <div className="col-span-5 lg:col-span-3 xl:col-span-3 flex flex-col justify-start items-start gap-4 p-4 rounded-lg border border-slate-200">
          {activityData.map((item) => {
            return (
              <ActivityCard
                key={item.id}
                title={item.title}
                icon={item.icon}
                description={item.description}
                name={item.name}
                date={item.day}
                day={item.day}
                time={item.time}
                duration={item.duration}
                number={item.number}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
