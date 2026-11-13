import React from "react";

const Stats = [
  { count: "5K", label: "Active Students" },
  { count: "10+", label: "Mentors" },
  { count: "200+", label: "Courses" },
  { count: "50+", label: "Awards" },
];

const StatsComponenet = () => {
  return (
    <div className="bg-brown-700 text-cream-50">
      {/* Stats */}
      <div className="flex flex-col justify-between w-11/12 max-w-maxContent mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 text-center divide-y md:divide-y-0 md:divide-x divide-brown-600/50">
          {Stats.map((data, index) => {
            return (
              <div className="flex flex-col py-6 sm:py-10" key={index}>
                <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-babyblue-300">
                  {data.count}
                </h1>
                <h2 className="font-semibold text-xs sm:text-sm lg:text-[16px] text-cream-200 mt-1">
                  {data.label}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatsComponenet;
