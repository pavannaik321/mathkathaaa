import AboutFounder from "./AboutFounder";

export default function MissionVisionValues() {
    const items = [
      {
        id: 1,
        title: "Our Mission",
        desc: "To make Mathematics engaging, enjoyable, and accessible for all by blending empathy, curiosity, and holistic learning methods. We aim to empower students to see Mathematics as the most beautiful language of the Universe, not just formulas and symbols.",
        color: "red-500",
        icon: "🎯",
      },
      {
        id: 2,
        title: "Our Vision",
        desc: "To revolutionize the way Mathematics is perceived and taught, inspiring students to explore its elegance and relevance. By revisiting the genesis of concepts and stepping into the shoes of mathematicians, we nurture a culture of inquiry and appreciation.",
        color: "cyan-500",
        icon: "💡",
      },
      {
        id: 3,
        title: "Our Values",
        desc: "Empathy and curiosity are at the heart of our principles. We believe that true learning happens when we embrace the human side of Mathematics, giving every student a real chance to explore, connect, and grow with confidence.",
        color: "yellow-500",
        icon: "⚖️",
      },
    ];
  
    return (
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Mission, Vision & Values
        </h2>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          {items.map((item, idx) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-2xl p-6 relative border border-gray-200"
            >
              {/* Colored Top Bar */}
              <div
                className={`absolute -top-2 left-0 right-0 h-2 rounded-t-2xl bg-${item.color}`}
              ></div>
  
              {/* Icon */}
              <div
                className={`flex items-center justify-center w-14 h-14 rounded-full border-2 border-${item.color} text-2xl absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white`}
              >
                {item.icon}
              </div>
  
              {/* Title */}
              <h3
                className={`text-xl font-semibold text-center mt-8 text-${item.color}`}
              >
                {item.title}
              </h3>
  
              {/* Description */}
              <p className="text-gray-600 text-center mt-4 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
  

      </section>
    );
  }
  