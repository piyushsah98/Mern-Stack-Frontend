import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../components/UserCard";
import UserSkeleton from "../components/Skeleton/UserSkeleton";
import useHome from "../hooks/useHome";

const UsersPage = () => {
  const { getUserData, users, isLoading } = useHome();

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="flex bg-[#0f0f0f] py-10 text-white">
      <div className="w-full px-5">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-200">Our Users</h1>

          <p className="text-gray-300 mt-2">{users.length} Users Found</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {isLoading
            ? Array.from({ length: 10 }).map((_, i) => <UserSkeleton key={i} />)
            : users.map((user) => <UserCard key={user.id} user={user} />)}
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
