import React from 'react';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { GoStarFill } from 'react-icons/go';
import { Link } from 'react-router';

const AppCard = ({app}) => {
  return (
    <Link to={`/apps/${app.id}`}
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
    </Link>
  );
};

export default AppCard;