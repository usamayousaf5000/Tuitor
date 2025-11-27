'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const TestElevenPlus: React.FC = () => {
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);

  useEffect(() => {
    const heroImg = new Image();
    heroImg.src = '/images/11+.jpg';
    heroImg.onload = () => setHeroImageLoaded(true);
  }, []);

  return (
    <main className="bg-white">
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
              backgroundImage: 'url(/images/11+.jpg)',
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
            11+ Test Preparation (UK)
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
          >
            Specialized 11+ tutoring covering verbal reasoning, non-verbal reasoning, English, and maths for grammar school entrance.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/pricing" className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors text-lg shadow-md">
              Book Free Lesson
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="pb-16 px-6 sm:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto">

          {/* What is 11+ Section */}
          <section className="max-w-6xl mx-auto mb-12 mt-12">
            <motion.div
              className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">What is the 11+ Exam?</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                The 11+ exam is a standardized entrance examination used by selective grammar schools and independent schools in England and Northern Ireland.
                Taken by students in Year 6 (typically age 10-11), this competitive exam determines admission to academically selective secondary schools.
                The term "11+" refers to the age group for secondary school entry.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white rounded-lg p-6 border border-blue-200">
                  <h3 className="font-bold text-blue-900 mb-3">Exam Timing</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Exams held in <strong>September</strong> of Year 6</li>
                    <li>• Results released in <strong>October</strong></li>
                    <li>• Application deadlines vary by region</li>
                    <li>• School allocations announced in March</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6 border border-blue-200">
                  <h3 className="font-bold text-blue-900 mb-3">Regional Variations</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Kent:</strong> All four subjects tested</li>
                    <li>• <strong>Essex:</strong> Verbal Reasoning, Maths, English</li>
                    <li>• <strong>Birmingham:</strong> GL Assessment format</li>
                    <li>• <strong>London:</strong> Varies by borough</li>
                  </ul>
                </div>
              </div>
              <p className="text-lg text-gray-700 mt-6 leading-relaxed">
                <strong>Important Note:</strong> The 11+ is not universally implemented across the UK. It's primarily used in areas that maintain
                the grammar school system. The structure and content can vary significantly by region, so it's essential to check the specific
                requirements for your target schools.
              </p>
            </motion.div>
          </section>

          {/* Content Sections */}
          <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: '11+ Exam Structure',
                items: [
                  'Verbal Reasoning - Understanding and reasoning with words and concepts',
                  'Non-Verbal Reasoning - Visual problem-solving and pattern recognition',
                  'Mathematics - Numerical skills, problem-solving, and mathematical reasoning',
                  'English - Reading comprehension, grammar, vocabulary, and creative writing'
                ]
              },
              {
                title: 'Exam Boards',
                items: [
                  'GL Assessment - Most common, covers all four subjects',
                  'CEM (Centre for Evaluation and Monitoring) - Combined format, emphasis on vocabulary',
                  'ISEB (Independent Schools Examinations Board) - Used by many independent schools',
                  'Local variations - Some regions have their own specific formats'
                ]
              },
              {
                title: 'Benefits of our 11+ Tuition',
                items: [
                  'Expert UK tutors familiar with all exam boards',
                  'Personalized study plans tailored to your child\'s needs',
                  'Practice with past papers and mock exams',
                  'Time management and exam technique strategies',
                  'Regular progress tracking and feedback',
                  'Flexible online sessions to fit your schedule'
                ]
              }
            ].map((section, index) => (
              <motion.div
                key={section.title}
                className="rounded-xl p-6 bg-blue-50 border border-blue-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, type: "spring", bounce: 0.3 }}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
              >
                <h2 className="text-blue-900 font-semibold mb-4 text-xl">{section.title}</h2>
                <ul className="list-disc pl-5 text-blue-800 space-y-3">
                  {section.items.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + i * 0.05 }}
                      className="text-sm leading-relaxed"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </section>

          {/* Detailed Exam Information */}
          <section className="max-w-6xl mx-auto mb-12">
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Understanding Each 11+ Subject</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    subject: 'Verbal Reasoning',
                    description: 'Tests your child\'s ability to understand and reason using words. Includes synonyms, antonyms, word analogies, and logical sequences. This section assesses vocabulary, comprehension, and logical thinking skills.',
                    skills: ['Vocabulary knowledge', 'Word relationships', 'Logical sequences', 'Code breaking']
                  },
                  {
                    subject: 'Non-Verbal Reasoning',
                    description: 'Evaluates visual problem-solving abilities without using words. Tests pattern recognition, spatial awareness, and logical thinking through shapes, sequences, and analogies.',
                    skills: ['Pattern recognition', 'Spatial reasoning', 'Visual sequences', 'Shape analogies']
                  },
                  {
                    subject: 'Mathematics',
                    description: 'Covers the Year 6 curriculum and beyond, including number operations, fractions, decimals, percentages, geometry, and problem-solving. Tests both computational skills and mathematical reasoning.',
                    skills: ['Number operations', 'Fractions & decimals', 'Geometry', 'Problem-solving']
                  },
                  {
                    subject: 'English',
                    description: 'Assesses reading comprehension, grammar, punctuation, spelling, and creative writing. Tests understanding of different text types and the ability to write clearly and effectively.',
                    skills: ['Reading comprehension', 'Grammar & punctuation', 'Creative writing', 'Vocabulary']
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.subject}
                    className="bg-blue-50 rounded-xl p-6 border border-blue-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  >
                    <h3 className="text-xl font-bold text-blue-900 mb-3">{item.subject}</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Exam Format & Preparation Timeline */}
          <section className="max-w-6xl mx-auto mb-12">
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Exam Format & Preparation Timeline</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Test Format</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      <span><strong>Duration:</strong> Typically 45-60 minutes per paper</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      <span><strong>Format:</strong> Multiple choice or standard format depending on exam board</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      <span><strong>Papers:</strong> Usually 2-4 papers depending on subjects tested</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      <span><strong>Scoring:</strong> Standardized scores, often with age adjustments</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      <span><strong>Pass Rate:</strong> Varies by school, typically top 15-25% of candidates</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Recommended Preparation Timeline</h3>
                  <div className="space-y-4">
                    <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
                      <h4 className="font-bold text-blue-900 mb-2">Year 4 (Age 8-9)</h4>
                      <p className="text-sm text-gray-700">Begin building foundational skills, introduce reasoning concepts gently</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                      <h4 className="font-bold text-blue-900 mb-2">Year 5 (Age 9-10)</h4>
                      <p className="text-sm text-gray-700">Intensive preparation begins, regular practice papers, identify strengths and weaknesses</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                      <h4 className="font-bold text-blue-900 mb-2">Year 6 (Age 10-11)</h4>
                      <p className="text-sm text-gray-700">Final preparation phase, mock exams, exam technique refinement, stress management</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Exam Boards Detailed */}
          <section className="max-w-6xl mx-auto mb-12">
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Understanding Exam Boards</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    name: 'GL Assessment',
                    description: 'The most widely used 11+ exam board, covering all four subjects separately. Known for clear question formats and comprehensive coverage.',
                    features: ['Separate papers for each subject', 'Multiple choice format', 'Widely used across UK', 'Clear marking schemes'],
                    regions: 'Kent, Birmingham, Warwickshire, and many others'
                  },
                  {
                    name: 'CEM',
                    description: 'Centre for Evaluation and Monitoring format combines subjects and emphasizes vocabulary. Known for being less predictable.',
                    features: ['Combined papers', 'Strong vocabulary focus', 'Less predictable format', 'Time-pressured'],
                    regions: 'Essex, Berkshire, Buckinghamshire, and others'
                  },
                  {
                    name: 'ISEB',
                    description: 'Independent Schools Examinations Board format used by many independent schools. Can include additional elements like interviews.',
                    features: ['Used by independent schools', 'May include interviews', 'Comprehensive assessment', 'Higher academic standard'],
                    regions: 'Independent schools nationwide'
                  }
                ].map((board, index) => (
                  <motion.div
                    key={board.name}
                    className="bg-white rounded-xl p-6 border border-blue-200"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  >
                    <h3 className="text-xl font-bold text-blue-900 mb-3">{board.name}</h3>
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">{board.description}</p>
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-blue-800 mb-2">KEY FEATURES:</p>
                      <ul className="space-y-1">
                        {board.features.map((feature, i) => (
                          <li key={i} className="text-xs text-gray-600 flex items-start">
                            <span className="mr-1">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-xs text-gray-600 italic">Used in: {board.regions}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Benefits Section */}
          <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              className="rounded-2xl p-8 bg-blue-900 text-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <h3 className="font-semibold text-xl mb-4">Why Choose Tuitor for 11+ Preparation?</h3>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Purpose-built prep plans aligned to UK grammar-school standards</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Expert tutors familiar with GL Assessment, CEM, and ISEB formats</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Regular mock exams and practice papers from all major exam boards</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Personalized approach addressing your child's specific strengths and weaknesses</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Time management and exam technique strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Regular progress tracking and detailed feedback</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="rounded-2xl p-8 bg-blue-50 border border-blue-100"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <h3 className="text-blue-900 font-semibold mb-4 text-xl">How to Get Started with 11+ Tutoring?</h3>
              <p className="text-blue-800 mb-6 leading-relaxed">
                Our 11+ preparation program is designed to give your child the best chance of success. We'll assess their current level,
                identify areas for improvement, and create a tailored study plan that builds confidence and exam readiness.
              </p>
              <p className="text-blue-800 mb-6 leading-relaxed">
                All our tutors are experienced in 11+ preparation and understand the nuances of different exam boards.
                We provide regular practice with past papers and mock exams to ensure your child is fully prepared.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/pricing" className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors">
                  Get free trial lesson
                </Link>
              </motion.div>
            </motion.div>
          </section>

          {/* FAQ Section */}
          <section className="max-w-6xl mx-auto mb-12">
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {[
                  {
                    question: 'When should my child start preparing for the 11+?',
                    answer: 'Most experts recommend starting preparation 1-2 years before the exam. Beginning in Year 4 allows for gentle skill building, while Year 5 is ideal for intensive preparation. Starting too early can cause burnout, while starting too late may not provide enough time to develop all necessary skills.'
                  },
                  {
                    question: 'How is the 11+ scored?',
                    answer: 'Scores are typically standardized and age-adjusted to account for the age difference between children born at different times of the year. Most schools use a combination of raw scores and standardized scores, with passing marks varying by school. Some schools require scores in the top 15-25% of candidates.'
                  },
                  {
                    question: 'Can my child take the 11+ more than once?',
                    answer: 'Generally, no. The 11+ is taken once in September of Year 6. However, if your child is applying to multiple schools that use different exam boards, they may need to sit different exams. Some regions allow appeals or re-marks in exceptional circumstances.'
                  },
                  {
                    question: 'What happens if my child doesn\'t pass?',
                    answer: 'Not passing the 11+ doesn\'t mean your child won\'t receive a good education. There are excellent comprehensive schools, and many students thrive in non-selective environments. Some areas also offer appeals processes or alternative assessment methods.'
                  },
                  {
                    question: 'How much does 11+ tutoring cost?',
                    answer: 'Tutoring costs vary depending on the tutor\'s experience, location, and session frequency. Our flexible pricing plans make quality 11+ preparation accessible. We offer packages and individual sessions to suit different budgets and needs.'
                  }
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    className="bg-blue-50 rounded-lg p-6 border border-blue-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  >
                    <h3 className="text-lg font-bold text-blue-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default TestElevenPlus;

