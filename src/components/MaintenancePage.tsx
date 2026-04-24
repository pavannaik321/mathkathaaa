"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const MATH_SYMBOLS = [
  "∑",
  "π",
  "√",
  "∫",
  "∞",
  "±",
  "×",
  "÷",
  "θ",
  "Δ",
  "≈",
  "≠",
  "²",
  "³",
  "φ",
];

function FloatingSymbol({
  symbol,
  style,
}: {
  symbol: string;
  style: React.CSSProperties;
}) {
  return (
    <span
      className="absolute select-none pointer-events-none font-bold opacity-0"
      style={{
        color: "#FFD93D",
        fontSize: `${Math.random() * 1.5 + 1}rem`,
        animation: "floatUp 8s ease-in-out infinite",
        ...style,
      }}
    >
      {symbol}
    </span>
  );
}

export default function MaintenancePage() {
  const [dots, setDots] = useState(".");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const interval = setInterval(() => {
      setDots((d) => (d.length >= 3 ? "." : d + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const symbols = Array.from({ length: 20 }, (_, i) => ({
    symbol: MATH_SYMBOLS[i % MATH_SYMBOLS.length],
    style: {
      left: `${(i * 5.1) % 100}%`,
      animationDelay: `${(i * 0.7) % 8}s`,
      animationDuration: `${6 + (i % 5)}s`,
      fontSize: `${1 + (i % 3) * 0.5}rem`,
      opacity: 0,
    } as React.CSSProperties,
  }));

  return (
    <>
      <style>{`
        @keyframes floatUp {
          0%   { transform: translateY(100vh) rotate(0deg);   opacity: 0; }
          10%  { opacity: 0.15; }
          90%  { opacity: 0.1; }
          100% { transform: translateY(-10vh) rotate(20deg);  opacity: 0; }
        }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulsGlow {
          0%, 100% { box-shadow: 0 0 20px #FFD93D44, 0 0 40px #FFD93D22; }
          50%       { box-shadow: 0 0 40px #FFD93D88, 0 0 80px #FFD93D44; }
        }

        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        @keyframes spinReverse {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }

        @keyframes progressFill {
          0%   { width: 0%; }
          40%  { width: 55%; }
          70%  { width: 72%; }
          85%  { width: 80%; }
          100% { width: 85%; }
        }

        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }

        @keyframes ripple {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(2.5); opacity: 0; }
        }

        .fade-up-1 { animation: fadeSlideUp 0.7s ease forwards 0.1s; opacity: 0; }
        .fade-up-2 { animation: fadeSlideUp 0.7s ease forwards 0.3s; opacity: 0; }
        .fade-up-3 { animation: fadeSlideUp 0.7s ease forwards 0.5s; opacity: 0; }
        .fade-up-4 { animation: fadeSlideUp 0.7s ease forwards 0.7s; opacity: 0; }
        .fade-up-5 { animation: fadeSlideUp 0.7s ease forwards 0.9s; opacity: 0; }
        .fade-up-6 { animation: fadeSlideUp 0.7s ease forwards 1.1s; opacity: 0; }

        .glow-ring {
          animation: pulsGlow 2.5s ease-in-out infinite;
        }

        .gear-outer {
          animation: spinSlow 12s linear infinite;
        }

        .gear-inner {
          animation: spinReverse 8s linear infinite;
        }

        .progress-bar {
          animation: progressFill 4s cubic-bezier(0.4, 0, 0.2, 1) forwards 1.2s;
          width: 0%;
        }

        .shimmer-text {
          background: linear-gradient(90deg, #FFD93D 0%, #fff8dc 40%, #FFD93D 60%, #e6b800 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }

        .ripple-1 {
          animation: ripple 2.5s ease-out infinite;
        }
        .ripple-2 {
          animation: ripple 2.5s ease-out infinite 0.8s;
        }
        .ripple-3 {
          animation: ripple 2.5s ease-out infinite 1.6s;
        }

        .dot-blink {
          animation: blink 1.2s ease-in-out infinite;
        }
      `}</style>

      <div
        className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0a2a2b 0%, #0F3D3E 50%, #0d3536 100%)",
        }}
      >
        {/* Floating math symbols */}
        {symbols.map((s, i) => (
          <FloatingSymbol key={i} symbol={s.symbol} style={s.style} />
        ))}

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,217,61,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,217,61,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Radial glow behind center content */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,217,61,0.07) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Main card */}
        <div
          className={`relative z-10 flex flex-col items-center max-w-lg w-full transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}
        >
          {/* Logo */}
          <div className="fade-up-1 mb-10">
            <Image
              src="/Logo_high.svg"
              alt="Mathkathaaa Logo"
              width={180}
              height={90}
              className="h-14 w-auto drop-shadow-lg"
            />
          </div>

          {/* Gear icon with ripples */}
          <div className="fade-up-2 relative flex items-center justify-center mb-10">
            {/* Ripple rings */}
            {["ripple-1", "ripple-2", "ripple-3"].map((cls) => (
              <span
                key={cls}
                className={`${cls} absolute rounded-full border border-yellow-400`}
                style={{ width: "96px", height: "96px" }}
              />
            ))}

            {/* Glow ring */}
            <div
              className="glow-ring flex items-center justify-center w-24 h-24 rounded-full"
              style={{
                backgroundColor: "#FFD93D18",
                border: "2px solid #FFD93D",
              }}
            >
              {/* Outer gear */}
              <svg
                className="gear-outer absolute w-16 h-16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFD93D"
                strokeWidth="1"
              >
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
              </svg>

              {/* Inner wrench */}
              <svg
                className="gear-inner w-7 h-7 relative z-10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFD93D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /> */}
              </svg>
            </div>
          </div>

          {/* Heading */}
          <div className="fade-up-3 text-center mb-3">
            <h1 className="text-5xl sm:text-6xl font-extrabold shimmer-text leading-tight">
              We&apos;ll Be Back
            </h1>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight">
              Soon
              <span className="dot-blink" style={{ color: "#FFD93D" }}>
                !
              </span>
            </h1>
          </div>

          {/* Yellow divider */}
          <div className="fade-up-3 flex items-center gap-3 my-6">
            <div
              className="h-px w-16 rounded"
              style={{ backgroundColor: "#FFD93D55" }}
            />
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "#FFD93D" }}
            />
            <div
              className="h-px w-16 rounded"
              style={{ backgroundColor: "#FFD93D55" }}
            />
          </div>

          {/* Description */}
          <p className="fade-up-4 text-lg sm:text-xl text-center text-gray-300 max-w-md leading-relaxed mb-3">
            Our website is currently undergoing scheduled maintenance to bring
            you a better experience.
          </p>
          <p className="fade-up-4 text-sm text-center text-gray-500 max-w-sm mb-8">
            We apologize for the inconvenience. Please check back shortly — we
            won&apos;t be long{dots}
          </p>

          {/* Progress bar */}
          <div className="fade-up-5 w-full max-w-sm mb-10">
            <div className="flex justify-between text-xs text-gray-500 mb-2">
              <span>Progress</span>
              <span style={{ color: "#FFD93D" }}>Almost there</span>
            </div>
            <div
              className="w-full h-2 rounded-full overflow-hidden"
              style={{ backgroundColor: "#ffffff15" }}
            >
              <div
                className="progress-bar h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #FFD93D, #e6b800)",
                  boxShadow: "0 0 10px #FFD93D88",
                }}
              />
            </div>
          </div>

          {/* Contact card */}
          <div
            className="fade-up-6 w-full max-w-sm flex flex-col sm:flex-row items-center justify-center gap-2 px-6 py-4 rounded-2xl text-sm"
            style={{
              backgroundColor: "#ffffff08",
              border: "1px solid #FFD93D33",
              backdropFilter: "blur(8px)",
            }}
          >
            <span className="text-gray-400">Need help?</span>
            <a
              href="mailto:hello@mathkathaaa.com"
              className="font-semibold transition-opacity hover:opacity-80"
              style={{ color: "#FFD93D" }}
            >
              hello@mathkathaaa.com
            </a>
          </div>

          {/* Footer */}
          <p className="fade-up-6 mt-10 text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Mathkathaaa. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
