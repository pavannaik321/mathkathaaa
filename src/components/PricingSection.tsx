"use client";

import { useRouter } from "next/navigation";
export default function PricingSection() {
  const router = useRouter();
  const plans = [
    {
      duration: "4 Months",
      sessions: "30 Sessions",
      price: "₹17,999",
      perSession: "₹599 / session",
      color: "from-pink-500 to-rose-500",
    },
    {
      duration: "5 Months",
      sessions: "45 Sessions",
      price: "₹32,999",
      perSession: "₹733 / session",
      color: "from-yellow-400 to-orange-500",
    },
    {
      duration: "8 Months",
      sessions: "60 Sessions",
      price: "₹42,999",
      perSession: "₹716 / session",
      color: "from-green-500 to-emerald-500",
    },
    {
      duration: "8 Months",
      sessions: "90 Sessions",
      price: "₹61,999",
      perSession: "₹688 / session",
      color: "from-blue-500 to-indigo-500",
    },
  ];
  const handleclick = () => {
    // Navigate to the "founder-pick" section on Course page
    router.push("#free-trial-form");
  };
  return (
    <section className="bg-[#0F3D3E] py-20 px-6 mt-10">
      <h2 className="text-4xl font-extrabold text-center text-white mb-4">
        Choose Your <span className="text-[#fece11]">Learning Plan</span>
      </h2>
      <p className="text-center text-gray-200 mb-12 text-lg max-w-2xl mx-auto">
        Flexible programs designed for curious learners! Pick a plan that suits
        your journey.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="bg-white border-2 border-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 relative hover:border-yellow-500"
          >
            {/* Header */}
            <div
              className={`bg-gradient-to-r bg-[#0F3D3E] text-white text-center py-6`}
            >
              <h3 className="text-xl font-bold">{plan.duration}</h3>
              <p className="text-sm opacity-90">{plan.sessions}</p>
            </div>

            {/* Body */}
            <div className="p-6 flex flex-col items-center gap-3">
              <p className="text-3xl font-extrabold text-[#0F3D3E]">
                {plan.price}
              </p>
              <p className="text-gray-600 font-medium">{plan.perSession}</p>
            </div>

            {/* CTA */}
            <div className="px-6 pb-6"
              onClick={handleclick}
            >
              <button className="w-full bg-[#0F3D3E] text-white font-semibold px-4 py-3 rounded-full hover:bg-[#e6b800] transition">
                Get In Touch
              </button>
            </div>

            {/* Playful badge */}
            <span className="absolute top-4 right-4 bg-white text-[#0F3D3E] text-xs font-bold px-3 py-1 rounded-full shadow-md">
              Popular
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
