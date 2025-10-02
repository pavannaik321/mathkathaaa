import AboutFounder from "./AboutFounder";

export default function MissionVisionValues() {
    const items = [
      {
        id: 1,
        title: "Our Mission",
        desc: "To give everyone a fair chance to engage with the language that represents the Universe, going beyond formulas and symbols. Our aim is to make mathematics more engaging, enjoyable, and accessible for all by blending empathy, curiosity, and holistic learning methods.",
        color: "red-500",
        icon: "🎯",
      },
      {
        id: 2,
        title: "Our Vision",
        desc: "To empower every learner to approach mathematics with confidence, curiosity, and lasting understanding. As the future increasingly relies on mathematically tuned minds capable of thinking within the ‘black box’ of AI and machine learning, we aspire to play a meaningful role in nurturing and curating such thinkers.",
        color: "cyan-500",
        icon: "💡",
      },
      {
        id: 3,
        title: "Our Values",
        desc: "Empathy and curiosity are at the heart of our principles. We believe that true learning happens when we embrace the genesis of a concept, specifically, the Why of it. This will give every student a real chance to connect, understand and grow with confidence.",
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
                className={`absolute -top-2 left-0 right-0 h-2 rounded-t-2xl`}
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
  