"use client";

import { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question:
      "I don't want any sessions for any competitive exams or the 3K. I just need for syllabus?",
    answer: "Yes. It can be customised to meet your child's needs.",
  },
  {
    question:
      "I don't want any sessions for the school syllabus or the competitive exams. I just want to widen my knowledge with some basics",
    answer:
      "Yes, you can opt for 'Kindling Concepts' or 'Keystone Curiosity' from 3K.",
  },
  {
    question: "Once the itinerary is set, can the sessions and its order be modified?",
    answer:
      "Very much like in a restaurant, you wouldn’t order everything at once but in a sequence, depending on what you can take in first. In the same way, our sessions are paced so they are never counter-productive.",
  },
  {
    question: "How many sessions per week?",
    answer:
      "It entirely depends on your preference. We begin with a minimum of 2 sessions per week, and it can extend to 5 or 6, based on what your child is comfortable with.",
  },
  {
    question: "Will the session be online?",
    answer:
      "Yes, for the time being all sessions are online only due to obvious logistical reasons.",
  },
  {
    question: "Will it always be one-to-one?",
    answer:
      "Yes. If you wish to bring a classmate or friend to share the classroom with, and if we find it productive, we allow it. In such cases, the maximum group size is three.",
  },
  {
    question: "Under such a circumstance, will there be any concession of the fee?",
    answer: "Yes, a concession in the fee will be considered.",
  },
  {
    question: "Are two classes of demo mandatory?",
    answer:
      "Of course not. A single session is sufficient. The second one has been added temporarily to help build your trust in us.",
  },
  {
    question: "The charges aren't listed anywhere?",
    answer:
      "Yes, the prices are not listed. For now, they will be discussed after the demo sessions.",
  },
  {
    question: "Are the workshops only for school premises?",
    answer:
      "No. The workshops can be conducted in schools, colleges, corporate spaces, or any environment where there is a genuine interest in learning mathematics.",
  },
  {
    question: "Can we have workshops online?",
    answer: "Yes. While the preference is always in person, we're open to conducting them online.",
  },
  {
    question:
      "Through the 'Keystone Curiosity' initiative, we want our school to introduce research early on. Is it possible to integrate recurring sessions into the syllabus?",
    answer:
      "Yes. We are open to this and fully capable of designing a model that can be incorporated on a weekly basis to meet your institution’s needs.",
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
          Find answers to common questions about sessions, workshops, and pricing.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border rounded-xl bg-white shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center p-4 text-left"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
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
