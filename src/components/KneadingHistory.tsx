"use client"
import { useState } from "react";
import { motion } from "framer-motion";

const history = {
  "< Grade 6": [
    {
      name: "Srinivasa Ramanujan",
      desc: "Self-taught genius who explored infinity, patterns, and intuition",
    },
    {
      name: "Leonhard Euler",
      desc: "Blind mathematician who laid the groundwork for many fields",
    },
    {
      name: "Ada Lovelace",
      desc: "She dreamt of machines that could think, long before wires could hum",
    },
    {
      name: "Carl Friedrich Gauss",
      desc: "A child prodigy who tamed chaos, his mind was nature's compass",
    },
    {
      name: "Hypatia",
      desc: "A beacon of ancient wisdom, teaching under the stars amidst storms of silence",
    },
    {
      name: "Fibonacci",
      desc: "Nature's counter, from rabbit tales to seashell swirls",
    },
    {
      name: "Blaise Pascal",
      desc: "Balancing faith and chance, he found depth in numbers and heart in uncertainty",
    },
    {
      name: "Maryam Mirzakhani",
      desc: "She wandered abstract landscapes, sketching new worlds with elegant proof",
    },
  ],
  "Grade 6–7": [
    {
      name: "Srinivasa Ramanujan",
      desc: "Self-taught genius who explored infinity, patterns, and intuition",
    },
    {
      name: "Leonhard Euler",
      desc: "Blind mathematician who laid the groundwork for many fields",
    },
    {
      name: "Évariste Galois",
      desc: "A rebel with equations in his blood, fighting for both freedom and symmetry",
    },
    {
      name: "Maryam Mirzakhani",
      desc: "She wandered abstract landscapes, sketching new worlds with elegant proof",
    },
    {
      name: "Carl Friedrich Gauss",
      desc: "A child prodigy who tamed chaos, his mind was nature's compass",
    },
    {
      name: "Ada Lovelace",
      desc: "She dreamt of machines that could think, long before wires could hum",
    },
    {
      name: "Blaise Pascal",
      desc: "Balancing faith and chance, he found depth in numbers and heart in uncertainty",
    },
    {
      name: "George Boole",
      desc: "He taught logic to machines, long before they could speak",
    },
  ],
};

export default function KneadingHistory() {
  const [activeGroup, setActiveGroup] = useState("< Grade 6");

  return (
    <section className="py-20 bg-white">


      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 drop-shadow-lg">
          Kneading History
        </h2>
        <p className="text-center text-black max-w-2xl mx-auto mb-12 text-lg">
          A journey through time with mathematicians whose ideas shaped the world.
        </p>

        {/* Age Group Tabs */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {Object.keys(history).map((group) => (
            <button
              key={group}
              onClick={() => setActiveGroup(group)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-md ${
                activeGroup === group
                  ? "bg-[#0F3D3E] text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {group}
            </button>
          ))}
        </div>

        {/* Mathematician Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {(history[activeGroup as keyof typeof history] as { name: string; desc: string }[]).map(
            (person, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-[#0F3D3E]">
                {person.name}
              </h3>
              <p className="text-[#0F3D3E] text-sm leading-relaxed">
                {person.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
