import React, { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import AppCard from '../../ui/AppCard';
import useApps from '../../hooks/useApps';

const Apps = () => {

  const {loading,apps} = useApps();
  console.log(apps, 'useApps');

  return (
    <section className="bg-gray-100 min-h-screen py-12 mt-20 px-4">
      {/* Header */}
      <div className="text-center mb-15">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Our All Applications</h1>
        <p className="text-gray-500 text-sm">
          Explore All Apps on the Market developed by us. We code for Millions
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

export default Apps;