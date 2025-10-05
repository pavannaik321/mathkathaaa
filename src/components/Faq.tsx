"use client";

import { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question:
      "I don't want any sessions for any competative exams or the 3K. I just need for syllabus?",
    answer: "Yes. It can be customised to meet the your child's need.",
  },
  {
    question:
      "I don't want any sessions for the school syllabus or the competative exams. I just want to widen my knowledge with some basics",
    answer:
      'Yes, you can opt of "Kindling Concepts" or "Keystone Curiosity" from 3K.',
  },
  {
    question: "Once the itinerary is set, can the sessions and their order be modified?",
    answer:
      "Yes. The learning plan is designed to be flexible and adaptive. Sessions are scheduled in a sequence that supports effective learning, ensuring they are never overwhelming or counter-productive. Each itinerary is created for a comfortable duration, and subsequent plans are refined and adjusted as the previous set of sessions concludes.",
  },
  {
    question: "How many sessions are conducted per week?",
    answer:
      "The frequency is flexible and based on individual preference. We typically begin with a minimum of 2 sessions per week, which can be increased up to 5 or 6 sessions depending on the learner’s comfort and goals.",
  },
  {
    question: "Will the sessions be conducted online?",
    answer:
      "Yes. At present, all sessions are conducted online to ensure flexibility and overcome logistical constraints.",
  },
  {
    question: "Will it always be one-to-one?",
    answer:
      "No, not necessarily. The course that is customized from your end will always be one-to-one. However, the foundation and the exploration track can have atmost of three students.",
  },
  {
    question:
      "I do want a customized course, but my friend wants to tag for the same course, is it possible?",
    answer:
      "Yes. If both of you mutually agree to take the sessions together, we can accommodate this arrangement, provided it supports effective learning and does not become counter-productive.",
  },
  {
    question: "Under such a circumstance, will there be any concession of the fee?",
    answer: "Yes, a concession in the fee will be considered.",
  },
  {
    question: "Are two class of demo mandatory?",
    answer:
      "Of course not. A single session is sufficient. The second one has been added temporarily to help build your trust in us.",
  },
  {
    question: "The charges aren't listed anywhere?",
    answer:
      "Yes, the prices are not listed. For now, they will be discussed after the demo sessions. If your child wishes to continue, the fee will be shared based on the specific needs and time frame. However, for the foundational and exploration track, the charges are fixed.",
  },
  {
    question: "Are the worshops only for school premises?",
    answer:
      "No. Our workshops can be organized in schools, colleges, corporate spaces, or any setting where there is a genuine interest in learning mathematics. The format and content are tailored to the audience and environment, ensuring each session is both meaningful and engaging.",
  },
  {
    question: "Can we choose, more than one session for workshop?",
    answer: "Yes. We can even execute on series of topics.",
  },
  {
    question: "Can we request for a custmoized workshop that is not listed on the website?",
    answer:
      "Our objective is to deliver Math to seekers' need. Hence, yes, we can will consider that request.",
  },
  {
    question: "Can we have workshops online?",
    answer: "Yes, while the preference is always in-person, we'd be open for that.",
  },
  {
    question:
      'Through the "Keystone Curiosity" initiative, we want our school to introduce research early on. Is it possible to integrate recurring sessions into the syllabus?',
    answer:
      "Yes. We are open to this and fully capable of designing a model that can be incorporated on a weekly basis, stretching over months, to meet your institution’s needs. Recurring sessions not only sustain curiosity but also help students gradually build the habits of inquiry, problem-solving, and independent thinking—skills that are at the heart of both research and mathematics.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Find answers to common questions about sessions, workshops, and
          pricing.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border rounded-xl bg-white shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center p-4 text-left"
              >
                <span className="font-medium text-gray-900">
                  {faq.question}
                </span>
                <span className="ml-4 text-xl text-gray-500">
                  {openIndex === idx ? "−" : "+"}
                </span>
              </button>
              {openIndex === idx && (
                <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
