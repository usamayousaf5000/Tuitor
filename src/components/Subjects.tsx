'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCalculator, FaFlask, FaBook, FaLaptopCode, FaGraduationCap, FaUniversity } from 'react-icons/fa';

const subjects = [
  {
    name: 'Mathematics',
    icon: <FaCalculator className="w-8 h-8 text-blue-600" />,
    description: 'Master mathematical concepts from basic arithmetic to advanced calculus with our expert tutors.',
    tags: ['K-12', 'Algebra', 'Calculus', 'SAT/ACT'],
    popular: true,
    bgImage: '/images/mth.jpg'
  },
  {
    name: 'Science',
    icon: <FaFlask className="w-8 h-8 text-blue-600" />,
    description: 'Explore the natural world through physics, chemistry, and biology with hands-on learning approaches.',
    tags: ['Physics', 'Chemistry', 'Biology'],
    popular: false,
    bgImage: '/images/sci.jpg'
  },
  {
    name: 'English',
    icon: <FaBook className="w-8 h-8 text-blue-600" />,
    description: 'Develop strong reading comprehension and writing skills for academic and professional success.',
    tags: ['Reading', 'Writing', 'ESL'],
    popular: true,
    bgImage: '/images/en.jpg'
  },
  {
    name: 'Computer Science',
    icon: <FaLaptopCode className="w-8 h-8 text-blue-600" />,
    description: 'Learn programming languages and computational thinking with project-based instruction.',
    tags: ['Python', 'JavaScript', 'AP CS'],
    popular: false,
    bgImage: '/images/mth.jpg' // Temporary
  },
  {
    name: 'Test Prep',
    icon: <FaGraduationCap className="w-8 h-8 text-blue-600" />,
    description: 'Prepare for standardized tests with proven strategies and personalized study plans.',
    tags: ['SAT', 'ACT', 'AP Exams'],
    popular: true,
    bgImage: '/images/sci.jpg' // Temporary
  },
  {
    name: 'University Support',
    icon: <FaUniversity className="w-8 h-8 text-blue-600" />,
    description: 'Get assistance with university-level coursework, research papers, and complex projects.',
    tags: ['Assignments', 'Labs', 'Projects'],
    popular: false,
    bgImage: '/images/en.jpg' // Temporary
  }
];

const Subjects: React.FC = () => {
  return (
    <section id="subjects" className="py-16 px-6 sm:px-10 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">Subjects & Programs</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our expert tutors provide comprehensive support across a wide range of academic subjects and standardized test preparation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject, index) => (
            <motion.div
              key={subject.name}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring", bounce: 0.3 }}
              whileHover={{ y: -12, rotateY: 5, scale: 1.02, transition: { duration: 0.3 } }}
              className={`rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 relative ${subject.bgImage ? '' : 'bg-white'
                }`}
              style={{
                ...(subject.bgImage ? {
                  backgroundImage: `url(${subject.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                } : {}),
                transformStyle: 'preserve-3d'
              }}
            >
              <div className={`p-8 relative z-10 ${subject.bgImage ? 'text-white' : ''}`}>
                <div className="flex items-center mb-5">
                  <motion.div 
                    className={`mr-4 p-3 rounded-full ${subject.bgImage ? 'bg-white/20 backdrop-blur-sm' : 'bg-blue-100'}`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {React.cloneElement(subject.icon, { className: `w-8 h-8 ${subject.bgImage ? 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]' : 'text-blue-600'}` })}
                  </motion.div>
                  <h3 className={`text-2xl font-bold ${subject.bgImage ? 'text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]' : 'text-blue-900'}`}>{subject.name}</h3>
                </div>

                <p className={`mb-6 text-lg ${subject.bgImage ? 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]' : 'text-gray-600'}`}>{subject.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {subject.tags.map((tag) => (
                    <span key={tag} className={`px-3 py-1 text-sm font-medium rounded-full ${subject.bgImage
                        ? 'bg-white/30 text-white backdrop-blur-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]'
                        : 'bg-blue-100 text-blue-800'
                      }`}>
                      {tag}
                    </span>
                  ))}
                </div>

                {subject.popular && (
                  <div className={`inline-block px-4 py-2 text-sm font-semibold rounded-full mb-5 ${subject.bgImage
                      ? 'bg-green-500/80 text-white backdrop-blur-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]'
                      : 'bg-green-100 text-green-800'
                    }`}>
                    Popular Subject
                  </div>
                )}

                <div className="mt-6">
                  <a
                    href={`/subjects/${subject.name.toLowerCase()}`}
                    className={`font-semibold text-lg flex items-center ${subject.bgImage
                        ? 'text-white hover:text-white/80 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]'
                        : 'text-blue-600 hover:text-blue-800'
                      }`}
                  >
                    Learn more
                    <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center bg-blue-50 p-10 rounded-xl shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Don't see the subject you're looking for?</h3>
          <p className="text-gray-600 mb-6 text-lg max-w-2xl mx-auto">We offer tutoring in many more subjects. Contact us to discuss your specific learning needs.</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors text-lg shadow-md"
            >
              Contact Us
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Subjects;
