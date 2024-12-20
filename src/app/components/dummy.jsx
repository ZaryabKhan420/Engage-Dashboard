// Center

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
        <h1 className="text-xs sm:text-sm font-bold w-[15%] text-right">New</h1>

        <div className="p-1 rounded-lg border border-slate-200 flex justify-start items-center gap-2 w-[85%]">
          <p className="h-full w-[70%] bg-textAccent rounded-md">&nbsp;</p>
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
      <div className="flex justify-between items-center gap-2 flex-wrap md:flex-nowrap">
        <div className="w-[100%] md:w-[60%]">
          <SearchBar onSearch={setSearch} />
        </div>
        <div className="w-[100%] md:w-[40%] flex justify-center items-center gap-2 flex-wrap md:flex-nowrap">
          <Select options={["Tenants", "Tenants2", "Tenants3"]} />
          <Select options={["Newest", "Last modified", "Shortest SLA"]} />
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
              <h1 className="w-[50%] md:w-[20%] text-[12px]">{item.name}</h1>

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
</div>;

// Left
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
      <div className="flex justify-between items-start w-full flex-wrap gap-2">
        <PrimaryHeading
          title="My Performance"
          fontSize="14px"
          fontWeight="bold"
          lineHeight="21px"
        />
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
</div>;
