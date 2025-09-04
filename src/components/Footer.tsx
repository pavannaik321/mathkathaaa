// src/app/components/Footer.tsx

import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0F3D3E] px-6 py-12 border-t border-gray-300 mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="border bg-white border-black p-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + Newsletter */}
          <div className="md:col-span-1 ">
            <h2 className="text-2xl font-bold font-serif">MATHKATHAA</h2>
            <p className="mt-4 text-gray-600">
              Subscribe to our newsletter for the latest updates on features and
              releases.
            </p>
            <form className="mt-4 flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Your Email Here"
                className="flex-1 border border-gray-400 px-4 py-2 text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="mt-2 sm:mt-0 sm:ml-2 border border-gray-900 px-6 py-2 text-gray-900 font-medium hover:bg-gray-100"
              >
                Join
              </button>
            </form>
            <p className="mt-2 text-xs text-gray-500">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li>Home Page</li>
              <li>Our Courses</li>
              <li>Testimonials</li>
              <li>Contact Us</li>
              <li>Blog Posts</li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h4 className="font-semibold text-gray-900">Connect With Us</h4>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li>Facebook Page</li>
              <li>Instagram Feed</li>
              <li>Twitter Profile</li>
              <li>LinkedIn Page</li>
              <li>YouTube Channel</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-semibold text-gray-900">Follow Us</h4>
            <ul className="mt-3 space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <Facebook size={18} /> Facebook
              </li>
              <li className="flex items-center gap-2">
                <Instagram size={18} /> Instagram
              </li>
              <li className="flex items-center gap-2">
                <Twitter size={18} /> X
              </li>
              <li className="flex items-center gap-2">
                <Linkedin size={18} /> LinkedIn
              </li>
              <li className="flex items-center gap-2">
                <Youtube size={18} /> YouTube
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-sm text-white">
          <p>© 2025 Mathkathaa. All rights reserved.</p>
          <div className="flex gap-6 mt-2 md:mt-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
