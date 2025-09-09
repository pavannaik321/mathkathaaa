// src/components/TestimonialsStats.tsx
export default function TestimonialsStats() {
    const stats = [
      { label: "Students Taught", value: "500+" },
      { label: "Universities Represented", value: "30+" },
      { label: "Years of Teaching", value: "12+" },
      { label: "Success Rate", value: "95%" },
    ];
  
    return (
      <section className="relative bg-[#0F3D3E] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="group relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-teal-400/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition duration-500" />
  
                <p className="relative text-5xl font-extrabold text-white drop-shadow-sm">
                  {stat.value}
                </p>
                <p className="relative mt-3 text-lg font-medium text-gray-200">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  