import React from "react";

const UserSkeleton = () => {
  return (
    <div className="bg-gray-700 rounded-xl overflow-hidden animate-pulse">
      {/* Header */}
      <div className="h-20 bg-gray-600 relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-8 w-24 h-24 rounded-full bg-gray-500 border-4 border-gray-700"></div>
      </div>

      <div className="pt-16 pb-6 px-5">
        {/* Name */}
        <div className="h-6 w-40 bg-gray-600 rounded mx-auto"></div>

        {/* Designation */}
        <div className="h-4 w-28 bg-gray-600 rounded mx-auto mt-3"></div>

        {/* Email */}
        <div className="flex items-center gap-3 mt-8">z
          <div className="w-4 h-4 rounded bg-gray-600"></div>
          <div className="h-4 flex-1 bg-gray-600 rounded"></div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3 mt-4">
          <div className="w-4 h-4 rounded bg-gray-600"></div>
          <div className="h-4 w-32 bg-gray-600 rounded"></div>
        </div>

        {/* Address */}
        <div className="flex items-center gap-3 mt-4">
          <div className="w-4 h-4 rounded bg-gray-600"></div>
          <div className="h-4 flex-1 bg-gray-600 rounded"></div>
        </div>

        {/* Button */}
        <div className="mt-8 h-12 w-full bg-gray-600 rounded-lg"></div>
      </div>
    </div>
  );
};

export default UserSkeleton;