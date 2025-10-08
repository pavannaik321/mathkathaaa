import Link from "next/link";

// src/components/TestimonialsCTA.tsx
export default function TestimonialsCTA() {
    return (
      <section className="relative py-24 bg-[#0F3D3E] text-white text-center overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-teal-400 via-transparent to-indigo-500" />
  
        <div className="relative max-w-4xl mx-auto px-6">
          {/* Tagline */}
          <p className="text-white text-sm md:text-base uppercase tracking-widest font-semibold mb-4">
            Join Thousands of Achievers
          </p>
  
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            Be the <span className="text-[#FFD93D]">Next Success Story</span>
          </h2>
  
          {/* Sub-text */}
          <p className="mb-10 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Thousands of students have transformed their careers with us — 
            from scoring higher in exams to entering top universities. 
            Your journey to success starts here.
          </p>
  
          {/* CTA Button */}
          <Link href="/#free-trial-form">
          <button className="px-10 py-4 hover:bg-[#FFD93D] hover:text-black font-bold rounded-full shadow-xl hover:scale-105 bg-white text-black transition transform duration-300">
            🚀 Book Two Free Sessions
          </button>
          </Link>
  
        </div>
      </section>
    );
  }
  