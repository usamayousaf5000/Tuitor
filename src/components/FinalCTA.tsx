import React from 'react';

interface Props { onContact: () => void }

const FinalCTA: React.FC<Props> = ({ onContact }) => {
  return (
    <section id="contact" className="py-24 px-6 sm:px-10 lg:px-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-bold mb-6">
          Ready to Transform Your Academic Journey?
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
          Join thousands of students who have achieved academic excellence with our personalized tutoring services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={onContact} 
            className="px-8 py-4 bg-white text-blue-900 font-semibold rounded-full hover:bg-blue-50 transition-colors shadow-lg text-lg"
          >
            Schedule a Free Consultation
          </button>
          <button 
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors text-lg"
          >
            Learn More About Our Programs
          </button>
        </div>
        <p className="mt-8 text-blue-200 text-sm">
          No commitment required. Find out how we can help you achieve your academic goals.
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
