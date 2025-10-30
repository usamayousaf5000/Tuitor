import React from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 max-w-md w-full border-2 border-transparent bg-clip-padding shadow-2xl">
        {/* Gradient Border */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl -z-10"></div>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-3xl font-bold text-white mb-6 text-center bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Contact Us
        </h2>
        
        {/* Contact Information */}
        <div className="mb-2 p-6 bg-slate-700/30 rounded-2xl border border-slate-600/50">
          <h3 className="text-lg font-semibold text-white mb-4 text-center">Get in Touch</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <span className="text-gray-300">Think Hub Tutors</span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center"><span className="text-lg">🇬🇧</span></div>
                <a href="tel:+447367067438" className="text-gray-300 hover:text-purple-300 transition-colors">+44 7367067438</a>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center"><span className="text-lg">🇨🇦</span></div>
                <a href="tel:+15878700861" className="text-gray-300 hover:text-purple-300 transition-colors">+1 (587) 870-0861</a>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <div className="w-8 h-8 bg-pink-500/20 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <a href="mailto:thinkhubtutors@gmail.com" className="text-gray-300 hover:text-pink-300 transition-colors">thinkhubtutors@gmail.com</a>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-gray-300 text-sm">
            Feel free to reach out to us for any inquiries or questions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
