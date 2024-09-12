// File: /src/app/group/blog/page.tsx
import Navbar from '../component/navbar';

export default function Blog() {
  return (
    <div>
      <Navbar />
      <main className="p-8">
        <section className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">Our Blog</h1>
          <p className="mt-4 text-lg text-gray-600">
            Stay updated with the latest trends in technology, web development, automation, and AI through our expert-written articles.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-blue-600">The Future of Web Development</h2>
            <p className="mt-4 text-gray-600">
              Discover the latest tools, frameworks, and best practices shaping the future of web development.
            </p>
            <a href="/blog/future-of-web-development" className="text-blue-500 mt-4 block">
              Read More →
            </a>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-blue-600">Automation in Business</h2>
            <p className="mt-4 text-gray-600">
              Learn how automation is transforming business processes, saving time, and increasing efficiency.
            </p>
            <a href="/blog/automation-in-business" className="text-blue-500 mt-4 block">
              Read More →
            </a>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-blue-600">AI and GPT: The Future of Work</h2>
            <p className="mt-4 text-gray-600">
              Explore how AI and GPT are revolutionizing industries, automating processes, and changing the way we work.
            </p>
            <a href="/blog/ai-gpt-future-of-work" className="text-blue-500 mt-4 block">
              Read More →
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-8 mt-12 text-center">
        <p>&copy; 2024 Hadi E-Learning. All rights reserved.</p>
      </footer>
    </div>
  );
}
