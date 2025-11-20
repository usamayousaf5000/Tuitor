'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, UserCheck, Laptop, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useReducedMotion } from '../hooks/useReducedMotion';

const steps = [
  {
    n: 1,
    title: 'Request a Tutor',
    desc: 'Fill out our simple form with your academic needs, schedule preferences, and learning goals.',
    icon: Search,
    color: 'bg-blue-500'
  },
  {
    n: 2,
    title: 'Meet Your Expert',
    desc: 'We match you with a qualified tutor who specializes in your subject area and fits your learning style.',
    icon: UserCheck,
    color: 'bg-purple-500'
  },
  {
    n: 3,
    title: 'Start Learning',
    desc: 'Begin your personalized tutoring sessions and track your progress with regular assessments and feedback.',
    icon: Laptop,
    color: 'bg-green-500'
  },
];

const HowItWorks: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const stepAnimation = {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: {
      duration: prefersReducedMotion ? 0 : 0.4,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number]
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-slate-900/90 z-0"></div>

      <div className="container-page relative z-10">
        <div className="text-center mb-20">
          <motion.div
            {...stepAnimation}
            style={{ willChange: 'transform, opacity' }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Works</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Our simple three-step process makes it easy to get started with the tutoring support you need.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-slate-700 via-primary-500 to-slate-700 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={step.n}
              {...stepAnimation}
              transition={{
                duration: stepAnimation.transition.duration,
                ease: stepAnimation.transition.ease,
                delay: prefersReducedMotion ? 0 : index * 0.15
              }}
              className="relative z-10"
              style={{ willChange: 'transform, opacity' }}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-24 h-24 rounded-3xl ${step.color} bg-opacity-20 backdrop-blur-xl border border-white/10 flex items-center justify-center mb-8 shadow-xl shadow-primary-900/20 group hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-10 h-10 text-white" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white text-slate-900 font-bold flex items-center justify-center shadow-lg">
                    {step.n}
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors duration-300 w-full">
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...stepAnimation}
          transition={{
            duration: stepAnimation.transition.duration,
            ease: stepAnimation.transition.ease,
            delay: prefersReducedMotion ? 0 : 0.4
          }}
          className="mt-16 text-center"
          style={{ willChange: 'transform, opacity' }}
        >
          <Link
            href="/register"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-primary-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
          >
            Get Started Today <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
