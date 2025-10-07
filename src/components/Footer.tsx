"use client";

import { useState } from "react";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";
import { toast, Toaster } from "react-hot-toast";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [toastShown, setToastShown] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      if (!toastShown) {
        toast.error("Please enter a valid email address.");
        setToastShown(true);
        setTimeout(() => setToastShown(false), 1000); // reset after 1s
      }
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("🎉 Successfully subscribed!");
        setEmail("");
      } else {
        toast.error(data.message || "Something went wrong!");
      }
    } catch (error) {
      toast.error("⚠️ Failed to connect to server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="w-full bg-[#0F3D3E] px-6 py-12 border-t border-gray-300 mt-10 relative">
      <Toaster position="bottom-right" reverseOrder={false} />
      <div className="max-w-7xl mx-auto">
        <div className="border bg-white border-black p-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + Newsletter */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold font-serif">MATHKATHAAA</h2>
            <p className="mt-4 text-gray-600">
              Subscribe to our newsletter for the latest updates on features and releases.
            </p>
            <form onSubmit={handleSubscribe} className="mt-4 flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Your Email Here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border border-gray-400 px-4 py-2 text-sm focus:outline-none"
              />
              <button
                type="submit"
                disabled={loading}
                className="mt-2 sm:mt-0 sm:ml-2 border border-gray-900 px-6 py-2 text-gray-900 font-medium hover:bg-gray-100 disabled:opacity-50"
              >
                {loading ? "Joining..." : "Join"}
              </button>
            </form>
            <p className="mt-2 text-xs text-gray-500">
              By subscribing, you agree to our Privacy Policy and consent to receive updates.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li><Link href="/">Home Page</Link></li>
              <li><Link href="/Course">Our Courses</Link></li>
              <li><Link href="/Testimonials">Testimonials</Link></li>
              <li><Link href="/Workshop">Workshop</Link></li>
              <li><Link href="/Career">Career</Link></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-semibold text-gray-900">Follow Us</h4>
            <ul className="mt-3 space-y-3 text-gray-700">
              <li className="flex items-center gap-2"><Facebook size={18} /> Facebook</li>
              <li className="flex items-center gap-2"><Instagram size={18} /> Instagram</li>
              <li className="flex items-center gap-2"><Twitter size={18} /> X</li>
              <li className="flex items-center gap-2"><Linkedin size={18} /> LinkedIn</li>
              <li className="flex items-center gap-2"><Youtube size={18} /> YouTube</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-semibold text-gray-900">Contact Us</h4>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li>
                <span className="font-medium">Address:</span><br />
                7th Cross, Kathriguppe, Bengaluru, Karnataka, India - 560085
              </li>
              <li>
                <span className="font-medium">Phone:</span>{" "}
                <a href="tel:+918884795783" className="text-[#0F3D3E] hover:underline">
                  (+91) 8884795783
                </a>
              </li>
              <li>
                <span className="font-medium">Email:</span>{" "}
                <a href="mailto:contact@mathkathaaa.com" className="text-[#0F3D3E] hover:underline">
                  contact@mathkathaaa.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-sm text-white">
          <p>© 2025 Mathkathaaa. All rights reserved.</p>
          <div className="flex flex-col md:flex-row gap-6 mt-2 md:mt-0 items-center">
            <div className="flex gap-6">
              <a href="/PrivacyPolicy">Privacy Policy</a>
              <a href="/TermsAndConditions">Terms of Service</a>
            </div>
            <p className="mt-2 md:mt-0">
              Designed and Developed by{" "}
              <a
                href="https://www.nthbuild.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 font-extrabold"
              >
                NthBuild.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
