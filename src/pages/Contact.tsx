'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaHeadset, FaComments } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const heroImg = new Image();
    heroImg.src = '/images/contact.jpg';
    heroImg.onload = () => setHeroImageLoaded(true);
  }, []);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateField = (name: string, value: string) => {
    let error = '';

    switch (name) {
      case 'firstName':
        if (!value.trim()) {
          error = 'First name is required';
        }
        break;
      case 'lastName':
        if (!value.trim()) {
          error = 'Last name is required';
        }
        break;
      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!validateEmail(value)) {
          error = 'Please enter a valid email address';
        }
        break;
      case 'message':
        if (!value.trim()) {
          error = 'Message is required';
        } else if (value.trim().length < 10) {
          error = 'Message must be at least 10 characters';
        }
        break;
    }

    return error;
  };

  const handleBlur = (name: string) => {
    setTouched({ ...touched, [name]: true });
    const value = name === 'firstName' ? firstName :
      name === 'lastName' ? lastName :
        name === 'email' ? email :
          name === 'message' ? message : '';
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const isFormValid = () => {
    return firstName.trim() !== '' &&
      lastName.trim() !== '' &&
      email.trim() !== '' &&
      validateEmail(email) &&
      message.trim() !== '' &&
      message.trim().length >= 10;
  };

  const sendWhatsApp = () => {
    const whatsappMessage = `Hello! I would like to get in touch.

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || 'Not provided'}
Subject: ${subject || 'Not provided'}

Message:
${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open("https://wa.me/447367067438?text=" + encodedMessage, "_blank");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: { [key: string]: string } = {};
    newErrors.firstName = validateField('firstName', firstName);
    newErrors.lastName = validateField('lastName', lastName);
    newErrors.email = validateField('email', email);
    newErrors.message = validateField('message', message);

    setErrors(newErrors);
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      message: true,
    });

    // Only submit if form is valid
    if (isFormValid()) {
      sendWhatsApp();
    }
  };

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative min-h-[600px] h-auto pt-28 pb-16 px-6 sm:px-10 lg:px-16 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 min-h-[600px] h-full">
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
              backgroundImage: 'url(/images/contact.jpg)',
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
            className="flex flex-col sm:flex-row justify-center mt-8 space-y-4 sm:space-y-0 sm:space-x-6"
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
                <p className="text-white font-bold flex items-center gap-2">🇬🇧 +44 7367 067438</p>
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
                <p className="text-white font-bold">thinkhubtutors@gmail.com</p>
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
              className="bg-white p-6 md:p-10 rounded-xl shadow-xl transform transition-all duration-300 hover:shadow-2xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-8">Send Us a Message</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">First Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      id="firstName"
                      value={firstName}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                        if (touched.firstName) {
                          setErrors({ ...errors, firstName: validateField('firstName', e.target.value) });
                        }
                      }}
                      onBlur={() => handleBlur('firstName')}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${errors.firstName && touched.firstName
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-300 focus:ring-blue-500'
                        }`}
                      placeholder="Your first name"
                    />
                    {errors.firstName && touched.firstName && (
                      <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Last Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      id="lastName"
                      value={lastName}
                      onChange={(e) => {
                        setLastName(e.target.value);
                        if (touched.lastName) {
                          setErrors({ ...errors, lastName: validateField('lastName', e.target.value) });
                        }
                      }}
                      onBlur={() => handleBlur('lastName')}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${errors.lastName && touched.lastName
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-300 focus:ring-blue-500'
                        }`}
                      placeholder="Your last name"
                    />
                    {errors.lastName && touched.lastName && (
                      <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (touched.email) {
                        setErrors({ ...errors, email: validateField('email', e.target.value) });
                      }
                    }}
                    onBlur={() => handleBlur('email')}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${errors.email && touched.email
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-gray-300 focus:ring-blue-500'
                      }`}
                    placeholder="Your email address"
                  />
                  {errors.email && touched.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone (Optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                  <select
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
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
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message <span className="text-red-500">*</span></label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (touched.message) {
                        setErrors({ ...errors, message: validateField('message', e.target.value) });
                      }
                    }}
                    onBlur={() => handleBlur('message')}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${errors.message && touched.message
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-gray-300 focus:ring-blue-500'
                      }`}
                    placeholder="Your message"
                  ></textarea>
                  {errors.message && touched.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>
                <motion.button
                  type="submit"
                  disabled={!isFormValid()}
                  whileHover={isFormValid() ? { scale: 1.02 } : {}}
                  whileTap={isFormValid() ? { scale: 0.98 } : {}}
                  className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 shadow-md ${isFormValid()
                      ? 'bg-blue-600 text-white hover:bg-blue-700 cursor-pointer'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="space-y-10 bg-blue-50 p-6 md:p-10 rounded-xl shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-8">Contact Information</h2>

              {[
                { icon: <FaPhone className="text-white text-2xl" />, title: 'Phone', items: ['🇬🇧 United Kingdom: +44 7367 067438', '🇨🇦 Canada: +1 (587) 870-0861', '🇦🇺 Australia: +61 480 009 464'] },
                { icon: <FaEnvelope className="text-white text-2xl" />, title: 'Email', items: ['thinkhubtutors@gmail.com'] },
                { icon: <FaMapMarkerAlt className="text-white text-2xl" />, title: 'Office Location', items: ['Avenue HQ, 17 Mann Island', 'Liverpool L3 1BP', 'United Kingdom'] }
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


