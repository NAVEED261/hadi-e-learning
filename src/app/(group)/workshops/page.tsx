// File: /src/app/group/workshops/page.tsx
import Navbar from '../component/navbar';

export default function WorkShops() {
  return (
    <div>
      <Navbar />
      <main className="p-8">
        <section className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">Our Workshops</h1>
          <p className="mt-4 text-lg text-gray-600">
            Explore our range of workshops designed to help you develop your skills in web development, automation, and more.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-blue-600">Web Development Workshop</h2>
            <p className="mt-4 text-gray-600">
              Learn to create modern, responsive websites using the latest web technologies, including HTML, CSS, JavaScript, and React.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-blue-600">UI/UX Design Workshop</h2>
            <p className="mt-4 text-gray-600">
              Enhance your design skills and create user-friendly, visually appealing interfaces with our comprehensive UI/UX design training.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-blue-600">Automation Services Workshop</h2>
            <p className="mt-4 text-gray-600">
              Master automation tools like Google Sheets and Zapier to streamline your business processes and improve efficiency.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-blue-600">Full-Stack Development Workshop</h2>
            <p className="mt-4 text-gray-600">
              Dive deep into full-stack development, learning both front-end and back-end technologies to build complete applications.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-blue-600">GPT Expertise Workshop</h2>
            <p className="mt-4 text-gray-600">
              Leverage the power of Generative AI to automate processes, improve productivity, and create innovative solutions.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-blue-600">Stenography Workshop</h2>
            <p className="mt-4 text-gray-600">
              Learn fast and accurate transcription methods to handle documentation and record-keeping needs efficiently.
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
