// File: /src/app/group/how-it-works/page.tsx
import Navbar from '../component/navbar';

export default function How() {
  return (
    <div>
      <Navbar />
      <main className="p-8">
        <section className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">How Hadi E-Learning Works</h1>
          <p className="mt-4 text-lg text-gray-600">
            Our platform provides free, high-quality IT training that prepares you for a successful career in technology.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-blue-600">Step 1: Register</h2>
            <p className="mt-4 text-gray-600">
              Sign up for free on our platform and explore a variety of programs in IT, web development, and automation.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-blue-600">Step 2: Choose a Program</h2>
            <p className="mt-4 text-gray-600">
              Select a program that fits your needs, from basic IT skills to advanced web development and automation techniques.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-blue-600">Step 3: Start Learning</h2>
            <p className="mt-4 text-gray-600">
              Begin learning through our interactive workshops, tutorials, and real-world projects designed to enhance your skills.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-blue-600">Step 4: Complete Assignments</h2>
            <p className="mt-4 text-gray-600">
              Work on real-world assignments and projects to solidify your understanding and gain practical experience.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-blue-600">Step 5: Earn Certification</h2>
            <p className="mt-4 text-gray-600">
              Upon completion of your course, earn a certificate to showcase your new skills to potential employers.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-8 mt-12 text-center">
        <p>&copy; 2024 Hadi E-Learning. All rights reserved.</p>
      </footer>
    </div>
  );
}
