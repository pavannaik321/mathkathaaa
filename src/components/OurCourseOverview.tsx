// src/app/components/Offerings.tsx

import { GraduationCap, Target, BookOpen } from "lucide-react"; 

export default function OurCourseOverview() {
  return (
    <section className="w-full px-6 py-16 bg-[#0F3D3E]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-sm font-medium text-white">Explore</h4>
            <h2 className="mt-2 text-4xl font-bold text-white leading-snug">
              Discover Our <br />
              Comprehensive Learning <br />
              Offerings
            </h2>
          </div>
          <p className="text-white max-w-xl">
          At Mathkathaaa, we offer tailored learning solutions aligned with your current syllabus, helping you stay confident and on track. Our dedicated competitive exam preparation equips you with the strategies and skills to excel in assessments. Beyond academics, our signature 3K Kathaaa approach is designed to spark curiosity, strengthen fundamentals, and nurture a deeper understanding of mathematics.
          </p>
        </div>

        {/* Features */}
        <div className="mt-12 grid md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="text-center md:text-left bg-white border border-gray-300 rounded-lg p-4">
            <GraduationCap className="w-8 h-8 mx-auto md:mx-0 text-gray-900" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              Current Syllabus Tailored to Your Needs
            </h3>
            <p className="mt-2 text-gray-600">
              We align our courses with CBSE, ICSE, IB, and more.
            </p>
          </div>

          {/* Card 2 */}
          <div className="text-center md:text-left bg-white border border-gray-300 rounded-lg p-4">
            <Target className="w-8 h-8 mx-auto md:mx-0 text-gray-900" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              Competitive Exams Preparation for Success
            </h3>
            <p className="mt-2 text-gray-600">
              Prepare for JEE, Olympiads, SAT, and other exams.
            </p>
          </div>

          {/* Card 3 */}
          <div className="text-center md:text-left bg-white border border-gray-300 rounded-lg p-4">
            <BookOpen className="w-8 h-8 mx-auto md:mx-0 text-gray-900" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              3K Kathaaa: Engage, Explore, Excel
            </h3>
            <p className="mt-2 text-gray-600">
              Our innovative approach fosters curiosity and understanding.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-12 flex items-center gap-4">
          <button className="border border-white px-4 py-2 text-white font-medium hover:bg-white hover:text-[#0F3D3E] rounded">
            Explore
          </button>
          <button  className="flex items-center gap-2 text-white font-medium">
            Learn More <span className="text-xl">›</span>
          </button>
        </div>
      </div>
    </section>
  );
}
