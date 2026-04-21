import React from "react";
import { useParams } from "react-router";
import useApps from "../../hooks/useApps";
import { InfinitySpin } from "react-loader-spinner";

// ── helpers ──────────────────────────────────────────────────────────────────
const formatCount = (n) => {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  return String(n);
};

const Stars = ({ value }) => {
  const full = Math.floor(value);
  const half = value % 1 >= 0.5;
  return (
    <span className="flex items-center gap-0.5">
      {Array.from({ length: 5 }, (_, i) => {
        const filled = i < full;
        const isHalf = !filled && i === full && half;
        return (
          <svg key={i} viewBox="0 0 16 16" className="w-4 h-4">
            {isHalf ? (
              <>
                <defs>
                  <linearGradient id={`h${i}`}>
                    <stop offset="50%" stopColor="#f59e0b" />
                    <stop offset="50%" stopColor="#e5e7eb" />
                  </linearGradient>
                </defs>
                <path
                  d="M8 1.5l1.86 3.78L14 6.13l-3 2.92.71 4.12L8 11.14l-3.71 2.03.71-4.12L2 6.13l4.14-.85L8 1.5z"
                  fill={`url(#h${i})`}
                />
              </>
            ) : (
              <path
                d="M8 1.5l1.86 3.78L14 6.13l-3 2.92.71 4.12L8 11.14l-3.71 2.03.71-4.12L2 6.13l4.14-.85L8 1.5z"
                fill={filled ? "#f59e0b" : "#e5e7eb"}
              />
            )}
          </svg>
        );
      })}
    </span>
  );
};

// ── sub-components ────────────────────────────────────────────────────────────
const StatBlock = ({ label, value }) => (
  <div className="flex flex-col gap-0.5">
    <span className="text-[11px] text-gray-400 font-medium uppercase tracking-wide">{label}</span>
    <span className="text-2xl font-bold text-gray-900 leading-none">{value}</span>
  </div>
);

const RatingBar = ({ name, count, maxCount }) => {
  const pct = maxCount > 0 ? Math.round((count / maxCount) * 100) : 0;
  return (
    <div className="flex items-center gap-3 mb-2">
      <span className="text-xs text-gray-400 font-medium w-10 text-right flex-shrink-0">{name}</span>
      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-indigo-500 transition-all duration-700"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-xs text-gray-300 w-12 text-right flex-shrink-0">
        {formatCount(count)}
      </span>
    </div>
  );
};

// ── main component ────────────────────────────────────────────────────────────
const AppDetails = () => {
  const { id } = useParams();
  const { loading, apps } = useApps();

  if (loading) {
    return (
      <div className="col-span-full flex justify-center items-center h-64">
        <InfinitySpin width="200" color="#4fa94d" />
      </div>
    );
  }

  const app = apps.find((a) => a.id == id);

  if (!app) {
    return (
      <div className="min-h-screen bg-[#f4f4f0] flex items-center justify-center">
        <p className="text-gray-400 text-sm">App not found.</p>
      </div>
    );
  }

  const maxCount = Math.max(...app.ratings.map((r) => r.count));
  // show ratings highest first (5 star → 1 star)
  const sortedRatings = [...app.ratings].reverse();

  return (
    <div className="min-h-screen  bg-[#f4f4f0] flex items-start justify-center p-8">
      <div className="bg-white rounded-2xl w-full max-w-3xl shadow-lg overflow-hidden">

        {/* ── Header ── */}
        <div className="flex items-start gap-5 px-7 pt-7 pb-6 border-b border-gray-100">
          {/* App icon */}
          <div className="w-[88px] h-[88px] rounded-[18px] bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0 overflow-hidden">
            <img
              src={app.image}
              alt={app.title}
              className="w-full h-full object-contain"
              onError={(e) => { e.target.style.display = "none"; }}
            />
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <h1 className="font-serif text-[22px] text-gray-900 leading-tight mb-1 truncate">
              {app.title}
            </h1>
            <p className="text-[13px] text-gray-400">
              Developed by{" "}
              <span className="text-indigo-500 font-medium">{app.companyName}</span>
            </p>

            {/* Stats row */}
            <div className="flex items-center gap-6 mt-4 flex-wrap">
              <StatBlock label="Downloads" value={app.downloads} />
              <div className="w-px h-10 bg-gray-100" />
              <StatBlock label="Reviews" value={app.reviews} />
              <div className="w-px h-10 bg-gray-100" />
              <StatBlock label="Size" value={`${app.size} MB`} />
            </div>

            {/* Rating + install */}
            <div className="flex items-center gap-4 mt-4 flex-wrap">
              <div className="flex items-center gap-2">
                <Stars value={app.ratingAvg} />
                <span className="text-sm font-semibold text-gray-700">{app.ratingAvg}</span>
              </div>
              <button className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all">
                <svg viewBox="0 0 15 15" fill="none" className="w-[14px] h-[14px]">
                  <path d="M7.5 1v8M7.5 9l-3-3m3 3l3-3" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12h11" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
                Install Now
              </button>
            </div>
          </div>
        </div>

        {/* ── Ratings breakdown ── */}
        <div className="px-7 py-6 border-b border-gray-100">
          <h2 className="text-[15px] font-bold text-gray-900 mb-4 tracking-tight">Ratings</h2>
          {sortedRatings.map((r) => (
            <RatingBar key={r.name} name={r.name} count={r.count} maxCount={maxCount} />
          ))}
        </div>

        {/* ── Description ── */}
        <div className="px-7 py-6">
          <h2 className="text-[15px] font-bold text-gray-900 mb-3 tracking-tight">Description</h2>
          <p className="text-[13.5px] leading-[1.8] text-gray-500">{app.description}</p>
        </div>

      </div>
    </div>
  );
};

export default AppDetails;