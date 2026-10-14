import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const UserCard = ({ user }) => {
  return (
    <div className="bg-gray-700 rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300">
      <div className="bg-gradient-to-r from-lime-400/50 to-green-500/50 h-20 relative">
        <img
          src={user.image}
          alt={user.firstName}
          className="w-24 h-24 rounded-full border-4 border-white absolute left-1/2 -translate-x-1/2 top-8 object-cover"
        />
      </div>

      <div className="pt-16 pb-6 px-5 text-center">
        <h2 className="text-xl font-bold text-gray-200">
          {user.firstName} {user.lastName}
        </h2>

        <p className="text-sm text-gray-300 mt-1">{user.company.title}</p>

        <div className="mt-6 space-y-3 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span className="truncate">{user.email}</span>
          </div>

          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>{user.phone}</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>
              {user.address.city}, {user.address.state}
            </span>
          </div>
        </div>

        <button className="w-full mt-6 bg-lime-400/90 hover:bg-lime-300 text-black font-semibold py-3 rounded-lg transition">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default UserCard;
