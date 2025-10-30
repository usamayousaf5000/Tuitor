import React from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaUserFriends, FaClock } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-20 px-4 bg-gradient-to-br from-blue-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Achieve Academic Excellence with Expert Online Tutoring
            </h1>
            <p className="mt-6 text-blue-100 text-lg">
              Our experienced tutors provide personalized learning plans to help students of all ages and abilities excel in their studies and build confidence.
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-center text-blue-100">
                <svg className="w-6 h-6 mr-3 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-lg">Personalized 1-on-1 learning experience</span>
              </li>
              <li className="flex items-center text-blue-100">
                <svg className="w-6 h-6 mr-3 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-lg">Expert tutors with proven success records</span>
              </li>
              <li className="flex items-center text-blue-100">
                <svg className="w-6 h-6 mr-3 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-lg">Flexible scheduling to fit your lifestyle</span>
              </li>
            </ul>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/pricing" className="px-8 py-4 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-colors text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200">
                View Pricing
              </Link>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="bg-white p-4 rounded-xl shadow-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Online tutoring session" 
                className="w-full h-auto rounded-lg object-cover"
              />
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-5 -right-5 bg-white rounded-xl shadow-xl p-4 w-48 transform hover:scale-105 transition-transform duration-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-900 font-bold">Success Rate</span>
                  <span className="text-green-500 font-bold">95%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white rounded-xl shadow-xl p-6 transform hover:scale-105 transition-transform duration-200">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaGraduationCap className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Students Taught</p>
                <p className="text-2xl font-bold text-blue-900">5,000+</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl p-6 transform hover:scale-105 transition-transform duration-200">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaUserFriends className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Expert Tutors</p>
                <p className="text-2xl font-bold text-blue-900">100+</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl p-6 transform hover:scale-105 transition-transform duration-200">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaClock className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Years Experience</p>
                <p className="text-2xl font-bold text-blue-900">15+</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trusted By Section */}
        <div className="mt-16 text-center">
          <p className="text-xl font-semibold text-blue-200 mb-8">Trusted by parents and schools across the country</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-80">
            <div className="h-12 w-32 bg-white rounded-lg opacity-80 flex items-center justify-center">
              <span className="text-blue-900 font-bold">School Logo</span>
            </div>
            <div className="h-12 w-32 bg-white rounded-lg opacity-80 flex items-center justify-center">
              <span className="text-blue-900 font-bold">School Logo</span>
            </div>
            <div className="h-12 w-32 bg-white rounded-lg opacity-80 flex items-center justify-center">
              <span className="text-blue-900 font-bold">School Logo</span>
            </div>
            <div className="h-12 w-32 bg-white rounded-lg opacity-80 flex items-center justify-center">
              <span className="text-blue-900 font-bold">School Logo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
