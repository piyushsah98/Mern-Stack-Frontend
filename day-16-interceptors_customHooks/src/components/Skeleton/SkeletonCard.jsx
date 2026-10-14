import React from "react";

const SkeletonCard = () => {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden">
      <div className="h-48 bg-gray-800 animate-pulse" />
      <div className="p-4">
        <div className="h-4 bg-gray-800 rounded w-3/4 mb-3 animate-pulse" />
        <div className="h-3 bg-gray-800 rounded w-1/2 mb-4 animate-pulse" />
        <div className="flex items-center justify-between">
          <div className="h-8 bg-gray-800 rounded w-1/3 animate-pulse" />
          <div className="h-8 bg-gray-800 rounded w-1/6 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
