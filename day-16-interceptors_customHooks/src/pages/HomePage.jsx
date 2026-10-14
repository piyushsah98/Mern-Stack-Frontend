import React from "react";
import { NavLink } from "react-router";
import { ArrowRight } from "lucide-react";

const HomePage = () => {
  return (
    <div className="flex-1 bg-[#0f0f0f] text-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <div className="space-y-6">
          <span className="inline-block bg-lime-400/10 text-lime-400 px-4 py-2 rounded-full text-sm font-medium">
            🔥 Summer Sale 2026
          </span>

          <h1 className="text-6xl font-bold leading-tight">
            Discover Fashion That Defines{" "}
            <span className="text-lime-400">Your Style.</span>
          </h1>

          <p className="text-zinc-400 text-lg">
            Explore thousands of premium products with exclusive discounts,
            latest trends, and lightning-fast delivery.
          </p>

          <div className="flex gap-4">
            <NavLink
              to="/shop"
              className="bg-lime-400 text-black px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-lime-300 transition"
            >
              Shop Now
              <ArrowRight size={18} />
            </NavLink>

            <button className="border border-zinc-700 px-8 py-4 rounded-xl hover:border-lime-400 transition">
              View Collection
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=900"
            alt="Shopping Banner"
            className="rounded-3xl w-full h-[600px] object-cover"
          />
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8">Shop By Category</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Fashion",
            "Electronics",
            "Beauty",
            "Furniture",
            "Groceries",
            "Accessories",
            "Shoes",
            "Watches",
          ].map((category) => (
            <div
              key={category}
              className="bg-[#1b1b1b] border border-zinc-800 rounded-2xl p-8 text-center hover:border-lime-400 hover:-translate-y-1 transition cursor-pointer"
            >
              <h3 className="text-lg font-semibold">{category}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Offer Banner */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-lime-400 text-black rounded-3xl p-12 flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold">Up to 60% OFF</h2>
            <p className="mt-2 text-lg">
              Grab your favourite products before the offer ends.
            </p>
          </div>

          <NavLink
            to="/shop"
            className="bg-black text-white px-8 py-4 rounded-xl font-semibold"
          >
            Explore Deals
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default HomePage;