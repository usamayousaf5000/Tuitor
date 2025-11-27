'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Youtube, MapPin, Mail, ArrowRight, FileText } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Curriculum', href: '/curriculum' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const curriculumLinks = [
    { name: 'United Kingdom Curriculum', href: '/test/11-plus', flag: '🇬🇧' },
    { name: 'Canada Curriculum', href: '/curriculum', flag: '🇨🇦' },
    { name: 'Australia Curriculum', href: '/test/naplan', flag: '🇦🇺' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-center"></div>
      </div>

      <div className="container-page relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Tutor */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-2xl font-bold text-white">Think Hub Tutors</span>
            </Link>
            <p className="text-slate-400 leading-relaxed text-sm">
              Empowering students to reach their full potential through personalized tutoring, innovative teaching methods, and a supportive learning environment.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61579724516600"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/thinkhubtutors/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@thinkhubtutors"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all duration-300"
              >
                <Youtube className="w-4 h-4" />
              </a>
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

          {/* Column 3: Curriculum */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Curriculum
            </h3>
            <ul className="space-y-3">
              {curriculumLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="flex items-center gap-2 hover:text-white transition-colors text-sm">
                    <span>{link.flag}</span>
                    <span>{link.name}</span>
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
                <p className="text-slate-400 text-sm">Avenue HQ, 17 Mann Island<br />Liverpool L3 1BP, United Kingdom</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <a href="mailto:thinkhubtutors@gmail.com" className="text-slate-400 hover:text-white transition-colors text-sm">
                  thinkhubtutors@gmail.com
                </a>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <a href="tel:+447367067438" className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2">
                    <span>🇬🇧</span>
                    <span>United Kingdom: +44 7367 067438</span>
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <a href="tel:+15878700861" className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2">
                    <span>🇨🇦</span>
                    <span>Canada: +1 (587) 870-0861</span>
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <a href="tel:+61480009464" className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2">
                    <span>🇦🇺</span>
                    <span>Australia: +61 480 009 464</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {currentYear} Think Hub Tutors. All rights reserved.
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

