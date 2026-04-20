import React, { use, useEffect, useState } from 'react';
import AppCard from '../../ui/AppCard';
import { InfinitySpin } from 'react-loader-spinner';
import useApps from '../../hooks/useApps';

// const appsPromis = fetch('/data.json').then(res => res.json());

const TrendingApps = () => {
  // const apps = use(appsPromis)
  // console.log(apps)
  const {loading,apps} = useApps();

  return (
    <section className="bg-gray-100 min-h-screen py-12 px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Trending Apps</h1>
        <p className="text-gray-500 text-sm">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* Grid Container */}
      <div className="container mx-auto px-4 py-6 bg-base-200 rounded-2xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {loading ? (
            <div className="col-span-full flex justify-center items-center h-64">
              <InfinitySpin width="200" color="#4fa94d" />
            </div>
          ) : null}
          {apps.map((app, ind) => (
            <AppCard key={ind} app={app}></AppCard>
          ))}

        </div>

        {/* Show All Button */}
        <div className='flex justify-center mt-10'>
          <button disabled={loading} className="btn btn-primary btn-lg rounded-md px-6 ">
            Show All
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingApps;