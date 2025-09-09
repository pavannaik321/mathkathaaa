// src/components/Testimonials.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const people = [
  "/Home/Carousal/Deeksha.jpg",
  "/Home/Carousal/Kaveri.jpg",
  "/Home/Carousal/Maadhurima.jpg",
  "/Home/Carousal/Sri.jpg",
  "/Home/Carousal/Snehmoy.jpg",
];

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Testimonials() {
  return (
    <section className="relative bg-white py-20 px-6 md:px-12">
      {/* Floating Staggered Grid */}
      {/* <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto mb-16"
      >
        {people.map((src, index) => (
          <motion.div
            key={index}
            // variants={item}
            whileHover={{ scale: 1.05 }}
            className={`relative w-28 h-36 md:w-40 md:h-52 rounded-2xl overflow-hidden shadow-lg cursor-pointer
              ${index % 5 === 0 ? "mt-12" : ""}
              ${index % 5 === 1 ? "mt-0" : ""}
              ${index % 5 === 2 ? "mt-16" : ""}
              ${index % 5 === 3 ? "mt-6" : ""}
              ${index % 5 === 4 ? "mt-20" : ""}
            `}
          >
            <Image
              src={src}
              alt={`Person ${index + 1}`}
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
      </motion.div> */}

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto"
      >
        <span className="inline-block text-sm font-medium text-gray-700 bg-gray-100 px-4 py-1 rounded-full mb-4">
          Testimonials
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          Trusted by leaders{" "}
          <span className="block text-gray-400 font-bold">
            from various industries
          </span>
        </h2>
        <p className="mt-6 text-lg text-gray-600">
          Learn why professionals trust our solutions to complete their customer
          journeys.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-900 transition"
        >
          Book 2 Free Trials →
        </motion.button>
      </motion.div>
    </section>
  );
}
