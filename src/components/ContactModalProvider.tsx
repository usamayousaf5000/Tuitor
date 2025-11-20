'use client';

import { useState, useEffect } from 'react';
import ContactModal from './ContactModal';

export default function ContactModalProvider() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleContactClick = () => setIsOpen(true);
    // Listen for custom event from anywhere in the app
    window.addEventListener('openContactModal', handleContactClick);
    return () => window.removeEventListener('openContactModal', handleContactClick);
  }, []);

  return <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />;
}

