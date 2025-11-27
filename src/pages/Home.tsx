import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Subjects from '../components/Subjects';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';

interface Props { onContact: () => void }

const Home: React.FC<Props> = ({ onContact }) => {
  return (
    <main className="bg-white">
      {/* Hero Section with prominent CTA */}
      <section className="bg-blue-900 text-white">
        <Hero />
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Why Choose Tutor?</h2>
          <Features />
        </div>
      </section>

      {/* Popular Subjects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-blue-900">Our Popular Subjects</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore our most sought-after subjects taught by expert tutors who are passionate about helping students succeed.
          </p>
          <Subjects />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">How Tutor Works</h2>
          <HowItWorks />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-blue-900">What Our Students Say</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Hear from our students who have achieved academic success with Tutor.
          </p>
          <Testimonials />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <FinalCTA onContact={onContact} />
        </div>
      </section>
    </main>
  );
};

export default Home;


