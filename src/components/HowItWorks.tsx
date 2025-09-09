export default function HowItWorks() {
    const steps = [
      {
        id: 1,
        title: "Book Demo Sessions",
        desc: "You book 2 demo sessions for your child to explore.",
      },
      {
        id: 2,
        title: "Choose Together",
        desc: "You and your child decide what they need and want to learn.",
      },
      {
        id: 3,
        title: "Customized Timetable",
        desc: "Our team creates a tailored timetable for the set duration.",
      },
      {
        id: 4,
        title: "Begin Sessions",
        desc: "Once finalized, we embark on the learning journey together.",
      },
    ];
  
    return (
      <section className="relative">
        {/* Top Half Background */}
        <div className="bg-[#0F3D3E] h-68 w-full"></div>
  
        {/* Content */}
        <div className="max-w-6xl mx-auto px-6 relative -mt-48">
          {/* Heading */}
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold">How it works</h2>
            <p className="mt-2 text-indigo-100">
              A simple 4-step process to get started with your child’s learning journey.
            </p>
          </div>
  
          {/* Steps */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div
                key={step.id}
                className="bg-[#0F3D3E] border-2 border-white rounded-2xl shadow-md p-6 relative 
                transition-all duration-300 ease-in-out transform hover:-translate-y-3 hover:rotate-1 hover:shadow-2xl hover:scale-105"
              >
                {/* Step Number */}
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white border-2 border-white text-black font-semibold absolute -top-5 left-1/2 transform -translate-x-1/2 shadow-md 
                transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                  {step.id}
                </div>
  
                <h3 className="mt-6 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-white">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  