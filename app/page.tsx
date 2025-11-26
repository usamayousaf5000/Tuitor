'use client';

import { useState } from 'react';
import Hero from '../src/components/Hero';
import Features from '../src/components/Features';
import TutoringFeatures from '../src/components/TutoringFeatures';
import HowItWorks from '../src/components/HowItWorks';
import MissionVision from '../src/components/MissionVision';
import FinalCTA from '../src/components/FinalCTA';
import ContactModal from '../src/components/ContactModal';

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  const handleCloseContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <main className="bg-white">
      {/* Hero Section with prominent CTA */}
      <section>
        <Hero />
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Why Choose Tuitor?</h2>
          <Features />
        </div>
      </section>
      
      {/* Tutoring without the hassle Section */}
      <section>
        <TutoringFeatures />
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works" className="relative py-16 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/HIW.jpg)',
          }}
        >
        </div>
        
        {/* Content on top of image */}
        <div className="relative z-10">
          <HowItWorks />
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section>
        <MissionVision />
      </section>
      
      {/* Final CTA Section */}
      <section className="relative py-16 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/Booking.jpg)',
          }}
        >
        </div>
        
        {/* Content on top of image */}
        <div className="relative z-10 container mx-auto px-4">
          <FinalCTA onContact={handleContactClick} />
        </div>
      </section>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={handleCloseContactModal} 
      />
    </main>
  );
}

