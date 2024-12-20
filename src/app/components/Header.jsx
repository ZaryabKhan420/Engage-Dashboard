"use client";
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import Link from "next/link";
const Header = () => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropFlag, setDropFlag] = useState(false);

  const links = [
    {
      id: 1,
      path: "/",
      title: "Home",
    },
    {
      id: 2,
      path: "/explore",
      title: "Explore",
    },
    {
      id: 3,
      path: "/your-leads",
      title: "Your Leads",
    },
    {
      id: 4,
      path: "/your-listings",
      title: "Your Listings",
    },
  ];

  const menuOptions = [
    {
      id: 1,
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.8635 13.3992L5.96199 13.4061H5.96129C5.88583 13.4061 5.81383 13.3764 5.76053 13.3231C5.70722 13.2698 5.67676 13.1971 5.67676 13.1216C5.67676 12.0859 6.52276 11.0405 8.41278 11.0405C10.3021 11.0405 11.1481 12.0825 11.1481 13.1147C11.1481 13.2718 11.0207 13.3992 10.8635 13.3992ZM8.41209 6.61116C9.39101 6.61116 10.1872 7.40731 10.1872 8.38622C10.1872 9.36515 9.39101 10.1613 8.41209 10.1613C7.43385 10.1613 6.63768 9.36515 6.63768 8.38622C6.63768 7.40731 7.43385 6.61116 8.41209 6.61116ZM7.67132 3.54216C7.67132 3.42723 7.76408 3.33446 7.87901 3.33446H8.94585C9.06078 3.33446 9.15355 3.42723 9.15355 3.54216V4.76131C9.15355 4.87554 9.06078 4.969 8.94585 4.969H7.87901C7.76408 4.969 7.67132 4.87554 7.67132 4.76131V3.54216ZM10.9736 3.70346H10.1429V3.49577C10.1429 2.87269 9.65824 2.31885 9.03516 2.31885H7.85824C7.23516 2.31885 6.68129 2.80346 6.68129 3.49577V3.70346H5.85053C3.84283 3.70346 2.59668 4.88039 2.59668 6.88808V12.4265C2.59668 14.4342 3.84283 15.6804 5.85053 15.6804H10.9736C12.9813 15.6804 14.2275 14.5035 14.2275 12.4958V6.88808C14.1582 4.88039 12.9813 3.70346 10.9736 3.70346Z"
            fill="black"
          />
        </svg>
      ),
      title: "Profile",
      path: "/profile",
    },
    {
      id: 2,
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.39253 15.5769H8.58322C7.70815 15.5769 6.99645 14.8659 6.99645 13.9916C6.99507 13.8462 6.95422 13.7015 6.87943 13.5755C6.75343 13.3588 6.56236 13.2134 6.33459 13.1532C6.10751 13.0922 5.87005 13.1255 5.66651 13.2439C4.88489 13.6745 3.91774 13.3955 3.49612 12.6298L3.09805 11.9437C3.09043 11.9319 3.08282 11.9202 3.07728 11.9077C2.87651 11.5588 2.82182 11.1337 2.93259 10.7273C3.04266 10.3202 3.30505 9.98102 3.67059 9.77125C3.94543 9.61271 4.11712 9.3164 4.11712 8.99863C4.11712 8.68017 3.94543 8.38248 3.66989 8.22325C2.91459 7.7871 2.65428 6.81648 3.08974 6.06048L3.52659 5.34117C3.95928 4.59279 4.92989 4.33179 5.68589 4.76656C5.81674 4.8441 5.96212 4.88494 6.10889 4.88633H6.11166C6.59559 4.88633 6.99576 4.49102 7.00199 4.00502C7.00199 3.13133 7.71022 2.4231 8.58045 2.4231H9.39253C10.3168 2.45286 11.0049 3.18671 10.9786 4.0604C10.98 4.19333 11.0208 4.33871 11.0963 4.46679C11.2202 4.67586 11.4127 4.81986 11.6411 4.87871C11.871 4.93825 12.1091 4.90294 12.3127 4.78248C13.0735 4.34702 14.0435 4.60663 14.4796 5.36125L14.4802 5.36189L14.8832 6.06186C14.8908 6.07571 14.8978 6.08956 14.9033 6.1041C15.3041 6.8511 15.0404 7.79402 14.3031 8.22256C14.1667 8.30148 14.0538 8.41433 13.9756 8.55002C13.8531 8.76671 13.8233 9.00486 13.8849 9.23263C13.9472 9.4604 14.0947 9.65079 14.3003 9.76779C14.3058 9.77056 14.3114 9.77402 14.3169 9.77748C14.6804 9.99002 14.9386 10.3313 15.0452 10.7377C15.1518 11.1455 15.0937 11.5699 14.8818 11.9333L14.4533 12.6499C14.0192 13.4003 13.0479 13.6606 12.2926 13.2252C12.1625 13.1525 12.0129 13.1102 11.8634 13.1068C11.6211 13.1082 11.4002 13.2016 11.2334 13.3699C11.0672 13.5388 10.9772 13.761 10.9786 13.9971C10.9724 14.8708 10.2614 15.5769 9.39253 15.5769ZM8.9894 7.2909C9.93301 7.2909 10.698 8.05592 10.698 8.99953C10.698 9.94315 9.93301 10.7075 8.9894 10.7075C8.04578 10.7075 7.28148 9.94315 7.28148 8.99953C7.28148 8.05592 8.04578 7.2909 8.9894 7.2909Z"
            fill="black"
          />
        </svg>
      ),
      title: "Settings",
      path: "/settings",
    },
    {
      id: 3,
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.1886 10.5228C15.1827 10.546 15.1762 10.5691 15.1691 10.5922C14.9247 11.3793 14.5135 12.2108 13.9471 13.0644C13.7111 13.4639 13.3351 13.7498 12.8858 13.8696C12.8351 13.8833 12.7841 13.8947 12.7328 13.9038C11.7625 15.5585 10.711 15.7501 9.60328 15.7501C9.43782 15.7501 9.27097 15.7459 9.10274 15.7411L9.04818 15.7397C8.88964 15.7359 8.72681 15.7321 8.55858 15.7321C8.27196 15.7321 8.03934 15.4994 8.03934 15.2128C8.03934 14.9262 8.27196 14.6936 8.55858 14.6936C8.7552 14.6936 8.94558 14.6984 9.12905 14.7033C10.2284 14.7326 10.9035 14.7495 11.6152 13.7295C11.5929 13.7179 11.5708 13.7057 11.549 13.6931C10.7099 13.2077 10.4212 12.1298 10.9051 11.2893L11.9484 9.48171C12.4324 8.64193 13.511 8.35185 14.3521 8.83578L14.4101 8.86943C14.4118 8.81252 14.4127 8.7554 14.4127 8.69822C14.4127 5.71503 11.9841 3.28847 8.99813 3.28847C6.01496 3.28847 3.5884 5.71503 3.5884 8.69822C3.5884 8.75609 3.58929 8.81383 3.59108 8.87136L3.64968 8.83765C4.49223 8.35303 5.56947 8.64311 6.05478 9.48289L7.09741 11.2898C7.58272 12.1303 7.29402 13.2089 6.45425 13.6942C6.18286 13.8514 5.88101 13.931 5.5757 13.931C5.4227 13.931 5.26901 13.9109 5.11739 13.8708C4.66877 13.7503 4.29284 13.4644 4.05676 13.0649C3.5646 12.3237 3.18951 11.6001 2.94007 10.9086C2.6812 10.2038 2.54993 9.46059 2.54993 8.69822C2.54993 5.14249 5.44242 2.25 8.99813 2.25C12.5566 2.25 15.4512 5.14249 15.4512 8.69822C15.4512 9.32185 15.3631 9.93275 15.1886 10.5228Z"
            fill="black"
          />
        </svg>
      ),
      title: "Support",
      path: "/support",
    },
    {
      id: 4,
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.4594 1.97998H9.03941C7.41941 1.97998 6.10181 3.29758 6.10181 4.91758V8.27998H10.2706L9.14741 7.16398C8.93861 6.94798 8.93141 6.60958 9.14741 6.39358C9.35621 6.18478 9.69461 6.18478 9.91061 6.39358L11.9626 8.43838C12.0634 8.53918 12.121 8.67598 12.121 8.81998C12.121 8.96398 12.0634 9.10078 11.9626 9.20158L9.91061 11.2464C9.80261 11.3544 9.66581 11.4048 9.52901 11.4048C9.39221 11.4048 9.24821 11.3472 9.14741 11.2464C8.93141 11.0304 8.93861 10.692 9.14741 10.4832L10.2706 9.35998H6.10181V12.7224C6.10181 14.3424 7.41221 15.66 9.03221 15.66H12.4522C14.0794 15.66 15.397 14.3424 15.397 12.7224V4.91758C15.397 3.29758 14.0794 1.97998 12.4594 1.97998Z"
            fill="#E42B30"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.14315 8.28027C2.84795 8.28027 2.60315 8.52507 2.60315 8.82027C2.60315 9.12267 2.84795 9.36027 3.14315 9.36027H6.10235V8.28027H3.14315Z"
            fill="#E42B30"
          />
        </svg>
      ),
      title: "Log out",
      path: "/logout",
    },
  ];

  return (
    <div className="flex justify-between items-center gap-2 h-[10vh]">
      <Link
        className="font-semibold text-textAccent cursor-pointer"
        href="/"
        onClick={() => setDropFlag(false)}
      >
        ENGAGE
      </Link>
      <div className="hidden md:flex justify-center items-center gap-8 font-semibold leading-[22px] h-full text-textHeader text-[14px]">
        {links.map((item) => {
          return (
            <div key={item.id} className="h-full">
              <div className="relative h-full flex justify-center items-center">
                <Link
                  href={item.path}
                  className={`flex justify-center items-center gap-1 h-full ${
                    pathname === item.path
                      ? "font-bold border-black border-b-2"
                      : ""
                  }`}
                  onClick={() => setDropFlag(false)}
                >
                  {item.title}
                </Link>{" "}
                {item.id == 2 ? (
                  <div>
                    {" "}
                    <svg
                      className="cursor-pointer"
                      onClick={() => {
                        setDropFlag(!dropFlag);
                      }}
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5 6.5L8.5 9.5L5.5 6.5"
                        stroke="#333333"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {dropFlag && (
                      <div
                        className={` absolute top-[100%] flex flex-col justify-start items-start gap-2 left-0 w-[120px] py-2 px-2 bg-[#F8F9FC] rounded-b-lg ${
                          dropFlag ? "block" : "hidden"
                        }`}
                      >
                        <Link
                          className={`w-full border border-slate-200 rounded-lg p-2 h-full ${
                            pathname === item.path
                              ? "font-bold border-black border-b-2"
                              : ""
                          }`}
                          href={"/explore"}
                          onClick={() => setDropFlag(false)}
                        >
                          Option 01
                        </Link>
                        <Link
                          className={`w-full border border-slate-200 rounded-lg p-2 h-full ${
                            pathname === item.path
                              ? "font-bold border-black border-b-2"
                              : ""
                          }`}
                          href={"/explore"}
                          onClick={() => setDropFlag(false)}
                        >
                          Option 02
                        </Link>
                      </div>
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center gap-2 relative h-full">
        <div>
          <svg
            className="cursor-pointer"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="33"
              height="33"
              rx="2.28261"
              stroke="#E0E0E0"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17 21.8731C21.6993 21.8731 23.8734 21.2703 24.0833 18.8505C24.0833 16.4324 22.5676 16.5879 22.5676 13.621C22.5676 11.3035 20.371 8.66675 17 8.66675C13.629 8.66675 11.4324 11.3035 11.4324 13.621C11.4324 16.5879 9.91666 16.4324 9.91666 18.8505C10.1275 21.2794 12.3015 21.8731 17 21.8731Z"
              stroke="#1F1F1F"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.9907 24.3809C17.8539 25.6431 16.0805 25.6581 14.9329 24.3809"
              stroke="#1F1F1F"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex justify-center items-center gap-2">
          <img src="avatar.png" alt="" />

          <button
            className="flex justify-center items-center gap-1 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            onBlur={() => setIsMenuOpen(false)}
          >
            <h1 className="text-[14px] leading-[21px] font-medium">
              Liam Jashuwa
            </h1>
            <svg
              className="cursor-pointer"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 11L12 14L9 11"
                stroke="#1F1F1F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div
          className={classNames(
            "absolute top-[100%] left-0 w-full py-4 px-2 menu rounded-lg border border-slate-200 z-20 bg-white",
            { "menu-open": isMenuOpen },
            { "opacity-100": isMenuOpen, "opacity-0": !isMenuOpen }
          )}
        >
          {menuOptions.map((item) => {
            return (
              <button
                key={item.id}
                className="py-3 px-2 flex justify-start items-center gap-2 w-full border border-slate-200 rounded-lg my-1"
              >
                {item.icon}
                <h3 className="text-[12px] leading-[18px] font-[400]">
                  {item.title}
                </h3>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
