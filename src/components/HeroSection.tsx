import React from 'react'
import Image from 'next/image'
import CurvyHeader from './CurvyHeader'
export default function HeroSection() {
  return (
    <div>
            <div
        className="relative flex items-center justify-center min-h-screen px-6 sm:px-0 text-white"
        style={{
          backgroundImage: "url('Home/Carousal/Carousal_image.png')", // place your image in /public as chalkboard-bg.png
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative text-center space-y-6 max-w-3xl px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl italic font-extrabold leading-snug text-center text-yellow-300">
            <span className="text-white">An Empathetic Approach</span> To{" "}
            <span className="text-yellow-300">Mathematics...</span>
            <br />
            To <span className="text-white">Rebuild Knowledge</span>, To{" "}
            <span className="text-white">Create Curiosity!</span>
          </h2>



          <blockquote className="text-md sm:text-lg text-gray-300 pl-4 italic">
            &quot;In the pursuit of knowledge, we may stumble, we may fail, but with
            empathy, we shall always rise&quot;
            <br />
            {/* — Founder */}
          </blockquote>


          <section className="mt-10 text-center">
            <div className="flex justify-center items-center">
              {/* Teacher Avatars */}
              <Image
                src="/Home/Carousal/Deeksha.jpg"
                alt="Teacher 1"
                width={60}
                height={60}
                className="w-16 h-16 rounded-full border-3 border-white shadow-md object-cover"
              />
              <Image
                src="/Home/Carousal/Kaveri.JPG"
                alt="Teacher 2"
                width={60}
                height={60}
                className="w-16 h-16 rounded-full border-3 border-white shadow-md object-cover -ml-3"
              />
              <Image
                src="/Home/Carousal/Maadhurima.JPG"
                alt="Teacher 3"
                width={60}
                height={60}
                className="w-16 h-16 rounded-full border-3 border-white shadow-md object-cover -ml-3"
              />
              <Image
                src="/Home/Carousal/Snehmoy.JPG"
                alt="Teacher 4"
                width={60}
                height={60}
                className="w-16 h-16 rounded-full border-3 border-white shadow-md object-cover -ml-3"
              />
              <Image
                src="/Home/Carousal/Sri.JPG"
                alt="Teacher 5"
                width={60}
                height={60}
                className="w-16 h-16 rounded-full border-3 border-white shadow-md object-cover -ml-3"
              />
              <Image
                src="/Home/Carousal/Tushar.JPG"
                alt="Teacher 6"
                width={60}
                height={60}
                className="w-16 h-16 rounded-full border-3 border-white shadow-md object-cover -ml-3"
              />

              {/* Count bubble */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full border-3 border-white bg-[#0F3D3E] text-white font-bold text-lg shadow-md -ml-3">
                135+
              </div>
            </div>
          </section>




        </div>

      </div>

      <CurvyHeader />
    </div>
  )
}
