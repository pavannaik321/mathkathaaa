// src/components/FoundingPrinciple.tsx
export default function FoundingPrinciple() {
    return (
      <section className="bg-[#0F3D3E] py-10 px-6 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Our Founding Principle
            </h2>
            <blockquote className="italic text-gray-100 border-l-4 border-teal-400 pl-4">
              &quot;Many students don’t give mathematics a real chance.&quot; – Maryam
              Mirzakhani
            </blockquote>
            <p className="text-gray-200 leading-relaxed">
              We believe mathematics is not just formulas but a language of
              patterns and ideas. By revisiting its origins with empathy and
              curiosity, we uncover its human side—making math engaging,
              meaningful, and accessible to all.
            </p>
          </div>
  
          {/* Highlight / Accent Box */}
          <div className="bg-[#17494D] text-white p-6 rounded-xl shadow-md max-w-sm text-center md:text-left">
            <p className="text-lg font-medium">
              Empathy + Curiosity = The true key to embracing mathematics.
            </p>
          </div>
        </div>
      </section>
    );
  }
  