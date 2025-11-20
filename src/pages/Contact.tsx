'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaHeadset, FaComments } from 'react-icons/fa';

const Contact: React.FC = () => {
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
            Get In Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Have questions about our tutoring services? Our team is here to help you find the perfect learning solution.
          </motion.p>
          <motion.div 
            className="flex justify-center mt-8 space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          >
            <motion.div 
              className="flex items-center bg-blue-800 px-6 py-3 rounded-lg"
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <FaHeadset className="text-blue-300 text-2xl mr-3" />
              <div className="text-left">
                <p className="text-blue-300 text-sm">Call us at</p>
                <p className="text-white font-bold">+1 (800) 555-1234</p>
              </div>
            </motion.div>
            <motion.div 
              className="flex items-center bg-blue-800 px-6 py-3 rounded-lg"
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <FaComments className="text-blue-300 text-2xl mr-3" />
              <div className="text-left">
                <p className="text-blue-300 text-sm">Email us at</p>
                <p className="text-white font-bold">contact@tuitor.com</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 px-6 sm:px-10 lg:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div 
              className="bg-white p-10 rounded-xl shadow-xl transform transition-all duration-300 hover:shadow-2xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-8">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="Your email address"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone (Optional)</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                  <select 
                    id="subject" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="pricing">Pricing Question</option>
                    <option value="tutoring">Tutoring Services</option>
                    <option value="technical">Technical Support</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <motion.button 
                  type="submit" 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-md"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              className="space-y-10 bg-blue-50 p-10 rounded-xl shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-8">Contact Information</h2>
              
              {[
                { icon: <FaPhone className="text-white text-2xl" />, title: 'Phone', items: ['Main: +1 (800) 555-1234', 'Support: +1 (800) 555-5678'] },
                { icon: <FaEnvelope className="text-white text-2xl" />, title: 'Email', items: ['General: contact@tuitor.com', 'Support: support@tuitor.com'] },
                { icon: <FaMapMarkerAlt className="text-white text-2xl" />, title: 'Office Location', items: ['123 Education Avenue', 'Suite 200', 'New York, NY 10001'] },
                { icon: <FaClock className="text-white text-2xl" />, title: 'Hours of Operation', items: ['Monday - Friday: 8:00 AM - 9:00 PM EST', 'Saturday: 9:00 AM - 5:00 PM EST', 'Sunday: 12:00 PM - 5:00 PM EST'] }
              ].map((contact, index) => (
                <motion.div 
                  key={contact.title}
                  className="flex items-start transform transition-all duration-300"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 8, transition: { duration: 0.2 } }}
                >
                  <motion.div 
                    className="bg-blue-600 p-4 rounded-lg shadow-md mr-5"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {contact.icon}
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-xl text-blue-900">{contact.title}</h3>
                    {contact.items.map((item, i) => (
                      <p key={i} className="text-gray-700 mt-2 text-lg">{item}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
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
                question: 'How quickly can I expect a response?',
                answer: 'We typically respond to all inquiries within 24 hours during business days.'
              },
              {
                question: 'Can I schedule a free consultation?',
                answer: 'Yes! We offer free 15-minute consultations to discuss your tutoring needs and how we can help.'
              },
              {
                question: 'Do you offer online tutoring?',
                answer: 'Yes, we provide both in-person and online tutoring services to accommodate your preferences and location.'
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
    </main>
  );
};

export default Contact;


