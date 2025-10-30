import React from 'react';
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
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Global Curriculum Coverage</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Expert tutoring across international educational standards and exam preparation.
          </p>
          <div className="mt-10 flex justify-center">
            <a href="/pricing" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              Book Your Free Trial Lesson
            </a>
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-16 px-6 sm:px-10 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Comprehensive Curriculum Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expert tutors are well-versed in educational standards across multiple countries and systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-blue-50 p-8 rounded-xl shadow-lg">
              <div className="bg-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FaGraduationCap className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">K-12 Education</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive support for elementary, middle, and high school students across all major subjects and curricula.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>Core subjects alignment</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>Homework assistance</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>Test preparation</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-xl shadow-lg">
              <div className="bg-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FaBook className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Standardized Tests</h3>
              <p className="text-gray-600 mb-6">
                Expert preparation for all major standardized tests including SAT, ACT, AP exams, GCSE, A-Levels, and more.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>Test-taking strategies</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>Practice exams</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>Score improvement</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-xl shadow-lg">
              <div className="bg-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FaChalkboardTeacher className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">University Courses</h3>
              <p className="text-gray-600 mb-6">
                Support for undergraduate and graduate-level courses across a wide range of disciplines and specializations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>Advanced topics</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>Research assistance</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>Exam preparation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Countries grid */}
      <section className="py-16 px-6 sm:px-10 lg:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Global Curriculum Coverage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our tutors are experts in educational systems from around the world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {countries.map((country) => (
              <div key={country.name} className="bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <span className="text-5xl mr-4">{country.flag}</span>
                  <h3 className="text-2xl font-bold text-blue-900">{country.name}</h3>
                </div>
                <ul className="space-y-3">
                  {country.curricula.map((curriculum) => (
                    <li key={curriculum} className="flex items-center">
                      <FaCheckCircle className="text-green-500 mr-3" />
                      <span className="text-gray-700">{curriculum}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a href="/pricing" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg transition-all duration-300">
              Find Your Perfect Tutor
            </a>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="mt-12 py-10 bg-slate-900/50 border-t border-white/10">
        <div className="px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto text-center">
          <h3 className="text-slate-200 font-semibold">LET’S LEARN TOGETHER!</h3>
          <p className="mt-2 text-slate-300 text-sm">Contact us to get details about our admissions, lesson plans, prices, and timings.</p>
          <div className="mt-5 flex justify-center gap-3">
            <a href="/pricing" className="rounded-md bg-black text-white px-4 py-2 text-sm">View Pricing</a>
            <a href="/contact" className="rounded-md bg-[#0e2a57] text-white px-4 py-2 text-sm">Contact Admissions</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Curriculum;


