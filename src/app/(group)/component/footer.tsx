import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Left Side: Logo and Description */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <img
              src="/images/logo.svg" // Replace with your actual logo path
              alt="Hadi E-Learning Logo"
              className="mb-4"
            />
            <p className="text-gray-600">
              Your Digital Hadi
            </p>
          </div>

          {/* Center: Menu */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="font-bold text-gray-800 mb-4">MENU</h4>
            <ul className="text-gray-600 space-y-2">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/programs">Programs</Link></li>
              <li><Link href="/workshops">Workshops</Link></li>
              <li><Link href="/how-it-works">How it works?</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/blogs">Blogs</Link></li>
              <li><Link href="/faqs">FAQs</Link></li>
            </ul>
          </div>

          {/* Right Side: Contact and Terms */}
          <div className="w-full md:w-1/3">
            <h4 className="font-bold text-gray-800 mb-4">Terms</h4>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li><Link href="/privacy-policy">Privacy & Policy</Link></li>
              <li><Link href="/disclaimer">Disclaimer</Link></li>
              <li><Link href="/dmca">DMCA</Link></li>
              <li><Link href="/terms">Terms And Conditions</Link></li>
            </ul>
            <h4 className="font-bold text-gray-800 mb-4">Contact</h4>
            <ul className="text-gray-600 space-y-2">
              <li>Email: <a href="mailto:info@hadielearning.com">info@hadielearning.com</a></li>
              <li>Phone: 03-1111-93339</li>
              <li>Address: Hadi E-Learning, Civic Center, Faisal Town Lahore.</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-gray-600">
          <p>Copyright © Hadi E-Learning | Developed by Cycarts</p>
          <p>A project by Ideas9</p>
        </div>
      </div>
    </footer>
  );
}
