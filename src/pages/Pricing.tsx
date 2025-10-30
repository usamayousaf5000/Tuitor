import React from 'react';

const tiers = [
  { 
    name: 'Starter', 
    price: '$29/hr', 
    description: 'Perfect for elementary and middle school students needing foundational support.',
    features: ['K-8 subject support', 'Flexible scheduling', 'Progress notes after each session', 'Homework help', 'Basic study skills coaching'],
    recommended: false,
    buttonText: 'Get Started'
  },
  { 
    name: 'Standard', 
    price: '$39/hr', 
    description: 'Ideal for high school students looking to excel in their courses.',
    features: ['All Starter features', 'High school courses', 'Light test prep', 'Study plan creation', 'Monthly progress reports'],
    recommended: true,
    buttonText: 'Most Popular'
  },
  { 
    name: 'Premium', 
    price: '$55/hr', 
    description: 'Advanced support for college-bound students and university coursework.',
    features: ['All Standard features', 'AP/University support', 'Priority scheduling', 'Specialized subject experts', 'College application guidance'],
    recommended: false,
    buttonText: 'Get Started'
  },
];

const Pricing: React.FC = () => {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-6 sm:px-10 lg:px-16 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Transparent Pricing</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Simple hourly options to fit your learning journey. No hidden fees or long-term commitments.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 px-6 sm:px-10 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10">
            {tiers.map((tier) => (
              <div 
                key={tier.name} 
                className={`rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 ${
                  tier.recommended ? 'border-2 border-blue-600 relative' : 'border border-gray-200'
                }`}
              >
                {tier.recommended && (
                  <div className="bg-blue-600 text-white text-center py-2 text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">{tier.name}</h3>
                  <div className="text-5xl font-bold text-blue-600 mb-5">{tier.price}</div>
                  <p className="text-gray-600 mb-8 text-lg">{tier.description}</p>
                  
                  <ul className="space-y-4 mb-10">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-700 text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    className={`w-full py-4 px-6 rounded-lg font-bold text-lg shadow-md ${
                      tier.recommended 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-gray-100 text-blue-600 hover:bg-gray-200 border border-blue-200'
                    } transition-all duration-300`}
                  >
                    {tier.buttonText}
                  </button>
                </div>
              </div>
            ))}
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
                question: 'Are there any additional fees?',
                answer: 'No, our pricing is completely transparent. You only pay the hourly rate for the sessions you book, with no hidden fees or commitments.'
              },
              {
                question: 'Can I change my plan later?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time based on your needs. There are no penalties for changing plans.'
              },
              {
                question: 'Do you offer any discounts?',
                answer: 'We offer package discounts when you purchase multiple sessions in advance. We also have special rates for siblings and group sessions.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, PayPal, and bank transfers. Payment is processed securely through our platform.'
              },
              {
                question: 'What is your cancellation policy?',
                answer: 'We understand that schedules can change. You can cancel or reschedule a session up to 24 hours in advance at no charge.'
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

      {/* CTA Section */}
      <section className="py-16 px-6 sm:px-10 lg:px-16 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Ready to Start Your Learning Journey?</h2>
          <p className="text-gray-700 mb-8">Choose the plan that works best for you and begin your path to academic success today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md">
              Get Started
            </a>
            <a href="#contact" className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-md border border-blue-200">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Pricing;


