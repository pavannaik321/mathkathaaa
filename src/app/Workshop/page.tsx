import HeroSection from '@/components/HeroSection'
import Workshops from '@/components/WorkshopsSection'
import React from 'react'

export default function page() {
  return (
    <div>
          <HeroSection />
          {/* Teacher Workshops Section */}
<div className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
    Teacher Workshops
        </h2>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Workshop I */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition p-8">
        <h3 className="text-2xl font-bold text-[#0F3D3E] mb-6">
          Workshop I
        </h3>
        <ul className="space-y-3 text-gray-700">
          <li>→ How to learn Math?</li>
          <li>→ Language or subject?</li>
          <li>→ What is the most fundamental in Math?</li>
          <li>→ The power of visualization</li>
          <li>→ The necessary tease</li>
        </ul>
      </div>

      {/* Workshop II */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition p-8">
        <h3 className="text-2xl font-bold text-[#0F3D3E] mb-6">
          Workshop II
        </h3>
        <ul className="space-y-3 text-gray-700">
          <li>→ How to learn Math?</li>
          <li>→ Language or subject?</li>
          <li>→ Why Algebra?</li>
          <li>→ The right question</li>
          <li>→ The true dialogue tree</li>
        </ul>
      </div>

      {/* Workshop III */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition p-8">
        <h3 className="text-2xl font-bold text-[#0F3D3E] mb-6">
          Workshop III
        </h3>
        <ul className="space-y-3 text-gray-700">
          <li>→ How to learn Math?</li>
          <li>→ Language or subject?</li>
          <li>→ The right question</li>
          <li>→ Without Formula</li>
          <li>→ Deduction of truth</li>
        </ul>
      </div>
    </div>
  </div>
</div>

          <Workshops />
          
    </div>
  )
}
