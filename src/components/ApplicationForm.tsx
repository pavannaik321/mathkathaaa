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
          Book a <span className="text-[#fece11]">TWO FREE</span> Class for your child!
        </h3>

        <p className="text-white mb-4">Enter your details below</p>

        {/* Form */}
        <form className="space-y-4">
          {/* Phone Number with Country Code */}
          <div className="flex">
            {/* <select
              className="px-3 py-2 border border-gray-300 rounded-l-md bg-white text-black focus:outline-none"
              defaultValue="+91"
            >
              <option value="+91">🇮🇳 +91 (India)</option>
              <option value="+1">🇺🇸 +1 (USA)</option>
              <option value="+44">🇬🇧 +44 (UK)</option>
              <option value="+61">🇦🇺 +61 (Australia)</option>
              <option value="+971">🇦🇪 +971 (UAE)</option>
              <option value="+92">🇵🇰 +92 (Pakistan)</option>
              <option value="+880">🇧🇩 +880 (Bangladesh)</option>
              <option value="+94">🇱🇰 +94 (Sri Lanka)</option>
            </select> */}
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
