import Image from "next/image";

export default function MaintenancePage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 text-white"
      style={{ backgroundColor: "#0F3D3E" }}
    >
      {/* Logo */}
      <div className="mb-10">
        <Image
          src="/Logo_high.svg"
          alt="Mathkathaaa Logo"
          width={160}
          height={80}
          className="h-12 w-auto"
        />
      </div>

      {/* Icon */}
      <div
        className="mb-8 flex items-center justify-center w-24 h-24 rounded-full"
        style={{ backgroundColor: "#FFD93D22", border: "2px solid #FFD93D" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#FFD93D"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
          />
        </svg>
      </div>

      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-4">
        We&apos;ll Be Back Soon!
      </h1>

      {/* Divider */}
      <div
        className="w-20 h-1 rounded-full mb-6"
        style={{ backgroundColor: "#FFD93D" }}
      />

      {/* Message */}
      <p className="text-lg sm:text-xl text-center text-gray-200 max-w-xl leading-relaxed mb-4">
        Our website is currently undergoing scheduled maintenance to bring you
        a better experience.
      </p>
      <p className="text-base text-center text-gray-400 max-w-lg mb-10">
        We apologize for the inconvenience. Please check back shortly — we
        won&apos;t be long!
      </p>

      {/* Contact */}
      <div
        className="flex flex-col sm:flex-row items-center gap-3 px-6 py-4 rounded-2xl text-sm text-gray-300"
        style={{ backgroundColor: "#ffffff10", border: "1px solid #ffffff20" }}
      >
        <span>Need help? Reach us at</span>
        <a
          href="mailto:hello@mathkathaaa.com"
          className="font-semibold hover:underline"
          style={{ color: "#FFD93D" }}
        >
          hello@mathkathaaa.com
        </a>
      </div>

      {/* Footer note */}
      <p className="mt-12 text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Mathkathaaa. All rights reserved.
      </p>
    </div>
  );
}
