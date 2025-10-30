import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock, FaGraduationCap, FaBook, FaChalkboardTeacher } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  
  // Function to handle navigation and scroll to top
  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };
  
  return (
    <footer className="bg-gradient-to-br from-blue-800 to-blue-900 text-white pt-16 pb-8 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-12 transform -translate-y-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:w-1/2">
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Join Our Newsletter</h3>
              <p className="text-gray-600">Get the latest updates, tips and special offers delivered directly to your inbox.</p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center mb-6">
              <FaGraduationCap className="text-blue-400 text-3xl mr-2" />
              <h3 className="text-2xl font-bold">Tuitor</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Empowering students to reach their full potential through personalized tutoring, innovative teaching methods, and a supportive learning environment.
            </p>
            <div className="flex space-x-4 text-gray-300">
              <a href="#" className="hover:text-blue-400 transition-colors transform hover:scale-110 duration-200"><FaFacebook size={24} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors transform hover:scale-110 duration-200"><FaTwitter size={24} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors transform hover:scale-110 duration-200"><FaInstagram size={24} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors transform hover:scale-110 duration-200"><FaLinkedin size={24} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors transform hover:scale-110 duration-200"><FaYoutube size={24} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <FaChalkboardTeacher className="text-blue-400 mr-2" />
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li><a onClick={() => handleNavigation('/')} className="hover:text-blue-400 transition-colors flex items-center cursor-pointer"><span className="mr-2">→</span> Home</a></li>
              <li><a onClick={() => handleNavigation('/about')} className="hover:text-blue-400 transition-colors flex items-center cursor-pointer"><span className="mr-2">→</span> About Us</a></li>
              <li><a onClick={() => handleNavigation('/subjects')} className="hover:text-blue-400 transition-colors flex items-center cursor-pointer"><span className="mr-2">→</span> Subjects</a></li>
              <li><a onClick={() => handleNavigation('/curriculum')} className="hover:text-blue-400 transition-colors flex items-center cursor-pointer"><span className="mr-2">→</span> Curriculum</a></li>
              <li><a onClick={() => handleNavigation('/pricing')} className="hover:text-blue-400 transition-colors flex items-center cursor-pointer"><span className="mr-2">→</span> Pricing</a></li>
              <li><a onClick={() => handleNavigation('/contact')} className="hover:text-blue-400 transition-colors flex items-center cursor-pointer"><span className="mr-2">→</span> Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Subjects */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <FaBook className="text-blue-400 mr-2" />
              Popular Subjects
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li><a onClick={() => handleNavigation('/subjects')} className="hover:text-blue-400 transition-colors flex items-center cursor-pointer"><span className="mr-2">→</span> Mathematics</a></li>
              <li><a onClick={() => handleNavigation('/subjects')} className="hover:text-blue-400 transition-colors flex items-center cursor-pointer"><span className="mr-2">→</span> Science</a></li>
              <li><a onClick={() => handleNavigation('/subjects')} className="hover:text-blue-400 transition-colors flex items-center cursor-pointer"><span className="mr-2">→</span> English</a></li>
              <li><a onClick={() => handleNavigation('/subjects')} className="hover:text-blue-400 transition-colors flex items-center cursor-pointer"><span className="mr-2">→</span> History</a></li>
              <li><a onClick={() => handleNavigation('/subjects')} className="hover:text-blue-400 transition-colors flex items-center cursor-pointer"><span className="mr-2">→</span> Computer Science</a></li>
              <li><a onClick={() => handleNavigation('/subjects')} className="hover:text-blue-400 transition-colors flex items-center cursor-pointer"><span className="mr-2">→</span> Foreign Languages</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <FaEnvelope className="text-blue-400 mr-2" />
              Contact Us
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-blue-400 mt-1 mr-3" />
                <span>123 Education Street<br/>Learning City, LC 12345</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-blue-400 mr-3" />
                <a href="mailto:info@tuitor.com" className="hover:text-blue-400 transition-colors">info@tuitor.com</a>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-blue-400 mr-3" />
                <a href="tel:+11234567890" className="hover:text-blue-400 transition-colors">(123) 456-7890</a>
              </li>
              <li className="flex items-start">
                <FaClock className="text-blue-400 mt-1 mr-3" />
                <span>Mon-Fri: 9:00 AM - 6:00 PM<br/>Sat: 10:00 AM - 4:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-blue-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300">© {new Date().getFullYear()} Tuitor. All rights reserved.</div>
          <div className="flex space-x-8 mt-4 md:mt-0 text-gray-300">
            <Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-blue-400 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

