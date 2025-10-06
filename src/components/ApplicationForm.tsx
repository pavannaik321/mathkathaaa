"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function FreeMathClassForm() {
  const [form, setForm] = useState({
    countryCode: "",
    phone: "",
    email: "",
    childName: "",
    grade: "",
    query: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("🎉 Form submitted successfully!",
          {
            duration: 4000,
            style: {
              background: "#fff",
              color: "#0F3D3E",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "bold",
              textAlign: "center",
              padding: "10px",
              margin: "10px",
              border: "1px solid #0F3D3E",
              boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease",
              
            },
          }


        );
        setForm({
          countryCode: "",
          phone: "",
          email: "",
          childName: "",
          grade: "",
          query: "",
        });
      } else {
        toast.error("❌ Failed to send. Please try again later.");
      }
    } catch (error) {
      toast.error("⚠️ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#0F3D3E",
            color: "#fff",
            borderRadius: "8px",
            fontSize: "14px",
          },
          success: { iconTheme: { primary: "#FFD93D", secondary: "#0F3D3E" } },
        }}
      />

      <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-md w-full max-w-5xl mx-auto my-10 text-white">
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
            Book <span className="text-[#fece11]">TWO FREE</span> Class for your
            child!
          </h3>

          <form className="space-y-4 text-white" onSubmit={handleSubmit}>
            {/* Phone Number with Country Code */}
            <div className="flex">
              <input
                type="tel"
                name="countryCode"
                value={form.countryCode}
                onChange={handleChange}
                placeholder="+1"
                className="px-4 py-2 border w-15 border-gray-300 rounded-md focus:outline-none placeholder:text-gray-400 mr-2"
              />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Parent’s Mobile Number"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none placeholder:text-gray-400"
              />
            </div>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Parent’s Email Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-white placeholder:text-gray-400"
            />
            <input
              type="text"
              name="childName"
              value={form.childName}
              onChange={handleChange}
              placeholder="Child’s Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-white placeholder:text-gray-400"
            />
            <input
              type="text"
              name="grade"
              value={form.grade}
              onChange={handleChange}
              placeholder="Grade"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-white placeholder:text-gray-400"
            />
            <textarea
              name="query"
              value={form.query}
              onChange={handleChange}
              placeholder="Any queries or questions you may have..."
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-white placeholder:text-gray-400"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#cca300] text-white font-semibold px-4 py-3 rounded-full transition"
            >
              {loading ? "Sending..." : "Book A Free Math Class"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
