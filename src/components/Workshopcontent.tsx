// src/components/kindlingconceptss.tsx
"use client";
import { useState } from "react";

const WorkshopData = {
    "2-3 grade": [
      {
        "title": "Mind the Math",
        "image": "",
        "points": [
          "The power of visualization",
          "The calendar technique",
          "Why base 10?",
          "Now can you see?"
        ]
      },
      {
        "title": "Why is Math language",
        "image": "",
        "points": [
          "What is language?",
          "Genesis of Math",
          "An island in Mars around 450 BC",
          "Evolution of mind"
        ]
      },
      {
        "title": "SoM: Math & Mysticism",
        "image": "",
        "points": [
          "Srinivasa Ramanujan",
          "Pythagoras",
          "Zeno of Elea",
          "Kurt Gödel"
        ]
      },
      {
        "title": "SoM: Math & Art/Music",
        "image": "",
        "points": [
          "Pythagoras",
          "Joseph-Louis Lagrange",
          "Gottfried Wilhelm Leibniz"
        ]
      }
    ],
    "4-5 grade": [
      {
        "title": "Mind the Math",
        "image": "",
        "points": [
          "The power of visualization",
          "The calendar technique",
          "Why base 10?",
          "Now can you see?"
        ]
      },
      {
        "title": "Why is Math language",
        "image": "",
        "points": [
          "What is language?",
          "Genesis of Math",
          "An island in Mars around 450 BC",
          "Evolution of mind"
        ]
      },
      {
        "title": "Principle of Counting",
        "image": "",
        "points": [
          "HCF & LCM in daily life",
          "Why no HCM | LCF",
          "Set theory",
          "How to count?"
        ]
      },
      {
        "title": "Math in Art",
        "image": "",
        "points": [
          "Math in Music",
          "Math in population dynamics",
          "Escher’s work that inspired",
          "Why hexagon is the first step"
        ]
      },
      {
        "title": "SoM: Math & Mysticism",
        "image": "",
        "points": [
          "Srinivasa Ramanujan",
          "Pythagoras",
          "Zeno of Elea",
          "Kurt Gödel"
        ]
      },
      {
        "title": "SoM: Math & Art/Music",
        "image": "",
        "points": [
          "Pythagoras",
          "Joseph-Louis Lagrange",
          "Gottfried Wilhelm Leibniz",
          "Escher"
        ]
      }
    ],
    "6-7 grade": [
      {
        "title": "Mind the Math",
        "image": "",
        "points": [
          "The power of visualization",
          "The calendar technique",
          "Why base 10?",
          "Now can you see?"
        ]
      },
      {
        "title": "Why is Math language",
        "image": "",
        "points": [
          "What is language?",
          "Genesis of Math",
          "An island in Mars around 450 BC",
          "Evolution of mind"
        ]
      },
      {
        "title": "Principle of Counting",
        "image": "",
        "points": [
          "HCF & LCM in daily life",
          "Why no HCM | LCF",
          "Set theory",
          "How to count?"
        ]
      },
      {
        "title": "Algebra: The world of Dungeons & Dragons",
        "image": "",
        "points": [
          "Why algebra? Why?",
          "The wrong way of learnging Algebra",
          "Dungeons & Dragon(s)"
        ]
      },
      {
        "title": "Math in Art",
        "image": "",
        "points": [
          "Math in population dynamics",
          "Escher’s work that inspired",
          "Cicadas love affair with prime number",
          "Why bees have chosen hexagons"
        ]
      },
      {
        "title": "SoM: Women in Math",
        "image": "",
        "points": [
          "Emmy Noether",
          "Hypatia",
          "Maryam Mirzakhani",
          "Sophie Germain"
        ]
      },
      {
        "title": "SoM: Forgotten Geniuses",
        "image": "",
        "points": [
          "Sophie Germain",
          "Maryam Mirzakhani",
          "Emmy Noether",
          "Gottfried Wilhelm Leibniz"
        ]
      },
      {
        "title": "SoM: Math & Mysticism",
        "image": "",
        "points": [
          "Srinivasa Ramanujan",
          "Pythagoras",
          "Zeno of Elea",
          "Kurt Gödel"
        ]
      }
    ],
    "8-9 grade": [
      {
        "title": "Distance in Cosmos",
        "image": "",
        "points": [
          "Coordinates & Transformation",
          "Spherical Geometry",
          "Why elipse?",
          "Trigonometric Ratios in Astronomy"
        ]
      },
      {
        "title": "Progressions of Nature",
        "image": "",
        "points": [
          "Is nature mathphilic?",
          "Fractals",
          "The two types of progressions"
        ]
      },
      {
        "title": "Algorithmic Thinking",
        "image": "",
        "points": [
          "What is an algorithm?",
          "Pseudo-code style",
          "Sorting and searching",
          "Recursive thinking"
        ]
      },
      {
        "title": "Logic & Proof Techniques",
        "image": "",
        "points": [
          "Induction",
          "Contradiction",
          "Constructive",
          "Some relevant examples"
        ]
      },
      {
        "title": "SoM: Women in Math",
        "image": "",
        "points": [
          "Emmy Noether",
          "Hypatia",
          "Maryam Mirzakhani",
          "Sophie Germain"
        ]
      },
      {
        "title": "SoM: Forgotten Geniuses",
        "image": "",
        "points": [
          "Sophie Germain",
          "Maryam Mirzakhani",
          "Emmy Noether",
          "Gottfried Wilhelm Leibniz"
        ]
      },
      {
        "title": "SoM: Math & War/Politics",
        "image": "",
        "points": [
          "Évariste Galois",
          "John von Neumann",
          "Alan Turing"
        ]
      },
      {
        "title": "SoM: Math & Art/Music",
        "image": "",
        "points": [
          "Pythagoras",
          "Joseph-Louis Lagrange",
          "Gottfried Wilhelm Leibniz",
          "Emmy Noether"
        ]
      }
    ],
    "10 grade": [
      {
        "title": "Distance in Cosmos",
        "image": "",
        "points": [
          "Coordinates & Transformation",
          "Spherical Geometry",
          "Why elipse?",
          "Trigonometric Ratios in Astronomy"
        ]
      },
      {
        "title": "Progressions of Nature",
        "image": "",
        "points": [
          "Is nature mathphilic?",
          "Fractals",
          "The two types of progressions"
        ]
      },
      {
        "title": "The “Why” of Trigonometry",
        "image": "",
        "points": [
          "Triangle or Circle?",
          "The reasoning of ratio names",
          "Deduction of formulas",
          "Significance in real life"
        ]
      },
      {
        "title": "The Math of Physics",
        "image": "",
        "points": [
          "Vector World",
          "What is “motion”?",
          "Graphs of motion"
        ]
      },
      {
        "title": "SoM: Math & the Natural World (Physics/Chemistry)",
        "image": "",
        "points": [
          "Isaac Newton",
          "Gottfried Wilhelm Leibniz",
          "Joseph-Louis Lagrange",
          "Augustin-Louis Cauchy"
        ]
      },
      {
        "title": "SoM: Women in Math",
        "image": "",
        "points": [
          "Emmy Noether",
          "Hypatia",
          "Maryam Mirzakhani",
          "Sophie Germain"
        ]
      },
      {
        "title": "SoM: Math & Art/Music",
        "image": "",
        "points": [
          "Pythagoras",
          "Joseph-Louis Lagrange",
          "Gottfried Wilhelm Leibniz"
        ]
      },
      {
        "title": "SoM: Math & Religion/Philosophy",
        "image": "",
        "points": [
          "Blaise Pascal",
          "René Descartes",
          "Kurt Gödel",
          "Pythagoras"
        ]
      }
    ],
    "11-12 grade": [
      {
        "title": "Distance in Cosmos",
        "image": "",
        "points": [
          "Coordinate Systems in Astronomy",
          "Inverse-square Laws",
          "Non-Euclidean Geometry",
          "Why elipse?"
        ]
      },
      {
        "title": "The long history of Calculus",
        "image": "",
        "points": [
          "What is motion?",
          "Alternative of Calculus?",
          "Limit, Continuity & Derivative"
        ]
      },
      {
        "title": "The iconic history of “i”",
        "image": "",
        "points": [
          "Genesis of “i”",
          "Is it really “imaginary”?",
          "The real relevance of imaginary",
          "The complex plane"
        ]
      },
      {
        "title": "The Math of Physics",
        "image": "",
        "points": [
          "Vector World",
          "Curves of Motion",
          "Nature’s Equations",
          "Scaling Laws"
        ]
      },
      {
        "title": "SoM: Math & the Natural World (Physics/Chemistry)",
        "image": "",
        "points": [
          "Isaac Newton",
          "Gottfried Wilhelm Leibniz",
          "Joseph-Louis Lagrange",
          "Augustin-Louis Cauchy"
        ]
      },
      {
        "title": "SoM: Math & Machines",
        "image": "",
        "points": [
          "Ada Lovelace",
          "Alan Turing",
          "George Boole",
          "Andrey Kolmogorov"
        ]
      },
      {
        "title": "SoM: Math & War/Politics",
        "image": "",
        "points": [
          "Évariste Galois",
          "John von Neumann",
          "Alan Turing",
          "Emmy Noether"
        ]
      },
      {
        "title": "SoM: Women in Math",
        "image": "",
        "points": [
          "Emmy Noether",
          "Hypatia",
          "Maryam Mirzakhani",
          "Sophie Germain"
        ]
      }
    ]
  };
  
  export default function WorkshopContent() {
    const [activeGrade, setActiveGrade] = useState("2-3 grade");
  
    return (
      <section className="py-20 bg-white">

  
        <div className="max-w-7xl mx-auto px-6">
{/* Header */}
<h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-[#0F3D3E]">
Workshops that Turn Questions into Adventures
</h2>
<p className="text-center text-[#0F3D3E] max-w-4xl mx-auto mb-12 text-lg leading-relaxed">
  A journey beyond textbooks—our workshops weave together stories, puzzles, art, 
  and science to reveal the hidden patterns of mathematics. Each session is 
  designed to ignite curiosity, nurture imagination, and help learners of all 
  ages see math as a living, creative language that shapes the world around us.
</p>

          {/* Grade Tabs */}
          <div className="flex justify-center flex-wrap gap-4 mb-12 text[#0F3D3E]">
            {Object.keys(WorkshopData).map((grade) => (
              <button
                key={grade}
                onClick={() => setActiveGrade(grade)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-md ${
                  activeGrade === grade
                    ? "bg-[#FFD93D] text-black shadow-lg scale-105"
                    : "bg-[#0F3D3E]/10 text-black hover:bg-white/20"
                }`}
              >
                {grade}
              </button>
            ))}
          </div>
  
          {/* Topics Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {(WorkshopData as Record<
              string,
              { title: string; image?: string; points: string[] }[]
            >)[activeGrade].map((topic, i) => (
              <div
                key={i}
                className="bg-[#0F3D3E] backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col"
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
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {topic.title}
                </h3>
                <ul className="text-white space-y-2 leading-relaxed">
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
