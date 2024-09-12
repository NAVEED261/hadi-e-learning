import Footer from './(group)/component/footer'; // Import the Footer
import Navbar from './(group)/component/navbar'; // Import the Navbar
import Hero from './(group)/hero/page'; // Import the Hero
import Source from './(group)/source/page';
import Statistics from './(group)/statistics/page'; // Import the Statistics

export default function Home() {
  return (
    <div>
      {/* Render Navbar at the top */}
      <Navbar />

      {/* Render Hero Section */}
      <Hero />

      {/* Main Content Start */}
      <main className="flex flex-col items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-5xl text-center">
          <h1 className="text-4xl font-bold mb-8">Welcome to Hadi E-learning</h1>
          <p className="text-lg text-gray-700 mb-6">
            Explore our programs, workshops, blogs, and more to transform your career.
          </p>

          {/* Render Statistics Section */}
          <Statistics />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold">Programs</h2>
              <p className="mt-4 text-gray-600">Explore our extensive range of programs designed to boost your skills.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold">Workshops</h2>
              <p className="mt-4 text-gray-600">Join our interactive workshops for hands-on learning experiences.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold">Blogs</h2>
              <p className="mt-4 text-gray-600">Read our latest articles and blogs to stay updated with the industry.</p>
            </div>
          </div>
        </div>
      </main>
      {/* Main Content End */}
      
      {/* Render Footer at the bottom */}
      <Source/>
      <Footer />
    </div>
  );
}
