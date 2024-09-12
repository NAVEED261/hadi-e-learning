import React from 'react';
import Navbar from '../component/navbar';;  // Import your Navbar component
import Footer from '../component/footer'
export default function FAQs() {
  return (
    <>
      <Navbar /> {/* Include Navbar */}
      <div className="container mx-auto py-16 px-4 md:px-12 lg:px-24">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h1>
        <div className="space-y-8">
          <div className="border border-gray-300 rounded-md p-4">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">What is Hadi E-Learning and what does it offer?</h2>
            <p className="text-gray-600">Hadi E-learning is a non-profit initiative that aims to empower the youth of Pakistan by enhancing their digital skills. We have specially structured programs designed by industry experts that will not just improve your IT skill sets but will also give you the right direction to implement them.</p>
          </div>
          <div className="border border-gray-300 rounded-md p-4">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">How can Hadi E-Learning empower Pakistani youth with technical knowledge?</h2>
            <p className="text-gray-600">We provide equal learning opportunities accessible to everyone so they take their first step towards financial independence brimming with confidence.</p>
          </div>
          <div className="border border-gray-300 rounded-md p-4">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Who is Hadi, and what does he symbolize in the context of Hadi E-Learning?</h2>
            <p className="text-gray-600">Hadi symbolizes the guide or mentor who helps individuals navigate their learning journey towards success.</p>
          </div>
          <div className="border border-gray-300 rounded-md p-4">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">What is the mission of Hadi E-Learning?</h2>
            <p className="text-gray-600">Our mission is to provide accessible, high-quality education that empowers youth to achieve financial freedom.</p>
          </div>
          <div className="border border-gray-300 rounded-md p-4">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">How does Hadi E-Learning create opportunities for talented youth?</h2>
            <p className="text-gray-600">Through partnerships with leading companies and organizations, we create internship and job opportunities for our students.</p>
          </div>
        </div>
      </div>
      <Footer /> {/* Include Footer */}
    </>
  );
}
