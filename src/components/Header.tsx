'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, GraduationCap, Phone, Home, Info, CreditCard, BookOpen } from 'lucide-react';
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
    { name: 'Curriculum', href: '/curriculum', icon: GraduationCap },
    { name: 'Pricing', href: '/pricing', icon: CreditCard },
    { name: 'Contact', href: '/contact', icon: Phone },
  ];

  const isHomePage = pathname === '/';

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container-page flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className={clsx(
            'text-2xl font-bold transition-colors duration-200',
            scrolled || isHomePage
              ? 'bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-secondary-700'
              : 'text-white'
          )}>
            Think Hub Tutors
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                pathname === link.href
                  ? scrolled || isHomePage
                    ? 'bg-primary-50 text-primary-700'
                    : 'bg-white/20 text-white'
                  : scrolled || isHomePage
                    ? 'text-slate-600 hover:text-primary-600 hover:bg-slate-50'
                    : 'text-white hover:text-white hover:bg-white/20'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link 
            href="/register" 
            className={clsx(
              'px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-200 shadow-lg',
              scrolled || isHomePage
                ? 'btn-primary shadow-primary-500/20'
                : 'bg-white text-primary-700 hover:bg-white/90 shadow-white/20'
            )}
          >
            Get Started
          </Link>
          <Link
            href="/blog"
            className={clsx(
              'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
              pathname === '/blog'
                ? scrolled || isHomePage
                  ? 'bg-primary-50 text-primary-700'
                  : 'bg-white/20 text-white'
                : scrolled || isHomePage
                  ? 'text-slate-600 hover:text-primary-600 hover:bg-slate-50'
                  : 'text-white hover:text-white hover:bg-white/20'
            )}
          >
            Blog
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={clsx(
            'md:hidden p-2 rounded-full transition-colors',
            scrolled || isHomePage ? 'hover:bg-slate-100' : 'hover:bg-white/20'
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={clsx('w-6 h-6', scrolled || isHomePage ? 'text-slate-900' : 'text-white')} />
          ) : (
            <Menu className={clsx('w-6 h-6', scrolled || isHomePage ? 'text-slate-900' : 'text-white')} />
          )}
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

              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <BookOpen className="w-5 h-5 text-slate-400" />
                <span className="font-medium text-slate-700">Blog</span>
              </Link>

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
