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

  const validateForm = () => {
    const { countryCode, phone, email, childName, grade, query } = form;

    if (!countryCode || !phone || !email || !childName || !grade || !query) {
      toast.error("⚠️ Please fill in all the fields before submitting!");
      return false;
    }
    if (!/^\+?\d{1,4}$/.test(countryCode)) {
      toast.error("📞 Enter a valid country code (e.g., +1, +91).");
      return false;
    }
    if (!/^\d{7,15}$/.test(phone)) {
      toast.error("📱 Please enter a valid phone number.");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("📧 Please enter a valid email address.");
      return false;
    }
    if (!/^[A-Za-z\s]+$/.test(childName)) {
      toast.error("👦 Child’s name should contain only letters.");
      return false;
    }
    if (!/^[A-Za-z0-9\s]+$/.test(grade)) {
      toast.error("🏫 Please enter a valid grade.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        toast.success("🎉 Form submitted successfully!", {
          duration: 4000,
          style: {
            background: "#fff",
            color: "#0F3D3E",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: "bold",
            border: "1px solid #0F3D3E",
          },
        });

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

      <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-md w-full max-w-5xl mx-auto my-6 md:my-10 text-white">
        {/* ✅ Mobile Image (FULL view at top) */}
        <div className="md:hidden w-full">
          <img
            src="Home/ApplicationForm/girl.png"
            alt="Student"
            className="w-full h-auto object-cover object-top"
          />
        </div>

        {/* ✅ Left Section (only for desktop) */}
        <div
          className="hidden md:flex bg-orange-500 text-white flex-col justify-center items-center p-8 md:p-12 md:w-1/2 relative"
          style={{
            backgroundImage: "url('Home/ApplicationForm/girl.png')",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        ></div>

        {/* ✅ Right Section (Form) */}
        <div className="bg-[#0F3D3E] p-6 sm:p-8 md:p-12 w-full md:w-1/2 flex flex-col justify-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 text-center md:text-left">
            Book <span className="text-[#fece11]">TWO FREE</span> Classes for your child!
          </h3>

          <form className="space-y-4 text-white" onSubmit={handleSubmit}>
            {/* Phone Number with Country Code */}
            <div className="flex flex-col sm:flex-row sm:space-x-2">
              <input
                type="tel"
                name="countryCode"
                value={form.countryCode}
                onChange={handleChange}
                placeholder="+91"
                className="px-4 py-2 border w-full sm:w-24 border-gray-300 rounded-md focus:outline-none text-white placeholder:text-gray-400 bg-transparent"
              />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Parent’s Mobile Number"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none text-white placeholder:text-gray-400 bg-transparent w-full"
              />
            </div>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Parent’s Email Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-white placeholder:text-gray-400 bg-transparent"
            />

            <input
              type="text"
              name="childName"
              value={form.childName}
              onChange={handleChange}
              placeholder="Child’s Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-white placeholder:text-gray-400 bg-transparent"
            />

            <input
              type="text"
              name="grade"
              value={form.grade}
              onChange={handleChange}
              placeholder="Grade"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-white placeholder:text-gray-400 bg-transparent"
            />

            <textarea
              name="query"
              value={form.query}
              onChange={handleChange}
              placeholder="Any queries or questions you may have..."
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-white placeholder:text-gray-400 bg-transparent"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-[#cca300] text-white font-semibold px-4 py-3 rounded-full transition-all text-sm sm:text-base ${
                loading ? "opacity-70 cursor-not-allowed" : "hover:bg-[#e6b800]"
              }`}
            >
              {loading ? "Sending..." : "Book Free Math Classes"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
