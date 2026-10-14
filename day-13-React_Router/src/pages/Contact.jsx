import React from "react";

const Contact = () => {
  return (
    <section className="h-full bg-linear-to-r from-gray-800 to-sky-900 flex items-center justify-center px-6">
      <div className="w-full max-w-5xl bg-gray-800 rounded-2xl overflow-hidden shadow-2xl grid md:grid-cols-2">
        {/* Left */}
        <div className="bg-gray-700 text-white p-10 flex flex-col justify-center">
          <h1 className="text-5xl font-bold mb-5">
            Contact Us
          </h1>

          <p className="text-lg">
            Have questions about your next trip? We'd love to hear from you.
            Reach out and we'll help you plan your perfect vacation.
          </p>

          <div className="mt-10 space-y-3">
            <p>📍 Bengaluru, India</p>
            <p>📞 +91 98765 43210</p>
            <p>✉️ travelgo@email.com</p>
          </div>
        </div>

        {/* Right */}
        <div className="p-10 text-white">
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded-lg "
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-3 rounded-lg"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border p-3 rounded-lg"
            ></textarea>

            <button className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;