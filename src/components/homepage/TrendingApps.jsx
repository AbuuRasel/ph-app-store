import React, { use, useEffect, useState } from 'react';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { GoStarFill } from 'react-icons/go';
// const appsPromis = fetch('/data.json').then(res => res.json());

const TrendingApps = () => {
  // const apps = use(appsPromis)
  // console.log(apps)
  const [apps, setApps] = useState([]);
  useEffect(() => {

    const fetchData = async () => {
      const res = await fetch('/data.json');
      const data = await res.json();
      setApps(data)
    }
    fetchData()

  }, [])
  console.log(apps)

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

          {apps.map((app, ind) => (
            <div
              key={ind}
              className="bg-base-100 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
            >
              {/* Image */}
              <div className="w-full aspect-[4/3] bg-gray-200">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-3 space-y-2">
                <h2 className="text-sm font-semibold line-clamp-2">
                  {app.title}
                </h2>

                <div className="flex items-center justify-between text-xs">
                  {/* Downloads */}
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded flex items-center gap-1">
                    <FaCloudDownloadAlt /> {app.downloads}
                  </span>

                  {/* Rating */}
                  <span className="bg-orange-100 text-orange-500 px-2 py-1 rounded flex items-center gap-1">
                    <GoStarFill /> {app.ratingAvg}
                  </span>
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Show All Button */}
        <div className="flex justify-center mt-6">
          <button className="btn btn-primary btn-sm px-6">
            Show All
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingApps;