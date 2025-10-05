import FAQSection from '@/components/Faq'
import HeroSection from '@/components/HeroSection'
import Testimonials from '@/components/Testimonials'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import TestimonialsCTA from '@/components/TestimonialsCTA'
// import TestimonialsStats from '@/components/TestimonialsStats'
// import VideoTestimonials from '@/components/VideoTestimonials'
import React from 'react'

export default function page() {
  return (
    <div>
        <HeroSection />
      <Testimonials />
      <TestimonialsCarousel />
      {/* <TestimonialsStats/> */}
      {/* <VideoTestimonials/> */}
      <TestimonialsCTA/>
      <FAQSection />
    </div>
  )
}
