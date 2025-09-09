// src/components/ui/Header.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Course", href: "/Course" },
    { name: "About Us", href: "/About" },
    { name: "Testimonials", href: "/Testimonials" },
  ];

  return (
    <header className="w-full bg-[#0F3D3E] shadow-md fixed top-0 left-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Left: Company Name */}
        <Link href="/" className="text-2xl font-bold text-white">
          Mathkathaa
        </Link>

        {/* Center: Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative transition-colors
                  after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:mx-auto
                  after:h-[2px] after:w-0 after:transition-all after:duration-300
                  ${
                    isActive
                      ? "text-[#FFD93D] font-semibold after:w-full after:bg-[#FFD93D]"
                      : "text-white hover:text-[#FFD93D] hover:after:w-full after:bg-[#FFD93D]"
                  }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Right: Book Trial Button */}
        <div className="hidden md:block">
          <Link
            href="/trial"
            className="px-5 py-2 bg-[#FFD93D] text-black font-semibold rounded-full shadow-md hover:bg-yellow-500 transition-colors"
          >
            Book a Free Trial
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#0F3D3E] border-t border-gray-700">
          <nav className="flex flex-col space-y-4 px-6 py-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative transition-colors after:content-[''] after:absolute after:left-1/2 after:-bottom-1 
                              after:h-[2px] after:w-0 after:transition-all after:duration-300
                              ${
                                isActive
                                  ? "text-[#FFD93D] font-semibold after:w-full after:left-0 after:bg-[#FFD93D]"
                                  : "text-white hover:text-[#FFD93D] hover:after:w-full hover:after:left-0 after:bg-[#FFD93D]"
                              }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* Mobile Book Trial Button */}
            <Link
              href="/trial"
              className="px-5 py-2 bg-[#FFD93D] text-black font-semibold rounded-full shadow-md hover:bg-yellow-500 transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              Book a Free Trial
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
