import Link from 'next/link';
import Image from 'next/image';

export default function Enroll() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side Image Section */}
      <div className="w-1/2 bg-gradient-to-r from-blue-100 to-blue-300 flex justify-center items-center">
        <Image
          src="/images/26bc0127-e8e2-4cd7-a052-79798694b3c7.webp" // Corrected image path
          alt="Enrollment Image"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>

      {/* Right Side Form Section */}
      <div className="w-1/2 flex justify-center items-center p-8 bg-white">
        <div className="max-w-md w-full">
          <Link href="/" className="text-gray-500 hover:text-gray-700 mb-4 inline-block">
            &larr; Back
          </Link>
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Enrollment Application</h1>

          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gray-700 text-white py-2 rounded-md font-semibold shadow-md transition duration-300 ease-in-out transform hover:bg-gray-800 hover:scale-105"
            >
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
