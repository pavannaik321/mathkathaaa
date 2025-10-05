"use client";

export default function WorkshopForm() {
  return (
    <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-md w-full max-w-5xl mx-auto my-10">
      {/* Left Section */}
      <div
        className="bg-orange-500 text-white flex flex-col justify-center items-center p-8 md:p-12 md:w-1/2 relative"
        style={{
          backgroundImage: "url('Home/ApplicationForm/girl.png')", // Replace with actual image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black/40 absolute inset-0 rounded-2xl"></div>
        <h2 className="relative text-3xl md:text-4xl font-bold text-center z-10">
          Plan a <span className="text-[#fece11]">Math Workshop</span>
        </h2>
        <p className="relative mt-4 text-center text-white/90 z-10 max-w-xs">
          Host interactive workshops to spark mathematical curiosity and
          learning in your institute.
        </p>
      </div>

      {/* Right Section */}
      <div className="bg-[#0F3D3E] p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Book a <span className="text-[#fece11]">Workshop</span> for your Institute
        </h3>

        <p className="text-white mb-4">Enter your details below</p>

        {/* Form */}
        <form className="space-y-4 text-white">
          {/* Institute's Name */}
          <input
            type="text"
            placeholder="Institute's Name"
            className="w-full text-white px-4 py-2 border border-gray-300 rounded-md focus:outline-none placeholder:text-gray-400"
          />

          {/* City */}
          <input
            type="text"
            placeholder="City"
            className="w-full text-white px-4 py-2 border border-gray-300 rounded-md focus:outline-none placeholder:text-gray-400"
          />

          {/* Mode */}
          <select
            className="w-full text-white px-4 py-2 border border-gray-300 rounded-md bg-transparent focus:outline-none"
            defaultValue=""
          >
            <option value="" disabled>
              Select Mode (Online / Offline)
            </option>
            <option value="Online" className="text-black">
              Online
            </option>
            <option value="Offline" className="text-black">
              Offline
            </option>
          </select>

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full text-white px-4 py-2 border border-gray-300 rounded-md focus:outline-none placeholder:text-gray-400"
          />

          {/* Expected Age Group */}
          <input
            type="text"
            placeholder="Expected age-group for the workshop"
            className="w-full text-white px-4 py-2 border border-gray-300 rounded-md focus:outline-none placeholder:text-gray-400"
          />

          {/* Queries */}
          <textarea
            placeholder="Any queries or questions you may have..."
            rows={4}
            className="w-full text-white px-4 py-2 border border-gray-300 rounded-md focus:outline-none placeholder:text-gray-400"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#cca300] text-white font-semibold px-4 py-3 rounded-full transition hover:bg-[#e6b800]"
          >
            Submit Workshop Request
          </button>
        </form>
      </div>
    </div>
  );
}
