// src/components/TestimonialsCarousel.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Maadhurima Mondal",
    role: "Post Graduate Student",
    feedback:
      "It was extremely descriptive and was made easily understandable.",
    image: "/Home/Carousal/Maadhurima.jpg",
  },
  {
    name: "Snehmay Ghosh",
    role: "Research Associate at IISc",
    feedback:
      "Mahesh Sir is an exceptional maths teacher. He explains every problem with such patience and clarity that the solution feels naturally embedded in your mind.",
    image: "/Home/Carousal/Snehmoy.jpg",
  },
  {
    name: "Sri Velaga",
    role: "First year of college",
    feedback:
      "The sessions were incredibly helpful in building my confidence in math. I also learned test taking skills and improved my problem-solving speed.",
    image: "/Home/Carousal/Sri.jpg",
  },
  {
    name: "Diksha Prasad",
    role: "4th Year B.Tech",
    feedback:
      "Mahesh sir taught very well and gave wonderful examples while also making us think outside the box. The sessions were very interactive.",
    image: "/Home/Carousal/Deeksha.jpg",
  },
  {
    name: "Kaveri",
    role: "12th Grade Student",
    feedback:
      "Till I met Mahesh Sir, math meant only numbers. He made math really fun for me and I scored really high in my SSAT test.",
    image: "/Home/Carousal/Kaveri.jpg",
  },
];

export default function TestimonialsCarousel() {
  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 40,
              ease: "linear",
            }}
          >
            {[...testimonials, ...testimonials].map((t, index) => (
              <div
                key={index}
                className="min-w-[350px] max-w-sm bg-gray-50 rounded-2xl p-6 shadow-md flex-shrink-0"
              >
                <span className="text-5xl text-indigo-500 font-serif">“</span>
                <p className="text-gray-700 text-base mb-4">{t.feedback}</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 relative rounded-full overflow-hidden">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
