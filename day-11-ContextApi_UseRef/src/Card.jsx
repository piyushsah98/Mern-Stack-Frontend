import React, { useEffect } from "react";

const Card = ({ product }) => {
    return (
        <div className="w-80 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
            {/* Product Image */}
            <div className="bg-gray-100 h-64 flex items-center justify-center">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-56 object-contain"
                />
            </div>

            {/* Product Details */}
            <div className="p-5">
                {/* Category */}
                <span className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded-full">
                    {product.category}
                </span>

                {/* Title */}
                <h2 className="text-xl font-bold mt-3 line-clamp-2">
                    {product.title}
                </h2>

                {/* Brand */}
                <p className="text-gray-500 mt-1">
                    Brand: <span className="font-medium">{product.brand}</span>
                </p>

                {/* Description */}
                <p className="text-gray-600 text-sm mt-3 line-clamp-3">
                    {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center justify-between mt-4">
                    <span className="text-yellow-500 font-semibold">
                        ⭐ {product.rating}
                    </span>

                    <span
                        className={`text-sm font-medium ${product.stock > 0 ? "text-green-600" : "text-red-600"
                            }`}
                    >
                        {product.availabilityStatus}
                    </span>
                </div>

                {/* Price */}
                <div className="flex justify-between items-center mt-5">
                    <div>
                        <h3 className="text-2xl font-bold text-green-600">
                            ${product.price}
                        </h3>
                        <p className="text-sm text-red-500">
                            {product.discountPercentage}% OFF
                        </p>
                    </div>

                    <p className="text-sm text-gray-500">
                        Stock: {product.stock}
                    </p>
                </div>

                {/* Button */}
                <button className="w-full mt-6 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Card;