import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaChalkboardTeacher, FaBook, FaUserFriends } from 'react-icons/fa';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center">
          <img src="/images/logo.svg" alt="Tuitor" className="h-14" />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="font-semibold text-gray-800 hover:text-blue-600 transition-colors text-lg">Home</Link>
          <Link to="/about" className="font-semibold text-gray-800 hover:text-blue-600 transition-colors text-lg">About</Link>
          <Link to="/subjects" className="font-semibold text-gray-800 hover:text-blue-600 transition-colors text-lg">Subjects</Link>
          
          <div className="relative group">
            <button className="font-semibold text-gray-800 hover:text-blue-600 transition-colors flex items-center text-lg">
              <FaBook className="mr-1" />
              Curriculum
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-56 rounded-xl bg-white shadow-xl ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link to="/curriculum" className="flex items-center px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-t-xl">
                <FaGraduationCap className="mr-2" />
                <span>All Curricula</span>
              </Link>
              <Link to="/test/11-plus" className="flex items-center px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600">
                <FaChalkboardTeacher className="mr-2" />
                <span>11+ (UK)</span>
              </Link>
              <Link to="/test/naplan" className="flex items-center px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-b-xl">
                <FaUserFriends className="mr-2" />
                <span>NAPLAN (AUS)</span>
              </Link>
            </div>
          </div>
          
          <Link to="/pricing" className="font-semibold text-gray-800 hover:text-blue-600 transition-colors text-lg">Pricing</Link>
          <Link to="/contact" className="font-semibold text-gray-800 hover:text-blue-600 transition-colors text-lg">Contact</Link>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden rounded-md p-2 text-gray-800 hover:bg-blue-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-2 shadow-lg rounded-b-xl">
          <Link to="/" className="flex items-center px-6 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600">
            <span className="text-lg font-medium">Home</span>
          </Link>
          <Link to="/about" className="flex items-center px-6 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600">
            <span className="text-lg font-medium">About</span>
          </Link>
          <Link to="/subjects" className="flex items-center px-6 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600">
            <span className="text-lg font-medium">Subjects</span>
          </Link>
          <Link to="/curriculum" className="flex items-center px-6 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600">
            <FaGraduationCap className="mr-2" />
            <span className="text-lg font-medium">Curriculum</span>
          </Link>
          <Link to="/test/11-plus" className="flex items-center px-6 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 pl-12">
            <FaChalkboardTeacher className="mr-2" />
            <span className="text-lg font-medium">11+ (UK)</span>
          </Link>
          <Link to="/test/naplan" className="flex items-center px-6 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 pl-12">
            <FaUserFriends className="mr-2" />
            <span className="text-lg font-medium">NAPLAN (AUS)</span>
          </Link>
          <Link to="/pricing" className="flex items-center px-6 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600">
            <span className="text-lg font-medium">Pricing</span>
          </Link>
          <Link to="/contact" className="flex items-center px-6 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600">
            <span className="text-lg font-medium">Contact</span>
          </Link>

        </div>
      )}
    </header>
  );
};

export default Header;
