import React from 'react';
import Navbar from '../component/navbar';  // Import your Navbar component
import Footer from '../component/footer';  // Import your Footer component
import Image from 'next/image'; // If you need to use images

export default function Contact() {
  return (
    <>
      <Navbar /> {/* Include Navbar */}
      <div className="relative bg-gray-100 py-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/map-background.jpg" // Replace with your background image path
            alt="Map background"
            layout="fill"
            objectFit="cover"
            className="opacity-30"
          />
        </div>

        <div className="container mx-auto relative px-4 md:px-12 lg:px-24">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-8 text-center">
            Get in Touch
          </h1>
          <div className="flex flex-wrap bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Contact Information */}
            <div className="w-full md:w-1/2 p-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              <h2 className="text-3xl font-semibold mb-4">Contact Information</h2>
              <p className="mb-4">Feel free to reach out to us via email or phone.</p>
              <p className="mb-4">
                <strong>Address:</strong> Hadi E-Learning, Civic Center, Faisal Town Lahore.
              </p>
              <p className="mb-4">
                <strong>Phone:</strong> 03-1111-93339
              </p>
              <p className="mb-4">
                <strong>Email:</strong>{" "}
                <a href="mailto:info@hadielearning.com" className="underline">
                  info@hadielearning.com
                </a>
              </p>
            </div>

            {/* Contact Form */}
            <div className="w-full md:w-1/2 p-8">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium">Your Name</label>
                  <input
                    type="text"
                    className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">Your Email</label>
                  <input
                    type="email"
                    className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">Your Message</label>
                  <textarea
                    className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your message"
                    rows={5} // Fix: use curly braces to pass as number
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer /> {/* Include Footer */}
    </>
  );
}
