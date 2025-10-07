// "use client";

// export default function CareersPage() {
//   const jobs = [
//     {
//       title: "Operations Associate",
//       type: "Full-time | Hybrid",
//       overview:
//         "As an Operations Associate, you will play a critical role in the day-to-day activities. You will ensure seamless execution of workshops, coordinate with education institutes, and provide operational support to the team. Ensuring social presence.",
//       responsibilities: [
//         "Coordinate scheduling of workshops and sessions.",
//         "Manage or assist communication with students, parents, and partner institutes.",
//         "Ensure smooth day-to-day functioning of classes (online & offline).",
//         "Assist the founder in logistics and administrative tasks.",
//         "Assist in handling Social Media for the platform.",
//       ],
//       eligibility: [
//         "Under-graduate or Graduate in any discipline (preferably with interest in education/ed-tech).",
//         "Strong organizational and communication skills.",
//         "Comfortable with digital tools (Google Workspace, scheduling apps).",
//       ],
//     },
//     {
//       title: "Teacher",
//       type: "Part-time | Online",
//       overview:
//         "As a Teacher, you will deliver high-quality, engaging math sessions that blend syllabus requirements with curiosity-driven learning. You will play a key role in shaping how students experience mathematics.",
//       responsibilities: [
//         "Conduct engaging math sessions across school/college levels.",
//         "Adapt teaching to student needs, syllabus requirements, and curiosity-driven exploration.",
//         "Assist in creating learning material, activities, and assessments.",
//         "Foster an encouraging and inclusive classroom environment.",
//       ],
//       eligibility: [
//         "Bachelor’s/Master’s in Mathematics (or related fields).",
//         "Prior teaching experience preferred.",
//         "Passion for teaching and ability to simplify concepts creatively.",
//       ],
//     },
//     {
//       title: "Finance & Accounting Associate",
//       type: "Part-time | Contract-based",
//       overview:
//         "As a Finance & Accounting Associate, you will manage the financial health of the company by ensuring accuracy in records, compliance with requirements, and transparency in reporting.",
//       responsibilities: [
//         "Maintain accurate financial records, invoicing, and reimbursements.",
//         "Track budgets, expenses, and revenues.",
//         "Ensure compliance with accounting and tax requirements.",
//         "Provide regular financial reports to the founding team.",
//       ],
//       eligibility: [
//         "Bachelor’s in Commerce/Accounting/Finance.",
//         "Basic knowledge of accounting software (Tally/Zoho/QuickBooks).",
//         "Attention to detail and reliability.",
//       ],
//     },
//   ];

//   return (
//     <section className="bg-[#0F3D3E] px-6 py-28">
//       {/* Title */}
//       <h1 className="text-4xl font-extrabold text-center text-white mb-6">
//         Careers at <span className="text-[#fece11]">Our Company</span>
//       </h1>
//       <p className="text-center text-gray-200 max-w-2xl mx-auto mb-12 text-lg">
//         Join us in shaping the future of education! Explore our current
//         opportunities and become part of a passionate, impact-driven team.
//       </p>

//       {/* Job Cards */}
//       <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
//         {jobs.map((job, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300 hover:shadow-2xl flex flex-col"
//           >
//             {/* Header */}
//             <div className="bg-gradient-to-r from-[#0F3D3E] to-[#145E5E] px-6 py-4">
//               <h2 className="text-xl font-bold text-white">{job.title}</h2>
//               <p className="text-sm text-gray-200">{job.type}</p>
//             </div>

//             {/* Body */}
//             <div className="p-6 flex flex-col gap-4 flex-1">
//               <p className="text-gray-700 text-sm leading-relaxed">
//                 {job.overview}
//               </p>

//               <div>
//                 <h3 className="text-[#0F3D3E] font-semibold mb-2">
//                   Key Responsibilities:
//                 </h3>
//                 <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
//                   {job.responsibilities.map((resp, i) => (
//                     <li key={i}>{resp}</li>
//                   ))}
//                 </ul>
//               </div>

//               <div>
//                 <h3 className="text-[#0F3D3E] font-semibold mb-2">
//                   Eligibility:
//                 </h3>
//                 <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
//                   {job.eligibility.map((el, i) => (
//                     <li key={i}>{el}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             {/* Apply Button */}
//             <div className="px-6 py-4 bg-gray-50 border-t">
//               <button className="w-full bg-[#fece11] text-[#0F3D3E] font-semibold px-4 py-3 rounded-full hover:bg-[#e6b800] transition">
//                 Apply Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }









// "use client";
// import { useState } from "react";

// export default function CareersPage() {
//   const [showModal, setShowModal] = useState(false);
//   interface FormDataState {
//     name: string;
//     email: string;
//     phone: string;
//     cv: File | null;
//     jobTitle: string;
//   }
  
//   const [formData, setFormData] = useState<FormDataState>({
//     name: "",
//     email: "",
//     phone: "",
//     cv: null,
//     jobTitle: "",
//   });
  

//   const handleApply = (title: string) => {
//     setFormData({ ...formData, jobTitle: title });
//     setShowModal(true);
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const data = new FormData();
//     data.append("name", formData.name);
//     data.append("email", formData.email);
//     data.append("phone", formData.phone);
//     data.append("jobTitle", formData.jobTitle);
//     if (formData.cv !== null) {
//       data.append("cv", formData.cv);
//     }

//     const res = await fetch("/api/job-application", {
//       method: "POST",
//       body: data,
//     });

//     if (res.ok) {
//       alert("Application submitted successfully!");
//       setShowModal(false);
//     } else {
//       alert("Failed to send application.");
//     }
//   };

//   const jobs = [
//     {
//       title: "Operations Associate",
//       type: "Full-time | Hybrid",
//       overview:
//         "As an Operations Associate, you will play a critical role in the day-to-day activities. You will ensure seamless execution of workshops, coordinate with education institutes, and provide operational support to the team. Ensuring social presence.",
//       responsibilities: [
//         "Coordinate scheduling of workshops and sessions.",
//         "Manage or assist communication with students, parents, and partner institutes.",
//         "Ensure smooth day-to-day functioning of classes (online & offline).",
//         "Assist the founder in logistics and administrative tasks.",
//         "Assist in handling Social Media for the platform.",
//       ],
//       eligibility: [
//         "Under-graduate or Graduate in any discipline (preferably with interest in education/ed-tech).",
//         "Strong organizational and communication skills.",
//         "Comfortable with digital tools (Google Workspace, scheduling apps).",
//       ],
//     },
//     {
//       title: "Teacher",
//       type: "Part-time | Online",
//       overview:
//         "As a Teacher, you will deliver high-quality, engaging math sessions that blend syllabus requirements with curiosity-driven learning. You will play a key role in shaping how students experience mathematics.",
//       responsibilities: [
//         "Conduct engaging math sessions across school/college levels.",
//         "Adapt teaching to student needs, syllabus requirements, and curiosity-driven exploration.",
//         "Assist in creating learning material, activities, and assessments.",
//         "Foster an encouraging and inclusive classroom environment.",
//       ],
//       eligibility: [
//         "Bachelor’s/Master’s in Mathematics (or related fields).",
//         "Prior teaching experience preferred.",
//         "Passion for teaching and ability to simplify concepts creatively.",
//       ],
//     },
//     {
//       title: "Finance & Accounting Associate",
//       type: "Part-time | Contract-based",
//       overview:
//         "As a Finance & Accounting Associate, you will manage the financial health of the company by ensuring accuracy in records, compliance with requirements, and transparency in reporting.",
//       responsibilities: [
//         "Maintain accurate financial records, invoicing, and reimbursements.",
//         "Track budgets, expenses, and revenues.",
//         "Ensure compliance with accounting and tax requirements.",
//         "Provide regular financial reports to the founding team.",
//       ],
//       eligibility: [
//         "Bachelor’s in Commerce/Accounting/Finance.",
//         "Basic knowledge of accounting software (Tally/Zoho/QuickBooks).",
//         "Attention to detail and reliability.",
//       ],
//     },
//   ];

//   return (
//     <section className="bg-[#0F3D3E] px-6 py-28">
//       <h1 className="text-4xl font-extrabold text-center text-white mb-6">
//         Careers at <span className="text-[#fece11]">Our Company</span>
//       </h1>

//       <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
//         {jobs.map((job, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-2xl shadow-lg p-6 flex flex-col"
//           >
//                 {/* Header */}
//                 <div className="bg-gradient-to-r from-[#0F3D3E] to-[#145E5E] px-6 py-4 rounded-2xl">
//               <h2 className="text-xl font-bold text-white">{job.title}</h2>
//               <p className="text-sm text-gray-200">{job.type}</p>
//             </div>

//             {/* Body */}
//             <div className="p-6 flex flex-col gap-4 flex-1">
//               <p className="text-gray-700 text-sm leading-relaxed">
//                 {job.overview}
//               </p>

//               <div>
//                 <h3 className="text-[#0F3D3E] font-semibold mb-2">
//                   Key Responsibilities:
//                 </h3>
//                 <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
//                   {job.responsibilities.map((resp, i) => (
//                     <li key={i}>{resp}</li>
//                   ))}
//                 </ul>
//               </div>

//               <div>
//                 <h3 className="text-[#0F3D3E] font-semibold mb-2">
//                   Eligibility:
//                 </h3>
//                 <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
//                   {job.eligibility.map((el, i) => (
//                     <li key={i}>{el}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//             <button
//               onClick={() => handleApply(job.title)}
//               className="mt-auto bg-[#fece11] text-[#0F3D3E] font-semibold px-4 py-3 rounded-full hover:bg-[#e6b800] transition"
//             >
//               Apply Now
//             </button>
//           </div>
//         ))}
//       </div>

//       {showModal && (
//         <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50">
//           <div className="bg-white rounded-2xl p-8 w-full max-w-md">
//             <h2 className="text-2xl font-bold text-[#0F3D3E] mb-4">
//               Apply for {formData.jobTitle}
//             </h2>
//             <form onSubmit={handleSubmit} className="flex flex-col gap-3">
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 required
//                 className="border p-2 rounded"
//                 onChange={(e) =>
//                   setFormData({ ...formData, name: e.target.value })
//                 }
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 required
//                 className="border p-2 rounded"
//                 onChange={(e) =>
//                   setFormData({ ...formData, email: e.target.value })
//                 }
//               />
//               <input
//                 type="tel"
//                 placeholder="Phone"
//                 required
//                 className="border p-2 rounded"
//                 onChange={(e) =>
//                   setFormData({ ...formData, phone: e.target.value })
//                 }
//               />
//               <input
//                 type="file"
//                 accept=".pdf,.doc,.docx"
//                 required
//                 className="border p-2 rounded"
//                 onChange={(e) => {
//                   const files = (e.target as HTMLInputElement).files;
//                   setFormData({ ...formData, cv: e.target.files?.[0] || null })
//                 }}
//               />
//               <button
//                 type="submit"
//                 className="bg-[#0F3D3E] text-white rounded-full py-2 font-semibold"
//               >
//                 Submit Application
//               </button>
//               <button
//                 type="button"
//                 className="text-sm text-gray-600 underline"
//                 onClick={() => setShowModal(false)}
//               >
//                 Cancel
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }







"use client";
import { useState } from "react";

export default function CareersPage() {
  const [showModal, setShowModal] = useState(false);

  interface FormDataState {
    name: string;
    email: string;
    phone: string;
    cv: File | null;
    jobTitle: string;
  }

  const [formData, setFormData] = useState<FormDataState>({
    name: "",
    email: "",
    phone: "",
    cv: null,
    jobTitle: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleApply = (title: string) => {
    setFormData({ ...formData, jobTitle: title });
    setShowModal(true);
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
    }

    if (!formData.cv) {
      newErrors.cv = "CV file is required.";
    } else {
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(formData.cv.type)) {
        newErrors.cv = "Only PDF or Word files are allowed.";
      }
      if (formData.cv.size > 5 * 1024 * 1024) {
        newErrors.cv = "File size must not exceed 5 MB.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("jobTitle", formData.jobTitle);
    if (formData.cv) data.append("cv", formData.cv);

    const res = await fetch("/api/job-application", {
      method: "POST",
      body: data,
    });

    if (res.ok) {
      alert("Application submitted successfully!");
      setShowModal(false);
      setFormData({ name: "", email: "", phone: "", cv: null, jobTitle: "" });
    } else {
      alert("Failed to send application.");
    }
  };

  const jobs = [
    {
      title: "Operations Associate",
      type: "Full-time | Hybrid",
      overview:
        "As an Operations Associate, you will play a critical role in the day-to-day activities. You will ensure seamless execution of workshops, coordinate with education institutes, and provide operational support to the team. Ensuring social presence.",
      responsibilities: [
        "Coordinate scheduling of workshops and sessions.",
        "Manage or assist communication with students, parents, and partner institutes.",
        "Ensure smooth day-to-day functioning of classes (online & offline).",
        "Assist the founder in logistics and administrative tasks.",
        "Assist in handling Social Media for the platform.",
      ],
      eligibility: [
        "Under-graduate or Graduate in any discipline (preferably with interest in education/ed-tech).",
        "Strong organizational and communication skills.",
        "Comfortable with digital tools (Google Workspace, scheduling apps).",
      ],
    },
    {
      title: "Teacher",
      type: "Part-time | Online",
      overview:
        "As a Teacher, you will deliver high-quality, engaging math sessions that blend syllabus requirements with curiosity-driven learning. You will play a key role in shaping how students experience mathematics.",
      responsibilities: [
        "Conduct engaging math sessions across school/college levels.",
        "Adapt teaching to student needs, syllabus requirements, and curiosity-driven exploration.",
        "Assist in creating learning material, activities, and assessments.",
        "Foster an encouraging and inclusive classroom environment.",
      ],
      eligibility: [
        "Bachelor’s/Master’s in Mathematics (or related fields).",
        "Prior teaching experience preferred.",
        "Passion for teaching and ability to simplify concepts creatively.",
      ],
    },
    {
      title: "Finance & Accounting Associate",
      type: "Part-time | Contract-based",
      overview:
        "As a Finance & Accounting Associate, you will manage the financial health of the company by ensuring accuracy in records, compliance with requirements, and transparency in reporting.",
      responsibilities: [
        "Maintain accurate financial records, invoicing, and reimbursements.",
        "Track budgets, expenses, and revenues.",
        "Ensure compliance with accounting and tax requirements.",
        "Provide regular financial reports to the founding team.",
      ],
      eligibility: [
        "Bachelor’s in Commerce/Accounting/Finance.",
        "Basic knowledge of accounting software (Tally/Zoho/QuickBooks).",
        "Attention to detail and reliability.",
      ],
    },
  ];

  return (
    <section className="bg-[#0F3D3E] px-6 py-28">
      <h1 className="text-4xl font-extrabold text-center text-white mb-6">
        Careers at <span className="text-[#fece11]">Our Company</span>
      </h1>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col"
          >
                {/* Header */}
                <div className="bg-gradient-to-r from-[#0F3D3E] to-[#145E5E] px-6 py-4 rounded-2xl">
              <h2 className="text-xl font-bold text-white">{job.title}</h2>
              <p className="text-sm text-gray-200">{job.type}</p>
            </div>

            {/* Body */}
            <div className="p-6 flex flex-col gap-4 flex-1">
              <p className="text-gray-700 text-sm leading-relaxed">
                {job.overview}
              </p>

              <div>
                <h3 className="text-[#0F3D3E] font-semibold mb-2">
                  Key Responsibilities:
                </h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {job.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-[#0F3D3E] font-semibold mb-2">
                  Eligibility:
                </h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {job.eligibility.map((el, i) => (
                    <li key={i}>{el}</li>
                  ))}
                </ul>
              </div>
            </div>
            <button
              onClick={() => handleApply(job.title)}
              className="mt-auto bg-[#fece11] text-[#0F3D3E] font-semibold px-4 py-3 rounded-full hover:bg-[#e6b800] transition"
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50">
          <div className="bg-white rounded-2xl p-8 w-full max-w-md">
            <h2 className="text-2xl font-bold text-[#0F3D3E] mb-4">
              Apply for {formData.jobTitle}
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border p-2 rounded w-full"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="border p-2 rounded w-full"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="border p-2 rounded w-full"
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
                {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
              </div>

              <div>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="border p-2 rounded w-full"
                  onChange={(e) => {
                    const file = e.target.files?.[0] || null;
                    setFormData({ ...formData, cv: file });
                  }}
                />
                {errors.cv && <p className="text-red-600 text-sm">{errors.cv}</p>}
              </div>

              <button
                type="submit"
                className="bg-[#0F3D3E] text-white rounded-full py-2 font-semibold"
              >
                Submit Application
              </button>
              <button
                type="button"
                className="text-sm text-gray-600 underline"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
