import AboutFounder from '@/components/AboutFounder'
import FoundingPrinciple from '@/components/FoundingPrinciple'
import HeroSection from '@/components/HeroSection'
import HowItWorks from '@/components/HowItWorks'
import MissionVisionValues from '@/components/MissionVisionValues'
import TeachersSection from '@/components/TeachersSection'
import React from 'react'

export default function page() {
  return (
<>
<HeroSection />
<MissionVisionValues />
<AboutFounder />
<FoundingPrinciple />
{/* <TeachersSection /> */}
<HowItWorks />
</>
  )
}
