import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" passHref>
              <Image
                className="h-12 w-auto cursor-pointer transform hover:scale-110 transition-transform duration-300"
                src="/images/logo.svg"
                alt="Logo"
                width={48}
                height={48}
              />
            </Link>
          </div>

          {/* Centered Navbar Links */}
          <div className="flex space-x-8">
            <Link href="/" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-md font-medium transition-colors duration-300">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-md font-medium transition-colors duration-300">
              About
            </Link>
            <Link href="/programs" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-md font-medium transition-colors duration-300">
              Programs
            </Link>
            <Link href="/workshops" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-md font-medium transition-colors duration-300">
              Workshops
            </Link>
            <Link href="/blogs" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-md font-medium transition-colors duration-300">
              Blogs
            </Link>
            <Link href="/how-it-works" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-md font-medium transition-colors duration-300">
              How it works?
            </Link>
          </div>

          {/* Right-Aligned Enroll Now Button */}
          <div>
            <Link href="/enroll" className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white px-5 py-2 rounded-full text-md font-medium shadow-lg transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:bg-gradient-to-r hover:from-purple-600 hover:to-green-400">
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
