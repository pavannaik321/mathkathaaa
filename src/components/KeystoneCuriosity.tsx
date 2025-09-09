// src/components/KeystoneConcepts.tsx
"use client";
import { useState } from "react";

const grades = {
    "7-8": [
      {
        title: "Set & Logic",
        points: [
          "The fundamental form of Math",
          "Operations",
          "Logical statements",
          "Connectives",
        ],
      },
      {
        title: "Relations & Functions",
        points: [
          "Input–output machines",
          "Domain, range",
          "Different types of them",
          "Some real life examples",
        ],
      },
      {
        title: "Vectors",
        points: [
          "What are they and why they exist?",
          "Vectors in real life",
          "How to operate them?",
          "What comes after vector?",
        ],
      },
      {
        title: "Matrices",
        points: [
          "What are they?",
          "How is it relevant?",
          "How to operate them?",
          "Transformation: Its true form",
        ],
      },
      {
        title: "Graphs & Networks",
        points: [
          "Graphs & components",
          "Networks in reality",
          "Principle of counting",
          "Paths, cycles & real life applications",
        ],
      },
      {
        title: "Number Theory",
        points: [
          "Divisibility, primes, remainders",
          "Fundamental theorem of Arthimetic",
          "Clock Math",
          "Some important theorems",
        ],
      },
      {
        title: "Algorithmic Thinking",
        points: [
          "What is an algorithm?",
          "Pseudo-code style",
          "Sorting and searching",
          "Recursive thinking",
        ],
      },
    ],
    "9-10": [
      {
        title: "Calculus Intuitions",
        points: [
          "The philosophical genesis",
          "What is motion",
          "Limits",
          "Projections & Predictions",
        ],
      },
      {
        title: "Linear Algebra Seeds",
        points: [
          "System of equations",
          "Transformation",
          "Determinants & what they mean",
          "What lies ahead..",
        ],
      },
      {
        title: "Discrete Math & Algorithms",
        points: [
          "Graphs & components",
          "Shortest paths & connectivity",
          "Combinatorics for counting possibilities",
          "Travelling Salesman problem",
        ],
      },
      {
        title: "Number Theory & Cryptography",
        points: [
          "Clock Math",
          "Prime numbers and factorization puzzles",
          "Some important theorems",
          "Simple ciphers",
        ],
      },
      {
        title: "Vectors & 3D Geometry",
        points: [
          "Why vectors",
          "Vector operations for Physics",
          "Equations of lines & planes",
          "Tensors",
        ],
      },
      {
        title: "Sequences, Series & Recurrence",
        points: [
          "Infinite series",
          "Geometric growth/decay",
          "Recursive definitions",
          "A glimpse of Ramanujan’s work",
        ],
      },
      {
        title: "Logic & Proof Techniques",
        points: [
          "Induction",
          "Contradiction",
          "Constructive",
          "Some relevant examples",
        ],
      },
    ],
    "11": [
      {
        title: "Calculus for Engineers",
        points: [
          "Real-life applications of limits",
          "Differential Calculus in daily life",
          "The genesis of integration",
          "Differential equations",
        ],
      },
      {
        title: "Linear Algebra",
        points: [
          "System of equations",
          "Vector spaces: span, linear independence",
          "Matrix operations",
          "The Eigen space",
        ],
      },
      {
        title: "Discrete Math & Algorithms",
        points: [
          "Graphs & components",
          "Travelling Salesman problem",
          "Tree, Dijkstra’s idea",
          "Recurrence relations",
        ],
      },
      {
        title: "Complex Numbers",
        points: [
          "The iconic history of “i”",
          "Complex plane representation",
          "Roots of unity",
          "Relevance of imaginary in the real world",
        ],
      },
      {
        title: "The Math of Physics I",
        points: [
          "Vector World",
          "Curves of Motion",
          "Nature’s Equations",
          "Scaling Laws",
        ],
      },
      {
        title: "The Math of Physics II",
        points: [
          "Fields & Flows",
          "Symmetry Math",
          "Complex Motion",
          "Calculus of Change",
        ],
      },
      {
        title: "Signal Intuitions",
        points: [
          "Trigonometric functions as oscillations",
          "Superposition and interference",
          "Harmonics and resonance",
          "Fourier idea",
        ],
      },
    ],
  };
  

export default function KeystoneCuriosity() {
  const [activeGrade, setActiveGrade] = useState("7-8");

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
        Keystone Curiosity
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Building the foundation of mathematical thinking, one concept at a
          time. Explore structured journeys for each grade level.
        </p>

        {/* Grade Tabs */}
        <div className="flex justify-center gap-6 mb-12">
          {Object.keys(grades).map((grade) => (
            <button
              key={grade}
              onClick={() => setActiveGrade(grade)}
              className={`px-6 py-2 rounded-full font-medium transition ${
                activeGrade === grade
                  ? "bg-[#0F3D3E] text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              Grade {grade}
            </button>
          ))}
        </div>

        {/* Topics Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {(grades as Record<string, { title: string; points: string[] }[]>)[activeGrade].map(
            (topic: { title: string; points: string[] }, i: number) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
              >
              <h3 className="text-xl font-semibold mb-4 text-[#0F3D3E]">
                {topic.title}
              </h3>
              <ul className="text-gray-600 space-y-2">
                {topic.points.map((point, j) => (
                  <li key={j}>• {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
