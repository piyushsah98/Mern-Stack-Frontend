import React from "react";

const destinations = [
  {
    id: 1,
    place: "Bali, Indonesia",
    description: "Relax on beautiful beaches and enjoy tropical sunsets.",
  },
  {
    id: 2,
    place: "Swiss Alps",
    description: "Experience breathtaking mountains and snowy adventures.",
  },
  {
    id: 3,
    place: "Paris, France",
    description: "Discover the city of love with iconic landmarks and cafés.",
  },
];

const Journey = () => {
  return (
    <section className="h-full bg-slate-100 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-slate-800">
            Start Your Journey
          </h1>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Every destination has a story. Choose your next adventure and
            explore the world's most beautiful places.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition"
            >
              <img
                src={`https://images.unsplash.com/photo-1784284447330-1f936a5a204b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                alt={item.place}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-3">{item.place}</h2>

                <p className="text-gray-600 mb-6">{item.description}</p>

                <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
