import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";

const ProductDetail = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams(); // useParams catch the dynamic url and value

  const getSingleProduct = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setSingleProduct(res.data);
    } catch (error) {
      console.log("Detail api error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return (
    <section className="h-[91vh] bg-gray-900 flex justify-center items-center">
      <div className="max-w-7xl h-[90%] bg-white text-black rounded-3xl shadow-lg overflow-hidden">
        <div className="grid lg:grid-cols-2">
          {/* Left Side */}
          <div className="bg-gray-100 flex items-center justify-center p-8">
            {isLoading ? (
              <div className="w-100 h-100 rounded-xl bg-gray-300 animate-pulse"></div>
            ) : (
              <img
                src={singleProduct.image}
                alt={singleProduct.title}
                className="w-full max-w-sm max-h-[400px] object-contain"
              />
            )}
          </div>

          {/* Right Side */}
          <div className="p-5 flex flex-col justify-center">
            <span className="text-blue-600 uppercase font-medium tracking-wider">
              {singleProduct.category}
            </span>

            <h1 className="text-4xl font-bold mt-3 line-clamp-1">
              {singleProduct.title}
            </h1>

            <div className="flex items-center gap-3 mt-5">
              <div className="flex items-center gap-1 bg-yellow-100 px-3 py-1 rounded-full">
                <FaStar className="text-yellow-500" />
                <span>{singleProduct.rating?.rate}</span>
              </div>

              <span className="text-gray-500">
                ({singleProduct.rating?.count} Reviews)
              </span>
            </div>

            <h2 className="text-5xl font-bold text-green-600 mt-8">
              ${singleProduct.price}
            </h2>

            <p className="text-gray-600 leading-8 mt-8 line-clamp-2">
              {singleProduct.description}
            </p>

            <div className="flex gap-5 mt-10">
              <button className="flex-1 bg-slate-900 text-white py-2 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-slate-700 transition">
                <FaShoppingCart />
                Add to Cart
              </button>

              <button className="w-16 h-16 rounded-xl border border-gray-300 flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition">
                <FaHeart />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center p-5 bg-gray-50 rounded-xl">
                <h3 className="font-bold text-xl">Free</h3>
                <p className="text-sm text-gray-500 mt-2">Shipping</p>
              </div>

              <div className="text-center p-5 bg-gray-50 rounded-xl">
                <h3 className="font-bold text-xl">30 Days</h3>
                <p className="text-sm text-gray-500 mt-2">Return</p>
              </div>

              <div className="text-center p-5 bg-gray-50 rounded-xl">
                <h3 className="font-bold text-xl">Secure</h3>
                <p className="text-sm text-gray-500 mt-2">Payment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
