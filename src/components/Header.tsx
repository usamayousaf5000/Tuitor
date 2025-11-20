'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, BookOpen, GraduationCap, Users, Phone, Home, Info, CreditCard } from 'lucide-react';
import clsx from 'clsx';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Subjects', href: '/subjects', icon: BookOpen },
    { name: 'Pricing', href: '/pricing', icon: CreditCard },
    { name: 'Contact', href: '/contact', icon: Phone },
  ];

  const curriculumLinks = [
    { name: 'All Curricula', href: '/curriculum', icon: GraduationCap },
    { name: '11+ (UK)', href: '/test/11-plus', icon: BookOpen },
    { name: 'NAPLAN (AUS)', href: '/test/naplan', icon: Users },
  ];

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container-page flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
            <img src="/images/LOGO.PNG" alt="Tuitor" className="relative h-10 w-auto" />
          </div>
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-secondary-700 hidden sm:block">
            Tuitor
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.slice(0, 3).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                pathname === link.href
                  ? 'bg-primary-50 text-primary-700'
                  : 'text-slate-600 hover:text-primary-600 hover:bg-slate-50'
              )}
            >
              {link.name}
            </Link>
          ))}

          <div className="relative group px-2">
            <button className="flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-primary-600 hover:bg-slate-50 transition-all duration-200">
              Curriculum
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>

            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top scale-95 group-hover:scale-100">
              <div className="bg-white rounded-2xl shadow-xl ring-1 ring-slate-200/50 p-2 w-64 overflow-hidden">
                {curriculumLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors group/item"
                  >
                    <div className="p-2 rounded-lg bg-primary-50 text-primary-600 group-hover/item:bg-primary-100 transition-colors">
                      <link.icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-slate-700 group-hover/item:text-primary-700">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navLinks.slice(3).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                pathname === link.href
                  ? 'bg-primary-50 text-primary-700'
                  : 'text-slate-600 hover:text-primary-600 hover:bg-slate-50'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/register" className="btn-primary px-6 py-2.5 text-sm shadow-lg shadow-primary-500/20">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-slate-100 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="container-page py-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <link.icon className="w-5 h-5 text-slate-400" />
                  <span className="font-medium text-slate-700">{link.name}</span>
                </Link>
              ))}

              <div className="pt-4 pb-2 px-4">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Curriculum</p>
                {curriculumLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 py-3 hover:text-primary-600 transition-colors"
                  >
                    <link.icon className="w-5 h-5 text-slate-400" />
                    <span className="font-medium text-slate-700">{link.name}</span>
                  </Link>
                ))}
              </div>

              <div className="pt-6 px-4">
                <Link
                  href="/register"
                  className="btn-primary justify-center w-full block text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
