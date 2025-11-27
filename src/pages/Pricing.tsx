'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';



const countries = [
  { name: 'United Kingdom', code: 'UK', flag: '/images/UK.jpeg', currency: '£' },
  { name: 'Canada', code: 'CA', flag: '/images/CA.jpeg', currency: '$' },
  { name: 'Australia', code: 'AUS', flag: '/images/AUS.jpeg', currency: '$' },
  { name: 'United States', code: 'US', flag: '/images/US.jpeg', currency: '$' },
  { name: 'New Zealand', code: 'NZ', flag: '/images/NZ.jpeg', currency: '$' },
  { name: 'Ireland', code: 'IR', flag: '/images/IR.jpeg', currency: '€' },
];

const Pricing: React.FC = () => {
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<typeof countries[0] | null>(null);

  useEffect(() => {
    const heroImg = new Image();
    heroImg.src = '/images/HomeHero.jpg';
    heroImg.onload = () => setHeroImageLoaded(true);
  }, []);

  // Scroll to pricing cards when country is selected
  useEffect(() => {
    if (selectedCountry) {
      // Small delay to ensure content is rendered
      setTimeout(() => {
        const pricingSection = document.getElementById('pricing-cards');
        if (pricingSection) {
          pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [selectedCountry]);

  const getTiers = (currency: string, countryCode: string) => {
    // Base prices in GBP
    const standardGBP = 12;
    const premiumGBP = 17;

    // Exchange rates (approximate)
    const rates: { [key: string]: number } = {
      '£': 1,      // GBP
      '$': 1.27,   // USD/CAD/AUD/NZD (simplified)
      '€': 1.17    // EUR
    };

    const rate = rates[currency] || 1;
    const standardPrice = Math.round(standardGBP * rate);
    const premiumPrice = Math.round(premiumGBP * rate);

    // Determine grade terminology based on country
    const gradeSystem = (countryCode === 'US' || countryCode === 'CA') ? 'Grade 1 to Grade 11' : 'Year 1 to Year 11';

    return [
      {
        name: 'Standard',
        price: `${currency}${standardPrice}/hr`,
        description: `Perfect for ${gradeSystem} students looking to excel in their courses.`,
        features: [],
        recommended: true,
        buttonText: 'Get Started',
        link: '/contact'
      },
      {
        name: 'Premium',
        price: `${currency}${premiumPrice}/hr`,
        description: `Advanced support for ${gradeSystem} students with specialized subject expertise.`,
        features: [],
        recommended: false,
        buttonText: 'Get Started',
        link: '/contact'
      },
      {
        name: 'Custom',
        price: 'Contact Us',
        description: 'Tailored solutions for unique learning requirements and goals.',
        features: [],
        recommended: false,
        buttonText: 'Contact Us',
        link: '/contact'
      },
    ];
  };

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
            Expert tutoring for Year 1 to Year 11 students. Simple hourly options with no hidden fees or long-term commitments.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6 sm:px-10 lg:px-16 bg-white min-h-[600px]">
        <div className="max-w-6xl mx-auto">

          {!selectedCountry ? (
            // Country Selection View
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Select Your Region</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {countries.map((country, index) => (
                  <motion.div
                    key={country.code}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    onClick={() => setSelectedCountry(country)}
                    className="cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="h-48 overflow-hidden relative">
                      <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                      <img
                        src={country.flag}
                        alt={`${country.name} flag`}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold text-blue-900 group-hover:text-blue-600 transition-colors">
                        {country.name}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            // Pricing Tiers View
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <button
                onClick={() => setSelectedCountry(null)}
                className="flex items-center text-blue-600 hover:text-blue-800 mb-8 font-semibold transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Regions
              </button>

              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-4">Pricing for {selectedCountry.name}</h2>
                <p className="text-gray-600">Choose the plan that best fits your needs</p>
              </div>

              <div id="pricing-cards" className="grid md:grid-cols-3 gap-10">
                {getTiers(selectedCountry.currency, selectedCountry.code).map((tier, index) => (
                  <motion.div
                    key={tier.name}
                    initial={{ opacity: 0, y: 50, rotateX: -15 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15, type: "spring", bounce: 0.3 }}
                    whileHover={{ y: -12, rotateY: 5, scale: 1.02, transition: { duration: 0.3 } }}
                    className={`rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 flex flex-col ${tier.recommended ? 'border-2 border-blue-600 relative' : 'border border-gray-200'
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
                    <div className="p-8 flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold text-blue-900 mb-3">{tier.name}</h3>
                      <motion.div
                        className="text-4xl font-bold text-blue-600 mb-5"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      >
                        {tier.price}
                      </motion.div>
                      <p className="text-gray-600 mb-8 text-lg">{tier.description}</p>

                      <ul className="space-y-4 mb-10 flex-1">
                        {tier.features.map((feature, i) => (
                          <motion.li
                            key={feature}
                            className="flex items-start"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 + i * 0.05 }}
                          >
                            <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span className="text-gray-700 text-lg">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-auto"
                      >
                        <Link
                          href={tier.link}
                          className={`block w-full py-4 px-6 rounded-lg font-bold text-lg text-center shadow-md ${tier.recommended
                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                            : 'bg-gray-100 text-blue-600 hover:bg-gray-200 border border-blue-200'
                            } transition-all duration-300`}
                        >
                          {tier.buttonText}
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
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


