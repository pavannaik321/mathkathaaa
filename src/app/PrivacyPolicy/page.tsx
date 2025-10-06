import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-6 md:p-12 mt-12">
      <div className="mx-auto max-w-4xl bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Header */}
        <header className="bg-[#0F3D3E] p-8 text-white">
          <h1 className="text-3xl md:text-4xl font-extrabold">Privacy Policy</h1>
          <p className="mt-2 text-sm md:text-base opacity-90">
            Effective date: <strong>{new Date().toLocaleDateString()}</strong>
          </p>
        </header>

        {/* Content */}
        <section className="p-8 md:p-10 space-y-6">
          <h2 className="text-xl font-semibold">Our Commitment</h2>
          <p>
            At <strong>Mathkathaaa</strong>, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains what
            information we collect, how we use it, and the choices you have.
          </p>

          <h2 className="text-xl font-semibold">Information We Collect</h2>
          <p className="mb-2">
            We may collect information from you when you interact with our site or services, including when you enroll in classes, subscribe to updates, or contact us.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Provided by you:</strong> name, email address, phone number, educational background, and any other information you choose to provide when enrolling or
              contacting us.
            </li>
            <li>
              <strong>Usage data:</strong> non-identifying technical information (e.g., pages visited, device/browser type) gathered through server logs or analytics tools to
              improve our services.
            </li>
          </ul>

          <h2 className="text-xl font-semibold">How We Use Your Information</h2>
          <p>We use the information you provide to:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Maintain accurate enrollment and communication records.</li>
            <li>Share updates about classes, sessions, and new offerings (only if you opt in).</li>
            <li>Provide a personalized learning experience and recommend relevant resources.</li>
            <li>Improve and analyze our programs to better serve our students and community.</li>
          </ul>

          <h2 className="text-xl font-semibold">Sharing of Information</h2>
          <p>
            We do not sell, rent, or trade your personal information. Your details may be shared with trusted third parties only when necessary to deliver our services
            (for example, payment processors). When we use third parties, we take steps to ensure they protect your information in accordance with this policy and applicable
            laws.
          </p>

          <h2 className="text-xl font-semibold">Your Privacy Choices</h2>
          <p>
            You may opt out of receiving updates or marketing communications from us at any time by contacting us using the details below or by using any unsubscribe links we
            provide in our communications. Opting out will not prevent us from sending you important transactional messages related to your enrollment or account.
          </p>

          <h2 className="text-xl font-semibold">Security</h2>
          <p>
            We implement reasonable technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or
            destruction. However, no system is completely secure — if you suspect any security issue involving your account, please contact us immediately.
          </p>

          <h2 className="text-xl font-semibold">Children&apos;s Privacy</h2>
          <p>
            Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have
            collected information from a child, please contact us and we will promptly take steps to delete that information.
          </p>

          <h2 className="text-xl font-semibold">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we make material changes, we will post the updated policy on this page and update the effective date at the
            top. We encourage you to review this page periodically.
          </p>

          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p>
            If you have questions, concerns, or requests about this Privacy Policy or your personal information, please contact us:
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
