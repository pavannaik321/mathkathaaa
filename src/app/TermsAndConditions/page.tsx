import React from "react";

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-6 md:p-12 mt-12">
      <div className="mx-auto max-w-4xl bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Header */}
        <header className="bg-[#0F3D3E] p-8 text-white">
          <h1 className="text-3xl md:text-4xl font-extrabold">Terms and Conditions</h1>
          <p className="mt-2 text-sm md:text-base opacity-90">
            Effective date: <strong>{new Date().toLocaleDateString()}</strong>
          </p>
        </header>

        {/* Content */}
        <section className="p-8 md:p-10 space-y-6">
          <p>
            Please read these Terms and Conditions carefully before using our services. By accessing or using Mathkathaaa’s website, classes, or services, you agree to be bound
            by these Terms and Conditions.
          </p>

          <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
          <p>
            By using Mathkathaaa’s website or enrolling in our classes and services, you acknowledge that you have read, understood, and agree to comply with these Terms and
            Conditions.
          </p>

          <h2 className="text-xl font-semibold">2. Services</h2>
          <p>
            Mathkathaaa provides math education through classes, workshops, and related learning resources. We make every effort to ensure the accuracy and quality of the
            materials and information we provide.
          </p>

          <h2 className="text-xl font-semibold">3. Enrollments and Payments</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Enrollment is confirmed only after payment of the applicable fees.</li>
            <li>Fees must be paid in full before the start of the program, unless otherwise agreed upon in writing.</li>
            <li>All payments are non-refundable unless explicitly stated.</li>
          </ul>

          <h2 className="text-xl font-semibold">4. Use of Materials</h2>
          <p>
            All materials, including notes, recordings, and resources provided during sessions, are intended for personal learning use only. You may not reproduce, share, or
            distribute any materials without prior written permission from Mathkathaaa.
          </p>

          <h2 className="text-xl font-semibold">5. Intellectual Property</h2>
          <p>
            All content on our website and within our programs—including text, graphics, logos, and educational resources—is the intellectual property of Mathkathaaa and is
            protected under copyright and other applicable laws.
          </p>

          <h2 className="text-xl font-semibold">6. Limitation of Liability</h2>
          <p>
            Mathkathaaa is not responsible for any direct, indirect, or incidental damages resulting from your use of our website or participation in our programs. While we aim
            to provide a high-quality learning experience, we do not guarantee specific academic results or outcomes.
          </p>

          <h2 className="text-xl font-semibold">7. Student Conduct</h2>
          <p>
            Students are expected to maintain professionalism and respect toward instructors and peers. Disruptive or inappropriate behavior may result in immediate
            termination of enrollment without refund.
          </p>

          <h2 className="text-xl font-semibold">8. Changes to Terms</h2>
          <p>
            Mathkathaaa reserves the right to modify or update these Terms and Conditions at any time. Any such updates will be posted on this page, and continued use of our
            services constitutes acceptance of the revised terms.
          </p>

          <h2 className="text-xl font-semibold">9. Contact Information</h2>
          <p>
            For any questions or concerns about these Terms and Conditions, please contact us:
          </p>
          <ul className="list-disc list-inside">
            <li>Email: <strong>contact@mathkathaaa.com</strong></li>
            <li>Address: <em>(Add your business address here)</em></li>
          </ul>

          <div className="mt-6 border-t pt-6">
            <p className="text-sm text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-100 p-4 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Mathkathaaa. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
