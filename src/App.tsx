import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import Home from './pages/Home';
import Tutoring from './pages/Tutoring';
import SubjectsPage from './pages/Subjects';
import Pricing from './pages/Pricing';
import Curriculum from './pages/Curriculum';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TestElevenPlus from './pages/TestElevenPlus';
import TestNaplan from './pages/TestNaplan';

const App: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  const handleCloseContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 relative overflow-hidden">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home onContact={handleContactClick} />} />
          <Route path="/tutoring" element={<Tutoring />} />
          <Route path="/subjects" element={<SubjectsPage />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test/11-plus" element={<TestElevenPlus />} />
          <Route path="/test/naplan" element={<TestNaplan />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <ContactModal isOpen={isContactModalOpen} onClose={handleCloseContactModal} />
    </div>
  );
};

export default App;