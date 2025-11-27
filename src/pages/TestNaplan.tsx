'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const TestNaplan: React.FC = () => {
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);

  useEffect(() => {
    const heroImg = new Image();
    heroImg.src = '/images/naplan.jpg';
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
              backgroundImage: 'url(/images/naplan.jpg)',
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
            NAPLAN Test Preparation (Australia)
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
          >
            Comprehensive NAPLAN prep across reading, writing, language conventions and numeracy with expert Aussie tutors.
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
          {/* What is NAPLAN Section */}
          <section className="mb-12 mt-12">
            <motion.div
              className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">What is NAPLAN?</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                NAPLAN (National Assessment Program – Literacy and Numeracy) is an annual assessment for Australian students in Years 3, 5, 7, and 9.
                Administered by the Australian Curriculum, Assessment and Reporting Authority (ACARA), it measures students' proficiency in essential
                literacy and numeracy skills that are critical for their academic progress and future success.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white rounded-lg p-6 border border-blue-200">
                  <h3 className="font-bold text-blue-900 mb-3">Test Administration</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Tests held annually in <strong>March</strong></li>
                    <li>• Conducted <strong>online</strong> (with paper option for some)</li>
                    <li>• Results available from <strong>July</strong></li>
                    <li>• Not a pass/fail assessment</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6 border border-blue-200">
                  <h3 className="font-bold text-blue-900 mb-3">Purpose & Benefits</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Monitor individual student progress</li>
                    <li>• Identify areas needing support</li>
                    <li>• Inform teaching practices</li>
                    <li>• Provide national education data</li>
                  </ul>
                </div>
              </div>
              <p className="text-lg text-gray-700 mt-6 leading-relaxed">
                <strong>Important:</strong> NAPLAN is not a pass or fail test. It provides a snapshot of your child's current skills and helps identify
                areas where they may need additional support. Results are used to inform teaching strategies and support student development rather than
                determine progression to the next year level.
              </p>
              <div className="grid md:grid-cols-4 gap-4 mt-6">
                {['Year 3', 'Year 5', 'Year 7', 'Year 9'].map((year, index) => (
                  <motion.div
                    key={year}
                    className="bg-white rounded-lg p-4 text-center border border-blue-200"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  >
                    <div className="text-2xl font-bold text-blue-600">{year}</div>
                    <div className="text-sm text-gray-600 mt-1">Ages 8-15</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Content Sections */}
          <section className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: 'NAPLAN Test Areas',
                items: [
                  'Reading - Comprehension skills through various text types (narrative, informative, persuasive)',
                  'Writing - Ability to write coherent, structured texts in different genres',
                  'Language Conventions - Spelling, grammar, punctuation, and vocabulary',
                  'Numeracy - Mathematical knowledge, understanding, and problem-solving across number, measurement, geometry, and statistics'
                ]
              },
              {
                title: 'Benefits of our NAPLAN Tuition',
                items: [
                  'Expert Australian tutors familiar with NAPLAN format and content',
                  'Targeted practice for each test area',
                  'Familiarization with question types and test format',
                  'Time management strategies for test conditions',
                  'Regular practice tests and progress tracking',
                  'Flexible online sessions to fit your schedule',
                  'Build confidence and reduce test anxiety'
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

          {/* Detailed Test Information */}
          <section className="mb-12">
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Understanding Each NAPLAN Test Area</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    subject: 'Reading',
                    description: 'Tests comprehension skills through various text types including narratives, informative texts, and persuasive texts. Students must demonstrate understanding of literal and inferential meaning, text structure, and language features.',
                    skills: ['Text comprehension', 'Inference skills', 'Text analysis', 'Vocabulary understanding']
                  },
                  {
                    subject: 'Writing',
                    description: 'Assesses the ability to write coherent, structured texts in different genres (narrative, persuasive, informative). Evaluates creativity, organization, grammar, spelling, and punctuation.',
                    skills: ['Creative writing', 'Text structure', 'Grammar & spelling', 'Genre knowledge']
                  },
                  {
                    subject: 'Language Conventions',
                    description: 'Tests spelling, grammar, punctuation, and vocabulary. Students must identify and correct errors, understand language rules, and demonstrate knowledge of word meanings and relationships.',
                    skills: ['Spelling accuracy', 'Grammar rules', 'Punctuation', 'Vocabulary knowledge']
                  },
                  {
                    subject: 'Numeracy',
                    description: 'Covers mathematical knowledge, understanding, and problem-solving across number and algebra, measurement and geometry, and statistics and probability. Tests both computational skills and mathematical reasoning.',
                    skills: ['Number operations', 'Measurement', 'Geometry', 'Statistics & probability']
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

          {/* Scoring & Results Section */}
          <section className="mb-12">
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Understanding NAPLAN Scoring</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Performance Bands</h3>
                  <div className="space-y-3">
                    {[
                      { band: 'Band 6 (Year 3)', description: 'Exceeding expectations for Year 3 level' },
                      { band: 'Band 8 (Year 5)', description: 'Exceeding expectations for Year 5 level' },
                      { band: 'Band 9 (Year 7)', description: 'Exceeding expectations for Year 7 level' },
                      { band: 'Band 10 (Year 9)', description: 'Exceeding expectations for Year 9 level' }
                    ].map((item, index) => (
                      <div key={index} className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
                        <h4 className="font-bold text-blue-900 mb-1">{item.band}</h4>
                        <p className="text-sm text-gray-700">{item.description}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Each year level has its own band scale. Students are assessed against the minimum standard for their year level,
                    with results showing whether they are below, at, or above the expected standard.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">What Results Mean</h3>
                  <div className="space-y-4">
                    <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                      <h4 className="font-bold text-green-900 mb-2">Above Standard</h4>
                      <p className="text-sm text-gray-700">Your child is performing above the expected level for their year. Continue to challenge and extend their learning.</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                      <h4 className="font-bold text-blue-900 mb-2">At Standard</h4>
                      <p className="text-sm text-gray-700">Your child is meeting the expected level for their year. Maintain current learning approaches and continue regular practice.</p>
                    </div>
                    <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
                      <h4 className="font-bold text-yellow-900 mb-2">Below Standard</h4>
                      <p className="text-sm text-gray-700">Your child may need additional support in this area. Targeted tutoring can help address specific skill gaps.</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Results are provided as both numerical scores and performance bands, making it easy to understand your child's progress
                    and identify areas for improvement.
                  </p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Year Level Details */}
          <section className="mb-12">
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-6">NAPLAN by Year Level</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    year: 'Year 3',
                    age: 'Ages 8-9',
                    focus: 'Foundation skills assessment',
                    details: 'First formal assessment, focuses on basic literacy and numeracy skills. Tests are shorter and more age-appropriate.',
                    duration: 'Shorter test duration'
                  },
                  {
                    year: 'Year 5',
                    age: 'Ages 10-11',
                    focus: 'Skill development check',
                    details: 'Assesses progress since Year 3. More complex texts and mathematical problems. Introduces more sophisticated writing tasks.',
                    duration: 'Standard test duration'
                  },
                  {
                    year: 'Year 7',
                    age: 'Ages 12-13',
                    focus: 'Transition assessment',
                    details: 'First NAPLAN in secondary school. More challenging content reflecting secondary curriculum expectations.',
                    duration: 'Standard test duration'
                  },
                  {
                    year: 'Year 9',
                    age: 'Ages 14-15',
                    focus: 'Pre-senior assessment',
                    details: 'Most comprehensive assessment. Results can inform subject choices and career pathways. Highest complexity level.',
                    duration: 'Longest test duration'
                  }
                ].map((level, index) => (
                  <motion.div
                    key={level.year}
                    className="bg-white rounded-xl p-6 border border-blue-200"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  >
                    <div className="text-2xl font-bold text-blue-600 mb-2">{level.year}</div>
                    <div className="text-sm text-gray-600 mb-3">{level.age}</div>
                    <div className="text-xs font-semibold text-blue-800 mb-2">{level.focus}</div>
                    <p className="text-xs text-gray-700 mb-3 leading-relaxed">{level.details}</p>
                    <div className="text-xs text-gray-600 italic">{level.duration}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Benefits Section */}
          <section className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              className="rounded-2xl p-8 bg-blue-900 text-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <h3 className="font-semibold text-xl mb-4">Why Choose Tuitor for NAPLAN Preparation?</h3>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Purpose-built prep plans aligned to Australian Curriculum standards</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Expert Australian tutors familiar with NAPLAN format and expectations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Practice with official NAPLAN-style questions and past papers</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Targeted support for each test area (Reading, Writing, Language Conventions, Numeracy)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Time management strategies for test conditions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Regular progress tracking and detailed feedback</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Build confidence and reduce test anxiety</span>
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
              <h3 className="text-blue-900 font-semibold mb-4 text-xl">How to Get Started with NAPLAN Tutoring?</h3>
              <p className="text-blue-800 mb-6 leading-relaxed">
                Our NAPLAN preparation program helps students in Years 3, 5, 7, and 9 build confidence and achieve their best results.
                We'll assess your child's current level, identify areas for improvement, and create a tailored study plan.
              </p>
              <p className="text-blue-800 mb-6 leading-relaxed">
                All our tutors are experienced in NAPLAN preparation and understand the Australian Curriculum. We provide regular practice
                with NAPLAN-style questions and mock tests to ensure your child is fully prepared for the March assessment.
              </p>
              <div className="bg-white rounded-lg p-4 mb-6 border border-blue-200">
                <p className="text-sm font-semibold text-blue-900 mb-2">NAPLAN Test Dates:</p>
                <p className="text-sm text-gray-700">Tests are held annually in March for students in Years 3, 5, 7, and 9.</p>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/pricing" className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors">
                  Get free trial lesson
                </Link>
              </motion.div>
            </motion.div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
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
                    question: 'When should my child start preparing for NAPLAN?',
                    answer: 'NAPLAN preparation should be ongoing through regular school learning. However, focused preparation 2-3 months before the test can help familiarize students with the format and reduce anxiety. We recommend starting practice tests and format familiarization in January-February for March tests.'
                  },
                  {
                    question: 'Is NAPLAN a pass or fail test?',
                    answer: 'No, NAPLAN is not a pass or fail test. It provides a snapshot of your child\'s current skills in literacy and numeracy. Results show whether students are below, at, or above the expected standard for their year level, helping identify areas where additional support may be beneficial.'
                  },
                  {
                    question: 'How long are NAPLAN tests?',
                    answer: 'Test duration varies by year level. Year 3 tests are shorter (approximately 40-45 minutes per test), while Years 5, 7, and 9 have longer tests (approximately 45-50 minutes per test). There are breaks between tests, and the full assessment is typically completed over 3 days.'
                  },
                  {
                    question: 'What if my child performs below standard?',
                    answer: 'If your child performs below the expected standard, it indicates they may need additional support in that area. This is valuable information that can help you and your child\'s school provide targeted assistance. Our tutors can help address specific skill gaps and build confidence.'
                  },
                  {
                    question: 'Can NAPLAN results affect my child\'s school progression?',
                    answer: 'No, NAPLAN results do not determine whether your child progresses to the next year level. School progression is based on your child\'s overall performance throughout the year, as assessed by their teachers. NAPLAN is one tool among many used to understand student progress.'
                  },
                  {
                    question: 'How can tutoring help with NAPLAN?',
                    answer: 'Tutoring can help by familiarizing students with test formats, building confidence, addressing specific skill gaps, and teaching effective test-taking strategies. Our tutors understand the NAPLAN format and can provide targeted practice that aligns with the Australian Curriculum.'
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

export default TestNaplan;

