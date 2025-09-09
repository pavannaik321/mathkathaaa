// src/components/kindlingconceptss.tsx
"use client";
import { useState } from "react";

const kindling = {
    "<4": [
      {
        title: "Distances in Cosmos",
        image: "/Course/kindlingconcepts/grad_4/Distance_Cosmos.jpg",
        points: ["Shapes in Constellations", "Comparing Sizes", "Shadows & Lengths"],
      },
      {
        title: "Su-Do-Ku (4x4 – 6x6)",
        image: "/Course/kindlingconcepts/grad_4/sudoku.jpg",
        points: ["Counting & Placement", "Missing Numbers Game", "Visual pattern"],
      },
      {
        title: "Mind the Math",
        image: "/Course/kindlingconcepts/grad_4/mindmath.png",
        points: ["The power of visualization", "The calendar technique", "Why base 10?", "Now can you see?", "Evolution of mind"],
      },
      {
        title: "Why is Math a Language?",
        image: "/Course/kindlingconcepts/grad_4/language.webp",
        points: ["What is language?", "Genesis of Math", "An island in Mars around 450 BC", "Now can you speak?"],
      },
      {
        title: "Grammar of Mathematics",
        image: "/Course/kindlingconcepts/grad_4/grammar.jpg",
        points: ["Nouns of Math", "Verbs of Math", "Why no adjectives in Math?", "Simple Patterns"],
      },
      {
        title: "Equations of Exchange",
        image: "/Course/kindlingconcepts/grad_4/exchange.png",
        points: ["Counting Coins & Notes", "Making Change", "Comparisons"],
      },
      {
        title: "Progressions of Nature",
        image: "/Course/kindlingconcepts/grad_4/nature.jpeg",
        points: ["Counting in Nature", "Seasons as Cycles", "Growth Patterns"],
      },
      {
        title: "The Geometry of Reality",
        image: "/Course/kindlingconcepts/grad_4/geometry.jpg",
        points: ["Shapes Around Us", "Angles", "Area (intro)"],
      },
      {
        title: "Math in Art",
        image: "/Course/kindlingconcepts/grad_4/art.jpeg",
        points: ["Math in Music", "Math in population dynamics", "Escher’s work that inspired", "Why hexagon is the first step"],
      },
    ],
    "5-6": [
      {
        title: "Distances in Cosmos",
        image: "/Course/kindlingconcepts/grad_4/cosmos.png",
        points: ["Coordinates as Maps of Stars", "Angles from a Stick", "Circles & Rotation"],
      },
      {
        title: "Su-Do-Ku (6x6 – 9x9)",
        image: "/Course/kindlingconcepts/grad_4/sudoku.png",
        points: ["Row-Column Logic", "Block-reasoning", "Permutation View", "Block Reasoning"],
      },
      {
        title: "Principle of counting",
        image: "/Course/kindlingconcepts/grad_4/counting.png",
        points: ["HCF & LCM in daily life", "Why no HCM | LCF", "Set theory", "How to count?"],
      },
      {
        title: "Mind the Math",
        image: "/Course/kindlingconcepts/grad_4/mindmath.png",
        points: ["The power of visualization", "The calendar technique", "Why base 10?", "Now can you see?", "Evolution of mind"],
      },
      {
        title: "Why is Math a Language?",
        image: "/Course/kindlingconcepts/grad_4/language.png",
        points: ["What is language?", "Genesis of Math", "An island in Mars around 450 BC", "Now can you speak?"],
      },
      {
        title: "Grammar of Mathematics",
        image: "/Course/kindlingconcepts/grad_4/grammar.png",
        points: ["Nouns of Math", "Verbs of Math", "Why no adjectives in Math?", "What lies ahead…"],
      },
      {
        title: "The Language of Variables",
        image: "/Course/kindlingconcepts/grad_4/variables.png",
        points: ["Why algebra? Why?", "The wrong way of learnging Algebra", "Dungeons & Dragon(s)", "Casting out nines"],
      },
      {
        title: "Enchanted Arithmetic",
        image: "/Course/kindlingconcepts/grad_4/arithmetic.png",
        points: ["Happy numbers", "Collatz Conjecture", "Hailstone sequences", "Arithemetic progression"],
      },
      {
        title: "Progressions of Nature",
        image: "/Course/kindlingconcepts/grad_4/nature.png",
        points: ["Growth Patterns", "Fibonacci in Plants", "Golden Ratio & Spirals", "Time & Money"],
      },
      {
        title: "Equations of Exchange",
        image: "/Course/kindlingconcepts/grad_4/exchange.png",
        points: ["Unit Costs", "Budgeting Small Amounts", "Percents with money"],
      },
      {
        title: "The Geometry of Reality",
        image: "/Course/kindlingconcepts/grad_4/geometry.png",
        points: ["Angles", "Perimeter & Area", "Transformation", "Math when it was all & only geometry"],
      },
      {
        title: "Math in Art",
        image: "/Course/kindlingconcepts/grad_4/art.png",
        points: ["Math in Music", "Math in population dynamics", "Escher’s work that inspired", "Cicadas love affair with prime number", "Why bees have chosen hexagons"],
      },
    ],
    "7-8": [
      {
        title: "Distances in Cosmos",
        image: "/Course/kindlingconcepts/grad_4/cosmos.png",
        points: ["Polar Coordinates", "Triangles for Distance", "Scale Models", "Patterns of Motion"],
      },
      {
        title: "Su-Do-Ku (9x9)",
        image: "/Course/kindlingconcepts/grad_4/sudoku.png",
        points: ["Permutation View", "Exocet Pattern", "Death Blossom", "Phistomefel Ring"],
      },
      {
        title: "Enchanted Arithmetic",
        image: "/Course/kindlingconcepts/grad_4/arithmetic.png",
        points: ["Happy numbers", "Collatz Conjecture", "Hailstone sequences", "Casting out nines", "Fractals"],
      },
      {
        title: "Why is Math a Language?",
        image: "/Course/kindlingconcepts/grad_4/language.png",
        points: ["What is language?", "Genesis of Math", "An island in Mars around 450 BC", "Evolution of mind"],
      },
      {
        title: "Grammar of Mathematics",
        image: "/Course/kindlingconcepts/grad_4/grammar.png",
        points: ["Nouns of Math", "Verbs of Math", "Why no adjectives in Math?", "Now can you speak?"],
      },
      {
        title: "Equations of Exchange",
        image: "/Course/kindlingconcepts/grad_4/exchange.png",
        points: ["Profit & Loss", "Simple Interest", "Ratios in Finance", "Graphs & Data"],
      },
      {
        title: "Mappings",
        image: "/Course/kindlingconcepts/grad_4/mappings.png",
        points: ["Why to map - The big picture", "Maapings in real life", "Modelling of mappings", "Types of mappings & its importance"],
      },
      {
        title: "The Language of Variables",
        image: "/Course/kindlingconcepts/grad_4/variables.png",
        points: ["Why algebra? Why?", "The wrong way of learnging Algebra", "Dungeons & Dragon(s)", "What lies ahead…"],
      },
      {
        title: "The Geometry of Reality",
        image: "/Course/kindlingconcepts/grad_4/geometry.png",
        points: ["Perimeter, Area, & volume", "Math when it was all & only geometry", "Pyhtagorous & his circle (also triangle)", "Can all angles be constructed?"],
      },
      {
        title: "Recipe for logic",
        image: "/Course/kindlingconcepts/grad_4/logic.png",
        points: ["Statements from Axioms to Corollory", "What is induction?", "Proof - trust me, bro!"],
      },
      {
        title: "Progressions of Nature",
        image: "/Course/kindlingconcepts/grad_4/nature.png",
        points: ["Geometric Progression", "Golden Ratio & Spirals", "Ratios in nature", "Is nature mathphilic?"],
      },
      {
        title: "Interesting Paradoxes",
        image: "/Course/kindlingconcepts/grad_4/paradox.png",
        points: ["Russel’s paradox (The Barber’s Paradox)", "Zeno’s Paradox", "Logical fallacies", "Cicadas love affair with prime number"],
      },
      {
        title: "Math in Art",
        image: "/Course/kindlingconcepts/grad_4/art.png",
        points: ["Math in Music", "Math in population dynamics", "Escher’s work that inspired"],
      },
      {
        title: "Linear equations",
        image: "/Course/kindlingconcepts/grad_4/linear.png",
        points: ["What is linear?", "Geometrically what is it?", "Solving with intuition", "Understanding techniques - why it works."],
      },
    ],
    "9-10": [
      {
        title: "Distances in Cosmos",
        image: "/Course/kindlingconcepts/grad_4/cosmos.png",
        points: ["Coordinates & Transformation", "Spherical Geometry", "Why elipse?", "Trigonometric Ratios in Astronomy"],
      },
      {
        title: "Why is Math a Language?",
        image: "/Course/kindlingconcepts/grad_4/language.png",
        points: ["What is language?", "Genesis of Math", "An island in Mars around 450 BC", "Evolution of mind"],
      },
      {
        title: "Grammar of Mathematics",
        image: "/Course/kindlingconcepts/grad_4/grammar.png",
        points: ["Nouns of Math", "Verbs of Math", "Why no adjectives in Math?", "Now can you speak?"],
      },
      {
        title: "Functions",
        image: "/Course/kindlingconcepts/grad_4/functions.png",
        points: ["Modelling of mappings", "Types of mappings & its importance", "Why functions - The Big picture"],
      },
      {
        title: "Harmony of Ratios",
        image: "/Course/kindlingconcepts/grad_4/ratios.png",
        points: ["Why Tri?", "How to naviggaye through formula?", "Real life applications"],
      },
      {
        title: "The Language of Variables",
        image: "/Course/kindlingconcepts/grad_4/variables.png",
        points: ["The wrong way of learnging Algebra", "What makes Math a language?", "Expressions & equations", "Algebra’s poster"],
      },
      {
        title: "The Geometry of Reality",
        image: "/Course/kindlingconcepts/grad_4/geometry.png",
        points: ["Understanding the depth in area", "Measures,lines, & angles", "Full understanding of Pythagaros theorem", "Building a Clinometer", "Order & Degree"],
      },
      {
        title: "Recipe for logic",
        image: "/Course/kindlingconcepts/grad_4/logic.png",
        points: ["Statements from Axioms to Corollory", "How strong is induction?", "Proof - trust me, bro!", "How to contruct & remember proofs"],
      },
      {
        title: "Progressions of Nature",
        image: "/Course/kindlingconcepts/grad_4/nature.png",
        points: ["Is nature mathphilic?", "Fractals", "The two types of progressions", "Modelling of progressions"],
      },
      {
        title: "Vectors",
        image: "/Course/kindlingconcepts/grad_4/vectors.png",
        points: ["Scalars are just insufficient", "Is vector sufficient?", "Laws to deal with them..", "How to differentiate?"],
      },
    ],
    "11": [
      {
        title: "Distances in Cosmos",
        image: "/Course/kindlingconcepts/grad_4/cosmos.png",
        points: ["Trigonometric Parallax", "Coordinate Systems in Astronomy", "Inverse-square Laws", "Non-Euclidean Geometry", "Why elipse?"],
      },
      {
        title: "Why is Math a Language?",
        image: "/Course/kindlingconcepts/grad_4/language.png",
        points: ["What is language?", "Genesis of Math", "An island in Mars around 450 BC", "Evolution of mind"],
      },
      {
        title: "Functions",
        image: "/Course/kindlingconcepts/grad_4/functions.png",
        points: ["Why functions - The Big picture", "Intersection with trigonometry", "Intersection with Calculus", "Intersection with the real world", "What lies ahead…"],
      },
      {
        title: "Harmony of Ratios",
        image: "/Course/kindlingconcepts/grad_4/ratios.png",
        points: ["The core & crux of Triangle used as metric", "How to navigate through formula?", "Real life applications"],
      },
      {
        title: "Recipe for logic",
        image: "/Course/kindlingconcepts/grad_4/logic.png",
        points: ["Statements from Axioms to Corollory", "How strong is induction?", "Proof - trust me, bro!", "Circumference of earth"],
      },
      {
        title: "Progressions of Nature",
        image: "/Course/kindlingconcepts/grad_4/nature.png",
        points: ["Is nature mathphilic?", "Fractals", "Exponential growth/deacy in nature", "Differential equations within nature"],
      },
      {
        title: "Sacred Curves",
        image: "/Course/kindlingconcepts/grad_4/curves.png",
        points: ["Different sections of cones", "Modelling of sections", "Sections found in nature", "Sections found in applications"],
      },
      {
        title: "Vectors",
        image: "/Course/kindlingconcepts/grad_4/vectors.png",
        points: ["Why vectors?", "Laws to deal with them in Physics", "How to differentiate?"],
      },
      {
        title: "Continuum of Change - I",
        image: "/Course/kindlingconcepts/grad_4/calculus1.png",
        points: ["The real philosophy behind Calculus", "The limit of knowledge", "Why Calculus is the pillar of reality"],
      },
      {
        title: "Continuum of Change - II",
        image: "/Course/kindlingconcepts/grad_4/calculus2.png",
        points: ["Limits, continuity, so what next?", "Projections & Predictions", "Understanding the relevance of derivatives"],
      },
      {
        title: "Continuum of Change - III",
        image: "/Course/kindlingconcepts/grad_4/calculus3.png",
        points: ["Intersection with Trigonometry", "The intiuition behind product rule", "The intiuition behind chain rule", "Why is derivate of sine, consine?"],
      },
    ],
  };
  
  export default function Kindlingconceptss() {
    const [activeGrade, setActiveGrade] = useState("<4");
  
    return (
      <section className="py-20 bg-[#0F3D3E]">

  
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-white">
            Kindling Concepts
          </h2>
          <p className="text-center text-white max-w-2xl mx-auto mb-12 text-lg">
            Curiosity-driven explorations that spark early mathematical wonder.
          </p>
  
          {/* Grade Tabs */}
          <div className="flex justify-center flex-wrap gap-4 mb-12">
            {Object.keys(kindling).map((grade) => (
              <button
                key={grade}
                onClick={() => setActiveGrade(grade)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-md ${
                  activeGrade === grade
                    ? "bg-[#FFD93D] text-black shadow-lg scale-105"
                    : "bg-white/10 text-gray-200 hover:bg-white/20"
                }`}
              >
                Grade {grade}
              </button>
            ))}
          </div>
  
          {/* Topics Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {(kindling as Record<
              string,
              { title: string; image?: string; points: string[] }[]
            >)[activeGrade].map((topic, i) => (
              <div
                key={i}
                className="bg-gray-50 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col"
              >
                {/* Image placeholder */}
                {topic.image && (
                  <div className="h-40 bg-gray-100/20 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                    <img
                      src={topic.image}
                      alt={topic.title}
                      className="object-cover h-full w-full rounded-xl"
                    />
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-4 text-black">
                  {topic.title}
                </h3>
                <ul className="text-black space-y-2 leading-relaxed">
                  {topic.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-orange-400">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
