// src/app/components/ApplyModal.tsx
"use client";

import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

type ApplyModalProps = {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
};

export default function ApplyModal({ isOpen, onClose, jobTitle }: ApplyModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [cv, setCv] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phone || !email || !cv) {
      toast.error("Please fill all fields and upload your CV.");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("email", email);
      formData.append("jobTitle", jobTitle);
      formData.append("cv", cv);

      const res = await fetch("/api/apply", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Application submitted successfully!");
        setName("");
        setPhone("");
        setEmail("");
        setCv(null);
        onClose();
      } else {
        toast.error(data.message || "Something went wrong!");
      }
    } catch (error) {
      toast.error("Failed to submit application.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <Toaster position="bottom-right" />
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white rounded-2xl max-w-md w-full p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-bold"
          >
            ✕
          </button>
          <h2 className="text-xl font-bold mb-4 text-[#0F3D3E]">
            Apply for {jobTitle}
          </h2>
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border px-4 py-2 rounded-md focus:outline-none"
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border px-4 py-2 rounded-md focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border px-4 py-2 rounded-md focus:outline-none"
            />
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setCv(e.target.files?.[0] || null)}
              className="border px-4 py-2 rounded-md focus:outline-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-[#fece11] text-[#0F3D3E] font-semibold py-2 rounded-full mt-2 hover:bg-[#e6b800] transition"
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
