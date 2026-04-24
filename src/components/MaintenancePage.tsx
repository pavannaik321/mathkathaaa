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

        @keyframes illustFloat {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50%       { transform: translateY(-18px) rotate(1deg); }
        }

        .illus-float {
          animation: illustFloat 5s ease-in-out infinite;
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

        {/* Wrapper — single col mobile, two col desktop */}
        <div
          className={`relative z-10 w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center gap-12 px-4 py-12 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}
        >
          {/* ── LEFT: Illustration ── */}
          <div className="fade-up-2 relative flex items-center justify-center w-full lg:w-1/2">
            {/* Ripple rings behind illustration */}
            {["ripple-1", "ripple-2", "ripple-3"].map((cls) => (
              <span
                key={cls}
                className={`${cls} absolute rounded-full border border-yellow-400/30`}
                style={{ width: "320px", height: "320px" }}
              />
            ))}

            {/* Glow blob */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: "340px",
                height: "340px",
                background: "radial-gradient(circle, rgba(255,217,61,0.12) 0%, transparent 70%)",
              }}
            />

            {/* The SVG illustration */}
            <div className="illus-float relative z-10">
              <Image
                src="/Phone maintenance-pana.svg"
                alt="Under Maintenance Illustration"
                width={420}
                height={420}
                className="w-72 sm:w-96 lg:w-[420px] h-auto drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* ── RIGHT: Content ── */}
          <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2">
            {/* Logo */}
            <div className="fade-up-1 mb-8">
              <Image
                src="/Logo_high.svg"
                alt="Mathkathaaa Logo"
                width={180}
                height={90}
                className="h-12 w-auto drop-shadow-lg"
              />
            </div>

            {/* Badge */}
            <div
              className="fade-up-2 flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{ backgroundColor: "#FFD93D22", border: "1px solid #FFD93D55", color: "#FFD93D" }}
            >
              <span className="dot-blink inline-block w-2 h-2 rounded-full bg-yellow-400" />
              Scheduled Maintenance
            </div>

            {/* Heading */}
            <div className="fade-up-3 mb-3 text-center lg:text-left">
              <h1 className="text-5xl sm:text-6xl font-extrabold shimmer-text leading-tight">
                We&apos;ll Be Back
              </h1>
              <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight">
                Very Soon
                <span className="dot-blink" style={{ color: "#FFD93D" }}>!</span>
              </h1>
            </div>

            {/* Yellow divider */}
            <div className="fade-up-3 flex items-center gap-3 my-5">
              <div className="h-px w-16 rounded" style={{ backgroundColor: "#FFD93D55" }} />
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#FFD93D" }} />
              <div className="h-px w-16 rounded" style={{ backgroundColor: "#FFD93D55" }} />
            </div>

            {/* Description */}
            <p className="fade-up-4 text-lg text-center lg:text-left text-gray-300 max-w-md leading-relaxed mb-2">
              Our website is currently undergoing scheduled maintenance to bring you a better experience.
            </p>
            <p className="fade-up-4 text-sm text-center lg:text-left text-gray-500 max-w-sm mb-8">
              We apologize for the inconvenience. Please check back shortly — we won&apos;t be long{dots}
            </p>

            {/* Progress bar */}
            <div className="fade-up-5 w-full max-w-sm mb-8">
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
              className="fade-up-6 flex flex-col sm:flex-row items-center gap-2 px-6 py-4 rounded-2xl text-sm"
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
            <p className="fade-up-6 mt-8 text-xs text-gray-600">
              &copy; {new Date().getFullYear()} Mathkathaaa. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
