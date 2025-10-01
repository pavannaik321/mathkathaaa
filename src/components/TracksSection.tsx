export default function FoundersPick() {
    return (
      <section className="relative w-full mb-10">
        {/* Background Image */}
        <div className="relative h-[400px] md:h-[500px] w-full">
          <img
            src="/Home/Carousal/Carousal_image.png" // replace with your background image
            alt="Founder's Pick"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Overlay */}
          {/* <div className="absolute inset-0 bg-black/50"></div> */}
          {/* Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
              Founder’s <span className="text-[#FECE11]">Pick</span>
            </h2>
            <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl">
              Curated learning journeys designed to balance fundamentals with exploration.
            </p>
          </div>
        </div>
  
{/* Tracks Section */}
<div className="relative bg-[#0F3D3E] py-20 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-center text-4xl font-extrabold text-white mb-12">
      Choose Your Learning Journey
    </h2>

    <div className="grid md:grid-cols-2 gap-10 relative">
      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 hidden md:block w-[3px] bg-[#FECE11]/40"></div>

      {/* Foundation Track */}
      <div className="bg-gradient-to-br from-[#124C4D] to-[#0F3D3E] rounded-2xl p-10 relative shadow-lg hover:scale-[1.02] transition-transform">
        <div className="bg-[#FECE11] text-[#0F3D3E] px-4 py-2 rounded-full font-bold shadow-md mb-10">
        <h4 className="text-xl text-[#0F3D3E] text-center">Foundation Track</h4>
        </div>
        
        <p className="mb-6 text-gray-300">
          30–60 sessions to strengthen core concepts and build confidence
        </p>
        <ul className="space-y-3 text-gray-200">
          <li>→ Small-group sessions with at most 3 students</li>
          <li>→ 2–3 sessions per week for steady yet balanced learning</li>
          <li>→ Strong focus on building and reinforcing fundamentals</li>
          <li>→ Personalized attention within a collaborative environment</li>
          <li>→ Consistent progress with space for questions and discussions</li>
        </ul>
      </div>

      {/* Exploration Track */}
      <div className="bg-gradient-to-br from-[#0F3D3E] to-[#124C4D] rounded-2xl p-10 shadow-lg hover:scale-[1.02] transition-transform">
      <div className="bg-[#FECE11] text-[#0F3D3E] px-4 py-2 rounded-full font-bold shadow-md mb-10">
        <h4 className="text-xl text-[#0F3D3E] text-center">Exploration Track</h4>
        </div>
        <p className="mb-6 text-gray-300">
          90 sessions to dive deeper into complex topics and advanced problem-solving
        </p>
        <ul className="space-y-3 text-gray-200">
          <li>→ Small-group sessions with at most 3 students</li>
          <li>→ 2–3 sessions per week, balancing depth with steady pace</li>
          <li>→ Quick review of fundamentals, stronger focus on advanced concepts</li>
          <li>→ Personalized guidance to tackle challenging problems</li>
          <li>→ Collaborative discussions for sharper insights & problem-solving</li>
        </ul>
      </div>
    </div>
  </div>
</div>


      </section>
    );
  }
  