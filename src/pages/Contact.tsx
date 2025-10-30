import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaHeadset, FaComments } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-6 sm:px-10 lg:px-16 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Have questions about our tutoring services? Our team is here to help you find the perfect learning solution.
          </p>
          <div className="flex justify-center mt-8 space-x-6">
            <div className="flex items-center bg-blue-800 px-6 py-3 rounded-lg">
              <FaHeadset className="text-blue-300 text-2xl mr-3" />
              <div className="text-left">
                <p className="text-blue-300 text-sm">Call us at</p>
                <p className="text-white font-bold">+1 (800) 555-1234</p>
              </div>
            </div>
            <div className="flex items-center bg-blue-800 px-6 py-3 rounded-lg">
              <FaComments className="text-blue-300 text-2xl mr-3" />
              <div className="text-left">
                <p className="text-blue-300 text-sm">Email us at</p>
                <p className="text-white font-bold">contact@tuitor.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 px-6 sm:px-10 lg:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-10 rounded-xl shadow-xl transform transition-all duration-300 hover:shadow-2xl">
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
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-md"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-10 bg-blue-50 p-10 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold text-blue-900 mb-8">Contact Information</h2>
              
              <div className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                <div className="bg-blue-600 p-4 rounded-lg shadow-md mr-5">
                  <FaPhone className="text-white text-2xl" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-blue-900">Phone</h3>
                  <p className="text-gray-700 mt-2 text-lg">Main: +1 (800) 555-1234</p>
                  <p className="text-gray-700 text-lg">Support: +1 (800) 555-5678</p>
                </div>
              </div>
              
              <div className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                <div className="bg-blue-600 p-4 rounded-lg shadow-md mr-5">
                  <FaEnvelope className="text-white text-2xl" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-blue-900">Email</h3>
                  <p className="text-gray-700 mt-2 text-lg">General: contact@tuitor.com</p>
                  <p className="text-gray-700 text-lg">Support: support@tuitor.com</p>
                </div>
              </div>
              
              <div className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                <div className="bg-blue-600 p-4 rounded-lg shadow-md mr-5">
                  <FaMapMarkerAlt className="text-white text-2xl" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-blue-900">Office Location</h3>
                  <p className="text-gray-700 mt-2 text-lg">123 Education Avenue</p>
                  <p className="text-gray-700 text-lg">Suite 200</p>
                  <p className="text-gray-700 text-lg">New York, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                <div className="bg-blue-600 p-4 rounded-lg shadow-md mr-5">
                  <FaClock className="text-white text-2xl" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-blue-900">Hours of Operation</h3>
                  <p className="text-gray-700 mt-2 text-lg">Monday - Friday: 8:00 AM - 9:00 PM EST</p>
                  <p className="text-gray-700 text-lg">Saturday: 9:00 AM - 5:00 PM EST</p>
                  <p className="text-gray-700 text-lg">Sunday: 12:00 PM - 5:00 PM EST</p>
                </div>
              </div>
            </div>
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
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;


