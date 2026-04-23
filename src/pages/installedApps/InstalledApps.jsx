import React, { useContext, useState } from 'react';
import { installedAppsContext } from '../../context/InstalledAppsProvider';
import { Link } from 'react-router';
import { toast } from 'react-toastify';


const InstalledApps = () => {
  const { installedApps, setInstalledApps } = useContext(installedAppsContext);
  console.log(installedApps);

  if (installedApps.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] text-center">

        <div className="bg-white p-10 rounded-2xl shadow-lg max-w-md">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076505.png"
            alt="empty"
            className="w-24 mx-auto mb-4 opacity-80"
          />

          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            No apps installed
          </h2>

          <p className="text-gray-500 mb-4">
            You haven't installed any apps yet. Start by adding your first app.
          </p>

          <Link to='/apps' className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition">
            Browse Apps
          </Link>
        </div>
      </div>
    );
  }

  const handleUnstall = (app) => {
    const restApp = installedApps.filter(iApp => iApp.id != app.id);
    console.log(restApp);
    setInstalledApps(restApp)
    toast.error(`${app.title} is unstalled Successfully`);
  }



  return <div>
    {
      installedApps.map((app, ind) => {
        return (
          <div key={ind} className="w-[50%] mx-auto flex items-center gap-4 my-8 bg-base-300 rounded-xl px-5 py-4 shadow-sm">
            {/* Icon */}
            <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0 overflow-hidden border border-gray-100">
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-full object-contain"
                onError={(e) => { e.target.style.display = "none"; }}
              />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <p className="text-[15px] font-semibold text-gray-800 truncate">{app.title}</p>
              <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                {/* Downloads */}
                <span className="flex items-center gap-1 text-xs font-medium text-teal-500">
                  <svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5">
                    <path d="M7 1v7M7 8l-2.5-2.5M7 8l2.5-2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 11h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  {app.downloads}
                </span>
                {/* Rating */}
                <span className="flex items-center gap-1 text-xs font-medium text-amber-400">
                  <svg viewBox="0 0 14 14" fill="currentColor" className="w-3.5 h-3.5">
                    <path d="M7 1l1.6 3.3L12 4.9l-2.5 2.4.6 3.4L7 9.1 3.9 10.7l.6-3.4L2 4.9l3.4-.6L7 1z" />
                  </svg>
                  {app.ratingAvg}
                </span>
                {/* Size */}
                <span className="text-xs text-gray-400 font-medium">{app.size} MB</span>
              </div>
            </div>

            {/* Uninstall */}
            <button onClick={() => handleUnstall(app)} className="flex-shrink-0 bg-purple-500 hover:bg-purple-700 active:scale-95 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-all">
              Uninstall
            </button>
          </div>
        )
      })
    }
  </div>
};

export default InstalledApps;