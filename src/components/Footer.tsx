'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, MapPin, Mail, Phone, Clock, ArrowRight, GraduationCap, FileText } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Subjects', href: '/subjects' },
    { name: 'Curriculum', href: '/curriculum' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const popularSubjects = [
    { name: 'Mathematics', href: '/subjects' },
    { name: 'Science', href: '/subjects' },
    { name: 'English', href: '/subjects' },
    { name: 'History', href: '/subjects' },
    { name: 'Computer Science', href: '/subjects' },
    { name: 'Foreign Languages', href: '/subjects' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-center"></div>
      </div>

      <div className="container-page relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Tuitor */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <GraduationCap className="w-6 h-6 text-white" />
              <span className="text-2xl font-bold text-white">Tuitor</span>
            </Link>
            <p className="text-slate-400 leading-relaxed text-sm">
              Empowering students to reach their full potential through personalized tutoring, innovative teaching methods, and a supportive learning environment.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="flex items-center gap-2 hover:text-white transition-colors text-sm">
                    <ArrowRight className="w-4 h-4" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Popular Subjects */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Popular Subjects
            </h3>
            <ul className="space-y-3">
              {popularSubjects.map((subject) => (
                <li key={subject.name}>
                  <Link href={subject.href} className="flex items-center gap-2 hover:text-white transition-colors text-sm">
                    <ArrowRight className="w-4 h-4" />
                    {subject.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                <p className="text-slate-400 text-sm">123 Education Street<br />Learning City, LC 12345</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <a href="mailto:info@tuitor.com" className="text-slate-400 hover:text-white transition-colors text-sm">
                  info@tuitor.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <a href="tel:+11234567890" className="text-slate-400 hover:text-white transition-colors text-sm">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                <div className="text-slate-400 text-sm">
                  <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
                  <p>Sat: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {currentYear} Tuitor. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-slate-500">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-700">|</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span className="text-slate-700">|</span>
            <Link href="/cookies" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

