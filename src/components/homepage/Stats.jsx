import React from 'react';

const Stats = () => {
  const stats = [
    {
      label: "Total Downloads",
      value: "29.6M",
      sub: "21% More Than Last Month",
    },
    {
      label: "Total Reviews",
      value: "906K",
      sub: "46% More Than Last Month",
    },
    {
      label: "Active Apps",
      value: "132+",
      sub: "31 More Will Launch",
    },
  ];
  return (
    <div className="bg-gradient-to-br from-purple-700 via-purple-500 to-purple-400 px-10 py-12 text-center font-sans">
      <h2 className="text-white text-3xl font-bold mb-10">
        Trusted By Millions, Built For You
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
        {stats.map(({ label, value, sub }) => (
          <div key={label}>
            <p className="text-white/75 text-sm mb-2">{label}</p>
            <p className="text-white text-5xl font-extrabold mb-2">{value}</p>
            <p className="text-white/75 text-xs">{sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;