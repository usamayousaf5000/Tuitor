'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Users, Shield } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

const Hero: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  
  const fadeInUp = {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: prefersReducedMotion ? 0 : 0.5, ease: [0.25, 0.1, 0.25, 1] }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: prefersReducedMotion ? 0 : 20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.2, ease: [0.25, 0.1, 0.25, 1] }
  };

  const floatAnimation = prefersReducedMotion 
    ? {} 
    : { y: [-8, 8, -8], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-primary-100/50 rounded-full blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary-100/50 rounded-full blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-0 w-[600px] h-[600px] bg-accent-100/50 rounded-full blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>

      <div className="container-page relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            {...fadeInUp}
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-medium text-slate-600">Accepting new students for 2025</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-slate-900 mb-6">
              Unlock Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                Full Potential
              </span>
            </h1>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
              Expert online tutoring tailored to your unique learning style.
              Join thousands of students achieving academic excellence with Tuitor.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/register" className="btn-primary text-lg px-8 py-4 shadow-xl shadow-primary-500/20 hover:scale-105 transition-transform">
                Start Learning Now
              </Link>
              <Link href="/how-it-works" className="btn-secondary text-lg px-8 py-4 hover:bg-slate-50">
                How It Works
              </Link>
            </div>

            <div className="flex items-center gap-8 text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium">Verified Tutors</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium">Flexible Schedule</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium">Money-back Guarantee</span>
              </div>
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            {...fadeInRight}
            className="relative"
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white/50 backdrop-blur-sm">
              <img
                src="/images/Hero2.jpg"
                alt="Student learning online"
                className="w-full h-auto object-cover scale-105 hover:scale-110 transition-transform duration-700"
              />

              {/* Floating Cards */}
              <motion.div
                animate={floatAnimation}
                className="absolute top-8 right-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 max-w-[200px]"
                style={{ willChange: 'transform' }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-yellow-100 rounded-lg text-yellow-600">
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Rating</p>
                    <p className="text-lg font-bold text-slate-900">4.9/5.0</p>
                  </div>
                </div>
                <p className="text-xs text-slate-500">Based on 2,000+ reviews</p>
              </motion.div>

              <motion.div
                animate={prefersReducedMotion ? {} : { y: [8, -8, 8], transition: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
                className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50"
                style={{ willChange: 'transform' }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">10k+ Students</p>
                    <p className="text-xs text-slate-500">Joined this month</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-secondary-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
