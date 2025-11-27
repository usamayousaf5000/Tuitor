
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBook, FaChalkboardTeacher, FaCheckCircle } from 'react-icons/fa';
import TestElevenPlus from './TestElevenPlus';
import TestNaplan from './TestNaplan';

const countries = [
  {
    name: 'United Kingdom',
    flag: '/images/UK.jpeg',
    link: '/test/11-plus',
    curricula: ['National Curriculum', 'GCSE', 'A-Levels'],
    details: [
      { title: 'National Curriculum', description: 'Comprehensive support for Key Stages 1-4, ensuring a strong foundation in core subjects.' },
      { title: 'GCSE', description: 'Targeted preparation for GCSE exams across all major boards (AQA, Edexcel, OCR).' },
      { title: 'A-Levels', description: 'Advanced subject tutoring to help students achieve top grades for university admissions.' }
    ]
  },
  {
    name: 'Canada',
    flag: '/images/CA.jpeg',
    curricula: ['Provincial Curricula', 'IB Programs'],
    details: [
      { title: 'Provincial Curricula', description: 'Tailored tutoring for Ontario, BC, Alberta, and other provincial education systems.' },
      { title: 'IB Programs', description: 'Specialized support for the International Baccalaureate Diploma Programme and Middle Years Programme.' }
    ]
  },
  {
    name: 'Australia',
    flag: '/images/AUS.jpeg',
    link: '/test/naplan',
    curricula: ['Australian Curriculum', 'NAPLAN', 'HSC'],
    details: [
      { title: 'Australian Curriculum', description: 'Support for Foundation to Year 10, covering all learning areas and general capabilities.' },
      { title: 'NAPLAN', description: 'Preparation for numeracy and literacy assessments to build confidence and skills.' },
      { title: 'HSC', description: 'Focused tutoring for the Higher School Certificate to achieve top ATAR results.' }
    ]
  },
  {
    name: 'United States',
    flag: '/images/US.jpeg',
    curricula: ['Common Core', 'AP Courses', 'SAT/ACT Prep'],
    details: [
      { title: 'Common Core', description: 'Aligned with state standards to ensure students master grade-level skills in Math and English.' },
      { title: 'AP Courses', description: 'College-level course support to help students excel in Advanced Placement exams.' },
      { title: 'SAT/ACT Prep', description: 'Strategic test preparation to boost scores for college applications.' }
    ]
  },
  {
    name: 'New Zealand',
    flag: '/images/NZ.jpeg',
    curricula: ['NCEA', 'Cambridge International'],
    details: [
      { title: 'NCEA', description: 'Guidance for Levels 1, 2, and 3 of the National Certificate of Educational Achievement.' },
      { title: 'Cambridge International', description: 'Expert support for Cambridge IGCSE and A-Level pathways within NZ schools.' }
    ]
  },
  {
    name: 'Ireland',
    flag: '/images/IR.jpeg',
    curricula: ['Junior Certificate', 'Leaving Certificate'],
    details: [
      { title: 'Junior Certificate', description: 'Support for the Junior Cycle, focusing on classroom-based assessments and final exams.' },
      { title: 'Leaving Certificate', description: 'Intensive preparation for the Leaving Cert to maximize CAO points for college entry.' }
    ]
  },
];

const Curriculum: React.FC = () => {
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<typeof countries[0] | null>(null);

  useEffect(() => {
    const heroImg = new Image();
    heroImg.src = '/images/curriculum.jpg';
    heroImg.onload = () => setHeroImageLoaded(true);
  }, []);

  // Scroll to top when country is selected
  useEffect(() => {
    if (selectedCountry) {
      // Small delay to ensure content is rendered
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  }, [selectedCountry]);

  // If a country is selected, show its specific component or the generic detail view
  if (selectedCountry) {
    return (
      <div className="bg-white min-h-screen">
        {/* Navigation Bar Placeholder / Back Button */}
        <div className="bg-white border-b border-gray-100 sticky top-0 z-50 px-6 py-4 shadow-sm">
          <div className="max-w-6xl mx-auto">
            <button
              onClick={() => setSelectedCountry(null)}
              className="flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to All Curricula
            </button>
          </div>
        </div>

        {/* Coming Soon View */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center py-24 px-4 min-h-[50vh]"
        >
          <div className="w-32 h-32 mb-8 relative rounded-full overflow-hidden shadow-xl border-4 border-blue-50">
            <img
              src={selectedCountry.flag}
              alt={selectedCountry.name}
              className="w-full h-full object-cover opacity-90"
            />
          </div>
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Coming Soon</h2>
          <p className="text-xl text-gray-600 max-w-lg text-center mb-10 leading-relaxed">
            We're currently developing our specialized curriculum for <span className="font-semibold text-blue-700">{selectedCountry.name}</span>.
            <br />Stay tuned for updates!
          </p>
          <Link href="/contact" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Contact Us for Inquiries
          </Link>
        </motion.div>
      </div>
    );
  }

  // Default View: Hero + Grid
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
              backgroundImage: 'url(/images/curriculum.jpg)',
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
            Global Curriculum Coverage
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Expert tutoring across international educational standards and exam preparation.
          </motion.p>
          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/pricing" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg transition-all duration-300">
                Book Your Free Trial Lesson
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 px-6 sm:px-10 lg:px-16 bg-white min-h-[600px]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Select Your Region</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose a country to explore specific curriculum and test preparation options.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {countries.map((country, index) => {
              const CardContent = (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group h-full"
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
                    {country.link && (
                      <span className="inline-block mt-2 text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        Specialized Prep Available
                      </span>
                    )}
                  </div>
                </motion.div>
              );

              if (country.link) {
                return (
                  <Link key={country.name} href={country.link} className="block h-full">
                    {CardContent}
                  </Link>
                );
              }

              return (
                <div key={country.name} onClick={() => setSelectedCountry(country)} className="h-full">
                  {CardContent}
                </div>
              );
            })}
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/pricing" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg transition-all duration-300">
                Find Your Perfect Tutor
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA band */}
      <section className="mt-12 py-10 bg-slate-900/50 border-t border-white/10">
        <div className="px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto text-center">
          <h3 className="text-slate-200 font-semibold">LET’S LEARN TOGETHER!</h3>
          <p className="mt-2 text-slate-300 text-sm">Contact us to get details about our admissions, lesson plans, prices, and timings.</p>
          <div className="mt-5 flex justify-center gap-3">
            <Link href="/pricing" className="rounded-md bg-black text-white px-4 py-2 text-sm">View Pricing</Link>
            <Link href="/contact" className="rounded-md bg-[#0e2a57] text-white px-4 py-2 text-sm">Contact Admissions</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Curriculum;


