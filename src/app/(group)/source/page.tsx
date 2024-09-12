import Link from 'next/link';
import Image from 'next/image';

export default function Source() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-12 lg:px-24">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <Image
            src="/images/hero1.webp" // Replace with your actual image path
            alt="Hadi Mascot"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>

        {/* Right Side: Text */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Get to Know Hadi
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Meet our mascot, Hadi. Hadi is your digital leader and will lead you through specially structured computer short courses that will not only enhance your IT skills but will also help you navigate efficiently through your career path.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Hadis mission is to empower the countrys youth with the strength of modern skills so they can have equal opportunities to excel in their careers as anyone else in the world.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            So join hands with Hadi today, and unlock the door to many shiny prospects in this modern digital world.
          </p>
          <Link href="/about" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition">
            Get To Know Hadi Better &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
