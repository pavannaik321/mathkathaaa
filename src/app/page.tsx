// src/app/page.tsx (or Home.tsx depending on structure)

import FreeMathClassForm from "@/components/ApplicationForm";
import CurvyHeader from "@/components/CurvyHeader";
import ExamsSection from "@/components/ExamsSection";
import FAQSection from "@/components/Faq";
import HeroSection from "@/components/HeroSection";
import HomeAboutSection from "@/components/HomeAbout";
import HowItWorks from "@/components/HowItWorks";
import CourseOverview from "@/components/OurCourseOverview";
import OurInspiration from "@/components/OurInspiration";
import WorldMap from "@/components/WorldMap";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <HeroSection />
      <OurInspiration />
      <CourseOverview />
      {/* <WorldMap /> */}
      <FreeMathClassForm />
      <ExamsSection />
      <HomeAboutSection />
      <HowItWorks />
      <FAQSection />
    </>
  );
}
