'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const tiers = [
  { 
    name: 'Starter', 
    price: '$29/hr', 
    description: 'Perfect for elementary and middle school students needing foundational support.',
    features: ['K-8 subject support', 'Flexible scheduling', 'Progress notes after each session', 'Homework help', 'Basic study skills coaching'],
    recommended: false,
    buttonText: 'Get Started'
  },
  { 
    name: 'Standard', 
    price: '$39/hr', 
    description: 'Ideal for high school students looking to excel in their courses.',
    features: ['All Starter features', 'High school courses', 'Light test prep', 'Study plan creation', 'Monthly progress reports'],
    recommended: true,
    buttonText: 'Most Popular'
  },
  { 
    name: 'Premium', 
    price: '$55/hr', 
    description: 'Advanced support for college-bound students and university coursework.',
    features: ['All Standard features', 'AP/University support', 'Priority scheduling', 'Specialized subject experts', 'College application guidance'],
    recommended: false,
    buttonText: 'Get Started'
  },
];

const Pricing: React.FC = () => {
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);

  useEffect(() => {
    const heroImg = new Image();
    heroImg.src = '/images/HomeHero.jpg';
    heroImg.onload = () => setHeroImageLoaded(true);
  }, []);

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[600px] pt-28 pb-16 px-6 sm:px-10 lg:px-16 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 h-[600px]">
          {/* Loading Skeleton */}
          {!heroImageLoaded && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 h-full"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                backgroundSize: '200% 100%',
              }}
            />
          )}
          {/* Actual Image */}
          <motion.div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat h-full"
            style={{
              backgroundImage: 'url(/images/HomeHero.jpg)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: heroImageLoaded ? 1 : 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
          </motion.div>
          <div className="absolute inset-0 bg-blue-900/70 h-full"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto text-center h-full flex flex-col justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl font-bold mb-6"
          >
            Transparent Pricing
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Simple hourly options to fit your learning journey. No hidden fees or long-term commitments.
          </motion.p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 px-6 sm:px-10 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10">
            {tiers.map((tier, index) => (
              <motion.div 
                key={tier.name} 
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, type: "spring", bounce: 0.3 }}
                whileHover={{ y: -12, rotateY: 5, scale: 1.02, transition: { duration: 0.3 } }}
                className={`rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 ${
                  tier.recommended ? 'border-2 border-blue-600 relative' : 'border border-gray-200'
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {tier.recommended && (
                  <motion.div 
                    className="bg-blue-600 text-white text-center py-2 text-sm font-bold"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    MOST POPULAR
                  </motion.div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">{tier.name}</h3>
                  <motion.div 
                    className="text-5xl font-bold text-blue-600 mb-5"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  >
                    {tier.price}
                  </motion.div>
                  <p className="text-gray-600 mb-8 text-lg">{tier.description}</p>
                  
                  <ul className="space-y-4 mb-10">
                    {tier.features.map((feature, i) => (
                      <motion.li 
                        key={feature} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 + i * 0.05 }}
                      >
                        <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-700 text-lg">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 px-6 rounded-lg font-bold text-lg shadow-md ${
                      tier.recommended 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-gray-100 text-blue-600 hover:bg-gray-200 border border-blue-200'
                    } transition-all duration-300`}
                  >
                    {tier.buttonText}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 sm:px-10 lg:px-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {[
              {
                question: 'Are there any additional fees?',
                answer: 'No, our pricing is completely transparent. You only pay the hourly rate for the sessions you book, with no hidden fees or commitments.'
              },
              {
                question: 'Can I change my plan later?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time based on your needs. There are no penalties for changing plans.'
              },
              {
                question: 'Do you offer any discounts?',
                answer: 'We offer package discounts when you purchase multiple sessions in advance. We also have special rates for siblings and group sessions.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, PayPal, and bank transfers. Payment is processed securely through our platform.'
              },
              {
                question: 'What is your cancellation policy?',
                answer: 'We understand that schedules can change. You can cancel or reschedule a session up to 24 hours in advance at no charge.'
              }
            ].map((faq, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 sm:px-10 lg:px-16 bg-blue-50">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Ready to Start Your Learning Journey?</h2>
          <p className="text-gray-700 mb-8">Choose the plan that works best for you and begin your path to academic success today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md">
                Get Started
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-md border border-blue-200">
                Contact Us
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Pricing;


