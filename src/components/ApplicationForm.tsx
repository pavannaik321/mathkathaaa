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

  // ✅ Validation function
  const validateForm = () => {
    const { countryCode, phone, email, childName, grade, query } = form;

    // All fields required
    if (!countryCode || !phone || !email || !childName || !grade || !query) {
      toast.error("⚠️ Please fill in all the fields before submitting!");
      return false;
    }

    // Country code validation
    if (!/^\+?\d{1,4}$/.test(countryCode)) {
      toast.error("📞 Enter a valid country code (e.g., +1, +91).");
      return false;
    }

    // Phone validation (minimum 7 digits)
    if (!/^\d{7,15}$/.test(phone)) {
      toast.error("📱 Please enter a valid phone number.");
      return false;
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("📧 Please enter a valid email address.");
      return false;
    }

    // Child name validation (only alphabets and spaces)
    if (!/^[A-Za-z\s]+$/.test(childName)) {
      toast.error("👦 Child’s name should contain only letters.");
      return false;
    }

    // Grade validation
    if (!/^[A-Za-z0-9\s]+$/.test(grade)) {
      toast.error("🏫 Please enter a valid grade.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return; // ❌ Stop submission if invalid

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

        // Reset form
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
            Book <span className="text-[#fece11]">TWO FREE</span> Classes for your
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
                placeholder="+91"
                className="px-4 py-2 border w-20 border-gray-300 rounded-md focus:outline-none text-white placeholder:text-gray-500 mr-2"
              />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Parent’s Mobile Number"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none text-white placeholder:text-gray-500"
              />
            </div>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Parent’s Email Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-white placeholder:text-gray-500"
            />

            <input
              type="text"
              name="childName"
              value={form.childName}
              onChange={handleChange}
              placeholder="Child’s Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-white placeholder:text-gray-500"
            />

            <input
              type="text"
              name="grade"
              value={form.grade}
              onChange={handleChange}
              placeholder="Grade"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-white placeholder:text-gray-500"
            />

            <textarea
              name="query"
              value={form.query}
              onChange={handleChange}
              placeholder="Any queries or questions you may have..."
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-white placeholder:text-gray-500"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-[#cca300] text-white font-semibold px-4 py-3 rounded-full transition ${
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
