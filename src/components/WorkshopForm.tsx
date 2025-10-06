"use client";

import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function WorkshopForm() {
  const [form, setForm] = useState({
    instituteName: "",
    city: "",
    mode: "",
    email: "",
    ageGroup: "",
    query: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/workshop-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        toast.success("Workshop request submitted successfully!");
        setForm({ instituteName: "", city: "", mode: "", email: "", ageGroup: "", query: "" });
      } else {
        toast.error("Failed to send. Please try again later.");
      }
    } catch (err) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-md w-full max-w-5xl mx-auto my-10">
      <Toaster position="top-center" />

      {/* Left Section */}
      <div
        className="bg-orange-500 text-white flex flex-col justify-center items-center p-8 md:p-12 md:w-1/2 relative"
        style={{
          backgroundImage: "url('Home/ApplicationForm/girl.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black/40 absolute inset-0 rounded-2xl"></div>
        <h2 className="relative text-3xl md:text-4xl font-bold text-center z-10">
          Plan a <span className="text-[#fece11]">Math Workshop</span>
        </h2>
        <p className="relative mt-4 text-center text-white/90 z-10 max-w-xs">
          Host interactive workshops to spark mathematical curiosity and learning in your institute.
        </p>
      </div>

      {/* Right Section */}
      <div className="bg-[#0F3D3E] p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Book a <span className="text-[#fece11]">Workshop</span> for your Institute
        </h3>

        <form className="space-y-4 text-white" onSubmit={handleSubmit}>
          <input
            type="text"
            name="instituteName"
            value={form.instituteName}
            onChange={handleChange}
            placeholder="Institute's Name"
            className="w-full text-white px-4 py-2 border border-gray-300 rounded-md focus:outline-none placeholder:text-gray-400"
          />

          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="City"
            className="w-full text-white px-4 py-2 border border-gray-300 rounded-md focus:outline-none placeholder:text-gray-400"
          />

          <select
            name="mode"
            value={form.mode}
            onChange={handleChange}
            className="w-full text-white px-4 py-2 border border-gray-300 rounded-md bg-transparent focus:outline-none"
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

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full text-white px-4 py-2 border border-gray-300 rounded-md focus:outline-none placeholder:text-gray-400"
          />

          <input
            type="text"
            name="ageGroup"
            value={form.ageGroup}
            onChange={handleChange}
            placeholder="Expected age-group for the workshop"
            className="w-full text-white px-4 py-2 border border-gray-300 rounded-md focus:outline-none placeholder:text-gray-400"
          />

          <textarea
            name="query"
            value={form.query}
            onChange={handleChange}
            placeholder="Any queries or questions you may have..."
            rows={4}
            className="w-full text-white px-4 py-2 border border-gray-300 rounded-md focus:outline-none placeholder:text-gray-400"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#cca300] text-white font-semibold px-4 py-3 rounded-full transition hover:bg-[#e6b800]"
          >
            {loading ? "Sending..." : "Submit Workshop Request"}
          </button>
        </form>
      </div>
    </div>
  );
}
