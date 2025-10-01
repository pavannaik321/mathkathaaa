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
import PricingSection from "@/components/PricingSection";
import WorldMap from "@/components/WorldMap";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <HeroSection />
      <HomeAboutSection />
      <CourseOverview />
      {/* <WorldMap /> */}
      <FreeMathClassForm />
      <ExamsSection />
      <OurInspiration />
      <HowItWorks />
      <PricingSection />
      <FAQSection />
    </>
  );
}
