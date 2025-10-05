"use client";

export default function FreeMathClassForm() {
  return (
    <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-md w-full max-w-5xl mx-auto my-10">
      {/* Left Section */}
      <div
        className="bg-orange-500 text-white flex flex-col justify-center items-center p-8 md:p-12 md:w-1/2 relative"
        style={{
          backgroundImage: "url('Home/ApplicationForm/girl.png')", 
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      ></div>

      {/* Right Section */}
      <div className="bg-[#0F3D3E] p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Book <span className="text-[#fece11]">TWO FREE</span> Class for your child!
        </h3>

        <p className="text-white mb-4">Enter your details below</p>

        {/* Form */}
        <form className="space-y-4 text-white">
          {/* Phone Number with Country Code */}
          <div className="flex">

            <input
              type="tel"
              placeholder="+91"
              className="px-4 py-2 border w-15 border-gray-300 rounded-md focus:outline-none placeholder:text-gray-400 mr-2"
            />
            <input
              type="tel"
              placeholder="Parent’s Mobile Number"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none placeholder:text-gray-400"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Parent’s Email Address"
            className="w-full text-white px-4 py-2 border border-gray-300 rounded-md focus:outline-none placeholder:text-gray-400"
          />

          {/* Child's Name */}
          <input
            type="text"
            placeholder="Child’s Name"
            className="w-full text-white px-4 py-2 border border-gray-300 rounded-md focus:outline-none placeholder:text-gray-400"
          />

          {/* Grade */}
          <input
            type="text"
            placeholder="Grade"
            className="w-full text-white px-4 py-2 border border-gray-300 rounded-md focus:outline-none placeholder:text-gray-400"
          />

          {/* Query Box */}
          <textarea
            placeholder="Any queries or questions you may have..."
            rows={4}
            className="w-full text-white px-4 py-2 border border-gray-300 rounded-md focus:outline-none placeholder:text-gray-400"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#cca300] text-white font-semibold px-4 py-3 rounded-full transition"
          >
            Book A Free Math Class
          </button>
        </form>
      </div>
    </div>
  );
}
