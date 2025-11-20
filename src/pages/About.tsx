'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUsers, FaChartLine, FaAward,} from 'react-icons/fa';

const About: React.FC = () => {
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
            About Tuitor
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            We are passionate educators dedicated to transforming online learning through personalized tutoring, innovative teaching methods, and a commitment to student success.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 sm:px-10 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {key: 'Years Experience', value: '15+', icon: <FaGraduationCap className="w-10 h-10 text-blue-600" />},
              {key: 'Students Taught', value: '5,000+', icon: <FaUsers className="w-10 h-10 text-blue-600" />},
              {key: 'Avg. Grade Improvement', value: '+2 grades', icon: <FaChartLine className="w-10 h-10 text-blue-600" />},
              {key: 'Expert Tutors', value: '100+', icon: <FaAward className="w-10 h-10 text-blue-600" />},
            ].map((stat, index) => (
              <motion.div 
                key={stat.key} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, type: "spring", bounce: 0.3 }}
                whileHover={{ y: -12, scale: 1.02, transition: { duration: 0.3 } }}
                className="text-center p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <motion.div 
                  className="flex justify-center mb-5"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {stat.icon}
                </motion.div>
                <div className="text-4xl font-bold text-blue-900 mb-3">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.key}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative py-20 px-6 sm:px-10 lg:px-16 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/ST.jpg)',
          }}
        >
        </div>
        
        {/* Content on top of image */}
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          >
            <motion.h2 
              className="text-4xl font-bold text-white mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our Story
            </motion.h2>
            <motion.p 
              className="text-white max-w-3xl mx-auto text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Transforming online education with personalized learning experiences
            </motion.p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-white text-lg mb-6 leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
                Tuitor was founded in 2010 by a team of dedicated educators and technology experts who recognized the need for personalized, accessible online tutoring. What began as a small initiative has evolved into a comprehensive educational platform serving students worldwide.
              </p>
              <p className="text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
                Our mission has always been to provide accessible, high-quality education that adapts to each student's unique learning style and needs. We believe that every student has the potential to excel with the right guidance and support.
              </p>
              <p className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
                Today, we continue to innovate and expand our services, incorporating the latest educational research and technology to deliver exceptional learning experiences that help students achieve their academic goals.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white/20 backdrop-blur-sm p-8 rounded-lg border border-white/30"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <h3 className="text-xl font-semibold text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">Our Core Values</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-white rounded-full p-1 mr-3 mt-1"></span>
                  <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]"><strong className="text-white">Excellence:</strong> We strive for the highest standards in everything we do</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-white rounded-full p-1 mr-3 mt-1"></span>
                  <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]"><strong className="text-white">Personalization:</strong> We tailor our approach to each student's unique needs</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-white rounded-full p-1 mr-3 mt-1"></span>
                  <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]"><strong className="text-white">Innovation:</strong> We continuously improve our methods and technology</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-white rounded-full p-1 mr-3 mt-1"></span>
                  <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]"><strong className="text-white">Accessibility:</strong> We make quality education available to all</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-white rounded-full p-1 mr-3 mt-1"></span>
                  <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]"><strong className="text-white">Integrity:</strong> We operate with honesty and transparency</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 sm:px-10 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Meet the educators and experts behind Think Hub Tutors</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {name: 'Dr. Sarah Johnson', role: 'Founder & CEO', bio: 'Former university professor with 15+ years in education technology'},
              {name: 'Michael Chen', role: 'Chief Academic Officer', bio: 'Curriculum development expert with background in personalized learning'},
              {name: 'Emma Williams', role: 'Head of Tutor Success', bio: 'Experienced educator focused on professional development and quality assurance'},
            ].map((member, index) => (
              <motion.div 
                key={member.name} 
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, type: "spring", bounce: 0.3 }}
                whileHover={{ y: -12, rotateY: 5, scale: 1.02, transition: { duration: 0.3 } }}
                className="text-center p-6 rounded-lg shadow-md border border-gray-100"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div 
                  className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <FaUsers className="w-12 h-12 text-gray-400" />
                </motion.div>
                <h3 className="text-xl font-semibold text-blue-900">{member.name}</h3>
                <p className="text-blue-600 mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
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
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Ready to Experience the Think Hub Difference?</h2>
          <p className="text-gray-700 mb-8">Join thousands of students who have transformed their academic journey with our personalized tutoring approach.</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/contact" className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-md inline-block">
              Get Started Today
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
};

export default About;


