import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-light">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-secondary mb-8">The IDEAL TUTOR For Everyone</h2>
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-gray-600">
            Every student deserves a tutor who can adapt to their unique learning style. Our tutors are carefully selected for their expertise, patience, and ability to connect with students of all ages and abilities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start mb-4">
              <div className="bg-primary/10 p-3 rounded-lg mr-4">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.666 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary">Highly Qualified Educators</h3>
            </div>
            <ul className="ml-4 space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Advanced degrees in their subject areas</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Extensive teaching experience</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Continuous professional development</span>
              </li>
            </ul>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start mb-4">
              <div className="bg-primary/10 p-3 rounded-lg mr-4">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary">Personalized Approach</h3>
            </div>
            <ul className="ml-4 space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Customized learning plans for each student</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Adapts to different learning styles</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Regular progress assessments</span>
              </li>
            </ul>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start mb-4">
              <div className="bg-primary/10 p-3 rounded-lg mr-4">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary">Flexible Scheduling</h3>
            </div>
            <ul className="ml-4 space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Sessions available 7 days a week</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Morning, afternoon, and evening slots</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Easy rescheduling when needed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
