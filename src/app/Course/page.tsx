import HeroSection from '@/components/HeroSection'
import KeystoneCuriosity from '@/components/KeystoneCuriosity'
import KindlingConcepts from '@/components/KindlingConcepts'
import KneadingHistory from '@/components/KneadingHistory'
import Session from '@/components/Session'
import TracksSection from '@/components/TracksSection'
import Workshops from '@/components/WorkshopsSection'
import React from 'react'

export default function page() {
  return (
    <div>
      <HeroSection />
              {/* Heading */}
              <div className="text-center mb-12 mt-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            We Offer. <span className="text-[#FECE11]">You Choose.</span> We Customize.
          </h2>
          <p className="text-black mt-4 max-w-2xl mx-auto">
            Flexible pathways tailored to your child’s learning needs — whether syllabus-focused, 
            competitive exam prep, or curiosity-driven exploration through 3Ks.
          </p>
        </div>
      <KeystoneCuriosity />
      <KindlingConcepts />
      <KneadingHistory />
      <TracksSection />
      <Session />
      {/* <Workshops /> */}
    </div>
  )
}
