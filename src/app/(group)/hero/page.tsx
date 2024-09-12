"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);

  const texts = [
    "providing you training",
    "providing you Free IT",
    "providing you quality"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-12 lg:px-24">
        {/* Left Side: Text */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Hadi E-learning <span className="text-blue-600 transition-all duration-1000 ease-in-out">{texts[textIndex]}</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Transform your future with free IT training.
          </p>
          <div className="flex space-x-4">
            <Link href="/about" className="px-6 py-3 bg-transparent border border-blue-600 text-blue-600 rounded-md font-medium hover:bg-blue-600 hover:text-white transition">
              About Us
            </Link>
            <Link href="/programs" className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition">
              Programs &rarr;
            </Link>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/images/tickets.webp" // Replace with your actual image path
            alt="Hero Image"
            width={500}
            height={300}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
