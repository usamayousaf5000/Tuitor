import React from 'react';
import { FaSearch, FaUserGraduate, FaLaptop } from 'react-icons/fa';

const steps = [
  { 
    n: 1, 
    title: 'Request a Tutor', 
    desc: 'Fill out our simple form with your academic needs, schedule preferences, and learning goals.', 
    icon: <FaSearch className="w-8 h-8 text-white" />
  },
  { 
    n: 2, 
    title: 'Meet Your Expert', 
    desc: 'We match you with a qualified tutor who specializes in your subject area and fits your learning style.', 
    icon: <FaUserGraduate className="w-8 h-8 text-white" />
  },
  { 
    n: 3, 
    title: 'Start Learning', 
    desc: 'Begin your personalized tutoring sessions and track your progress with regular assessments and feedback.', 
    icon: <FaLaptop className="w-8 h-8 text-white" />
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how" className="py-20 px-6 sm:px-10 lg:px-16 bg-blue-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
          <p className="max-w-2xl mx-auto text-blue-100">Our simple three-step process makes it easy to get started with the tutoring support you need.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.n} className="relative">
              <div className="absolute top-0 left-0 w-16 h-16 flex items-center justify-center rounded-full bg-blue-600 shadow-lg">
                {s.icon}
              </div>
              <div className="pt-24 pb-8 px-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 h-full">
                <div className="text-xl font-bold text-white mb-2">{s.title}</div>
                <p className="text-blue-100">{s.desc}</p>
              </div>
              
              {s.n < steps.length && (
                <div className="hidden md:block absolute top-8 left-full w-16 h-2 -ml-8 border-t-2 border-dashed border-blue-400"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-white text-blue-900 font-semibold rounded-full hover:bg-blue-50 transition-colors shadow-md">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
