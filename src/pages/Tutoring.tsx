'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaUserGraduate, FaUsers, FaChalkboardTeacher, FaLaptop, FaRegCalendarAlt, FaChartLine } from 'react-icons/fa';

const tutoringOptions = [
  {
    title: 'One-on-One Tutoring',
    icon: <FaUserGraduate className="text-white text-2xl" />,
    description: 'Personalized attention and customized learning plans tailored to individual needs and learning styles.',
    benefits: [
      'Focused attention on specific needs',
      'Flexible pacing based on comprehension',
      'Customized learning strategies',
      'Direct feedback and guidance'
    ]
  },
  {
    title: 'Small Group Sessions',
    icon: <FaUsers className="text-white text-2xl" />,
    description: 'Collaborative learning environment for 2-4 students working on similar subjects or preparing for the same exams.',
    benefits: [
      'Peer learning opportunities',
      'Cost-effective option',
      'Collaborative problem solving',
      'Shared resources and insights'
    ]
  },
  {
    title: 'Test Preparation',
    icon: <FaChalkboardTeacher className="text-white text-2xl" />,
    description: 'Focused preparation for standardized tests, entrance exams, and subject-specific assessments.',
    benefits: [
      'Test-taking strategies',
      'Practice with real exam questions',
      'Time management techniques',
      'Stress reduction methods'
    ]
  }
];

const features = [
  {
    title: 'Expert Tutors',
    icon: <FaUserGraduate />,
    description: 'All our tutors have advanced degrees and years of teaching experience in their specialized subjects.'
  },
  {
    title: 'Online Convenience',
    icon: <FaLaptop />,
    description: 'Connect with your tutor from anywhere using our interactive virtual classroom platform.'
  },
  {
    title: 'Flexible Scheduling',
    icon: <FaRegCalendarAlt />,
    description: 'Book sessions at times that work for you, including evenings and weekends.'
  },
  {
    title: 'Progress Tracking',
    icon: <FaChartLine />,
    description: 'Regular assessments and detailed progress reports to measure improvement.'
  }
];

const Tutoring: React.FC = () => {
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
            Personalized Tutoring Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Expert instruction tailored to your learning style, goals, and schedule.
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

      {/* Tutoring Options */}
      <section className="py-16 px-6 sm:px-10 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Tutoring Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the learning format that works best for your educational needs and goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {tutoringOptions.map((option, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, type: "spring", bounce: 0.3 }}
                whileHover={{ y: -12, rotateY: 5, scale: 1.02, transition: { duration: 0.3 } }}
                className="bg-blue-50 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="bg-blue-600 p-6">
                  <div className="flex items-center">
                    <motion.div 
                      className="bg-blue-700 p-3 rounded-full mr-4"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {option.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-white">{option.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-6">{option.description}</p>
                  <h4 className="font-bold text-blue-900 mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {option.benefits.map((benefit, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 + i * 0.05 }}
                      >
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 sm:px-10 lg:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Why Choose Our Tutoring</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide a comprehensive approach to education that delivers results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring", bounce: 0.3 }}
                whileHover={{ y: -12, scale: 1.02, transition: { duration: 0.3 } }}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                <motion.div 
                  className="bg-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="text-white text-2xl">
                    {feature.icon}
                  </div>
                </motion.div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
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
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg transition-all duration-300">
                Contact Us to Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Tutoring;


