'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBook, FaChalkboardTeacher, FaCheckCircle } from 'react-icons/fa';

const countries = [
  { flag: '🇬🇧', name: 'United Kingdom', curricula: ['National Curriculum', 'GCSE', 'A-Levels'] },
  { flag: '🇮🇪', name: 'Ireland', curricula: ['Junior Certificate', 'Leaving Certificate'] },
  { flag: '🇺🇸', name: 'United States', curricula: ['Common Core', 'AP Courses', 'SAT/ACT Prep'] },
  { flag: '🇨🇦', name: 'Canada', curricula: ['Provincial Curricula', 'IB Programs'] },
  { flag: '🇦🇺', name: 'Australia', curricula: ['Australian Curriculum', 'NAPLAN', 'HSC'] },
  { flag: '🇳🇿', name: 'New Zealand', curricula: ['NCEA', 'Cambridge International'] },
];

const Curriculum: React.FC = () => {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-6 sm:px-10 lg:px-16 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
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

      {/* Curriculum Overview */}
      <section className="py-16 px-6 sm:px-10 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Comprehensive Curriculum Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expert tutors are well-versed in educational standards across multiple countries and systems.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <FaGraduationCap className="text-white text-2xl" />,
                title: 'K-12 Education',
                description: 'Comprehensive support for elementary, middle, and high school students across all major subjects and curricula.',
                items: ['Core subjects alignment', 'Homework assistance', 'Test preparation']
              },
              {
                icon: <FaBook className="text-white text-2xl" />,
                title: 'Standardized Tests',
                description: 'Expert preparation for all major standardized tests including SAT, ACT, AP exams, GCSE, A-Levels, and more.',
                items: ['Test-taking strategies', 'Practice exams', 'Score improvement']
              },
              {
                icon: <FaChalkboardTeacher className="text-white text-2xl" />,
                title: 'University Courses',
                description: 'Support for undergraduate and graduate-level courses across a wide range of disciplines and specializations.',
                items: ['Advanced topics', 'Research assistance', 'Exam preparation']
              }
            ].map((item, index) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, type: "spring", bounce: 0.3 }}
                whileHover={{ y: -12, rotateY: 5, scale: 1.02, transition: { duration: 0.3 } }}
                className="bg-blue-50 p-8 rounded-xl shadow-lg"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div 
                  className="bg-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 mb-6">{item.description}</p>
                <ul className="space-y-2">
                  {item.items.map((listItem, i) => (
                    <motion.li 
                      key={listItem}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + i * 0.05 }}
                    >
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <span>{listItem}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Countries grid */}
      <section className="py-16 px-6 sm:px-10 lg:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Global Curriculum Coverage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our tutors are experts in educational systems from around the world.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <motion.div 
                key={country.name} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring", bounce: 0.3 }}
                whileHover={{ y: -12, scale: 1.02, transition: { duration: 0.3 } }}
                className="bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <motion.span 
                    className="text-5xl mr-4"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    {country.flag}
                  </motion.span>
                  <h3 className="text-2xl font-bold text-blue-900">{country.name}</h3>
                </div>
                <ul className="space-y-3">
                  {country.curricula.map((curriculum, i) => (
                    <motion.li 
                      key={curriculum} 
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + i * 0.05 }}
                    >
                      <FaCheckCircle className="text-green-500 mr-3" />
                      <span className="text-gray-700">{curriculum}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
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


