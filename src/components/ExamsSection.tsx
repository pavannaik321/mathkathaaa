"use client";

type Exam = {
  name: string;
};

type Country = {
  name: string;
  exams: Exam[];
};

const data: Country[] = [
  {
    name: "USA",
    exams: [{ name: "SAT" }],
  },
  {
    name: "Australia",
    exams: [{ name: "ATAR" }],
  },
  {
    name: "Canada",
    exams: [{ name: "CEMS" }],
  },
  {
    name: "India",
    exams: [
      { name: "JEE Main" },
      { name: "JEE Advanced" },
      { name: "Olympiad" },
    ],
  },
];

export default function ExamsSection() {
  return (
    <section className="max-w-full mx-auto px-6 py-16 bg-[#0F3D3E]">
      {/* Title */}
      <h2 className="text-4xl font-extrabold text-center mb-6 text-white tracking-wide">
        Our Global Footprint
      </h2>
      <p className="text-center text-gray-200 max-w-2xl mx-auto mb-12 text-lg">
        We support students in preparing for a wide range of national and
        international competitive assessments, ensuring they gain both the
        knowledge and the confidence to perform at their best.
      </p>

      {/* Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {data.map((country, idx) => (
          <div
            key={idx}
            className={`rounded-2xl border border-gray-200 shadow-lg bg-white flex flex-col transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl
              ${country.name === "India" ? "lg:col-start-2 lg:row-start-2" : ""}`}
          >
            {/* Country Header */}
            <div className="px-6 py-4 rounded-t-2xl">
              <h3 className="text-2xl font-bold text-[#0F3D3E] text-center">
                {country.name}
              </h3>
            </div>

            {/* Exams */}
            <div className="p-6 flex flex-col gap-3">
              {country.exams.map((exam, i) => (
                <div
                  key={i}
                  className="px-4 py-3 rounded-lg bg-[#f9f9f9] border-2 border-l-10 border-r-10  border-[#0F3D3E] text-gray-800 font-medium hover:bg-[#fff7da] transition"
                >
                  {exam.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
