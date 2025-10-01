"use client";

export default function CareersPage() {
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
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-center text-white mb-6">
        Careers at <span className="text-[#fece11]">Our Company</span>
      </h1>
      <p className="text-center text-gray-200 max-w-2xl mx-auto mb-12 text-lg">
        Join us in shaping the future of education! Explore our current
        opportunities and become part of a passionate, impact-driven team.
      </p>

      {/* Job Cards */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300 hover:shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0F3D3E] to-[#145E5E] px-6 py-4">
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

            {/* Apply Button */}
            <div className="px-6 py-4 bg-gray-50 border-t">
              <button className="w-full bg-[#fece11] text-[#0F3D3E] font-semibold px-4 py-3 rounded-full hover:bg-[#e6b800] transition">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
