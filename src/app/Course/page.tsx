import HeroSection from '@/components/HeroSection'
import KeystoneCuriosity from '@/components/KeystoneCuriosity'
import KindlingConcepts from '@/components/KindlingConcepts'
import KneadingHistory from '@/components/KneadingHistory'
import Workshops from '@/components/WorkshopsSection'
import React from 'react'

export default function page() {
  return (
    <div>
      <HeroSection />
      <KeystoneCuriosity />
      <KindlingConcepts />
      <KneadingHistory />
      <Workshops />
    </div>
  )
}
