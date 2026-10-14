import React from "react";
import { NavLink } from "react-router";
import { Search, ShoppingCart, Heart, User, Menu } from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#111] text-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto min-h-[calc(100vh-80px)] px-6 grid lg:grid-cols-2 items-center gap-10">
        <div>
          <p className="text-lime-400 uppercase tracking-widest mb-3">
            New Collection
          </p>

          <h1 className="text-6xl font-bold leading-tight">
            Discover The Best Products For Your Lifestyle
          </h1>

          <p className="text-zinc-400 mt-6 text-lg">
            Explore thousands of premium products with amazing discounts and
            fast delivery.
          </p>

          <div className="flex gap-4 mt-8">
            <NavLink
              to="/shop"
              className="bg-lime-400 text-black px-8 py-3 rounded-xl font-semibold hover:bg-lime-300 transition"
            >
              Shop Now
            </NavLink>

            <button className="border border-zinc-700 px-8 py-3 rounded-xl hover:border-lime-400 transition">
              Learn More
            </button>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800"
            alt="Hero"
            className="w-full rounded-3xl object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
