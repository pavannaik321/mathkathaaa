"use client";
import { useState } from "react";
import { ChevronDown, Layers } from "lucide-react";
import workshopData from "./sessionData";

export default function Session() {
  // 👇 allow number | null
  const [openGrade, setOpenGrade] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="session">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-gray-900">
        Chart Your Course
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          A progressive journey through mathematical wonder, blending concepts,
          history, and creativity for each grade level.
        </p>

        <div className="space-y-6">
          {workshopData.workshops.map((gradeItem, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-2xl shadow-sm bg-white overflow-hidden"
            >
              {/* Grade Header */}
              <button
                onClick={() => setOpenGrade(openGrade === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Grade {gradeItem.grade}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {gradeItem.tracks.reduce((sum, t) => sum + t.sessions, 0)} Sessions
                  </p>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-gray-500 transform transition-transform ${
                    openGrade === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Expanded Content */}
              {openGrade === i && (
                <div className="px-6 pb-6 space-y-8">
                  {gradeItem.tracks.map((track, trackIdx) => (
                    <div key={trackIdx} className="space-y-6">
                      <p className="text-sm text-gray-600 font-medium">
                       {trackIdx==0 ? "Foundation":"Exploration"} Track – {track.sessions} Sessions
                      </p>
                      {Object.entries(track.categories).map(
                        ([category, topics], idx) => (
                          <div
                            key={idx}
                            className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition"
                          >
                            <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                              <Layers className="w-4 h-4 text-indigo-500" />
                              {category}
                            </h4>
                            <ul className="mt-2 flex flex-wrap gap-2">
                              {Array.isArray(topics) &&
                                topics.map((topic, t) => (
                                  <li
                                    key={`${idx}-${t}`}
                                    className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full"
                                  >
                                    {topic}
                                  </li>
                                ))}
                            </ul>
                          </div>
                        )
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
