import React from "react";
import { Outlet, useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate()
  return (
    <section className="">
      <div className="h-[91vh] bg-linear-to-r from-gray-800 to-sky-900 text-white flex items-center justify-center">
        <div className="text-center px-6 ">
          <h1 className="text-6xl font-bold mb-6">
            Explore the World
          </h1>

          <p className="text-xl max-w-2xl mx-auto mb-8">
            Discover breathtaking destinations, plan unforgettable journeys, and
            create memories that last a lifetime.
          </p>

          <button 
          onClick={() => navigate('/journey')}
          className="px-8 py-4 bg-white text-blue-700 rounded-lg font-semibold hover:bg-gray-200 transition">
            Start Your Journey
          </button>
        </div>
      </div>
      <Outlet />
    </section>
  );
};

export default Home;