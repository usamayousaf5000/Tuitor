import React from 'react';
import { FaQuoteLeft, FaUserCircle } from 'react-icons/fa';

const testimonials = [
  { 
    name: 'Ava Williams', 
    role: 'Grade 10 Student',
    quote: 'My math grades jumped from C to A-. The tutors were patient and explained concepts in ways that made sense to me. The sessions were tailored perfectly to my learning style.'
  },
  { 
    name: 'Noah Chen', 
    role: 'SAT Prep Student',
    quote: 'Scored 150+ points higher on my SAT after following the focused prep plan. My tutor knew exactly what areas I needed to work on and provided excellent strategies.'
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 px-6 sm:px-10 lg:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">What Our Students Say</h2>
          <p className="max-w-2xl mx-auto text-gray-600">Hear from students and parents who have experienced the difference our tutoring makes.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <FaQuoteLeft className="text-blue-500 opacity-50" size={24} />
                  </div>
                </div>
                <p className="text-gray-700 mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <FaUserCircle className="w-12 h-12 text-blue-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-blue-900">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#contact" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-md inline-block">
            Start Your Journey Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
