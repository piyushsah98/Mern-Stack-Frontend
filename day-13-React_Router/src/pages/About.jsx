import React from "react";

const About = () => {
  return (
    <section className="h-full bg-linear-to-r from-gray-800 to-sky-900 flex items-center justify-center px-8">
      <div className="max-w-5xl text-center">
        <h1 className="text-5xl font-bold mb-8 text-slate-200">
          About TravelGo
        </h1>

        <p className="text-lg text-slate-2900leading-9">
          TravelGo is your trusted travel companion. We help you explore
          beautiful destinations across the globe with ease. From mountain
          adventures to relaxing beach vacations, we make every journey
          memorable. Our mission is to inspire people to travel more and
          experience the beauty of different cultures and places.
        </p>

        <div className="grid grid-cols-3 gap-8 mt-14">
          <div className="bg-gray-800/80 shadow-lg rounded-xl p-8">
            <h2 className="text-4xl font-bold text-ss">50+</h2>
            <p className="mt-3">Countries Covered</p>
          </div>

          <div className="bg-gray-800/80 shadow-lg rounded-xl p-8">
            <h2 className="text-4xl font-bold text-s">10K+</h2>
            <p className="mt-3">Happy Travelers</p>
          </div>

          <div className="bg-gray-800/80 shadow-lg rounded-xl p-8">
            <h2 className="text-4xl font-bold text-s">24/7</h2>
            <p className="mt-3">Customer Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;