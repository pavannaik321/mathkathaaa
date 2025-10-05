// src/components/AboutFounder.tsx
import Image from "next/image";
import AchievementsSection from "./Achievements";

export default function AboutFounder() {
  return (
    <>
    <div className="bg-[#0F3D3E]">


    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 max-w-7xl mx-auto">
      {/* Left Content */}
      <div className="max-w-xl text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          About Our Founder
        </h2>
        <p className="text-white leading-relaxed">
        Dr. Mahesh Udupa is an ambitious and empathetic educator who firmly believes that while there is no substitute for hard work, true wisdom lies in knowing where to invest one’s energy and time, especially in Mathematics. Having personally faced the challenges of mastering Mathematics and eventually overcoming them through a holistic approach, he now envisions sharing this journey with thousands, if not millions, of students who encounter similar struggles. Dr. Udupa believes that Mathematics is the most beautiful language of the Universe, and with the right approach, it can be made engaging, enjoyable, and accessible to all, contrary to common perception.

        </p>
      </div>

      {/* Right Image */}
      <div className="mt-8 md:mt-0 md:ml-12">
        <Image
          src="/founder_logo1.png" // replace with your founder image in /public
          alt="Dr. Mahesh Udupa"
          width={400}
          height={450}
          className="rounded-lg object-cover"
        />
      </div>
    </section>
    </div>
    <AchievementsSection />
    </>
  );
}
