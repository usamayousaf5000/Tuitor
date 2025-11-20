'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Calendar, Award, BookOpen, Target } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

const features = [
  {
    title: 'Highly Qualified Educators',
    description: 'Learn from tutors with advanced degrees and extensive teaching experience in their subject areas.',
    icon: GraduationCap,
    color: 'bg-blue-500',
  },
  {
    title: 'Personalized Approach',
    description: 'Get customized learning plans adapted to your unique learning style and academic goals.',
    icon: Users,
    color: 'bg-purple-500',
  },
  {
    title: 'Flexible Scheduling',
    description: 'Book sessions 7 days a week with morning, afternoon, and evening slots available.',
    icon: Calendar,
    color: 'bg-green-500',
  },
  {
    title: 'Proven Results',
    description: '95% of our students see significant grade improvement within the first 3 months.',
    icon: Award,
    color: 'bg-orange-500',
  },
  {
    title: 'Comprehensive Curriculum',
    description: 'Access a wide range of subjects and test prep materials for all grade levels.',
    icon: BookOpen,
    color: 'bg-pink-500',
  },
  {
    title: 'Goal-Oriented Learning',
    description: 'Set clear milestones and track progress with regular assessments and feedback.',
    icon: Target,
    color: 'bg-cyan-500',
  },
];

const Features: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const cardAnimation = {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: {
      duration: prefersReducedMotion ? 0 : 0.5,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number]
    }
  };

  const hoverAnimation = prefersReducedMotion 
    ? {} 
    : { y: -8, scale: 1.01, transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/S1.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-slate-50/90 to-white/95 backdrop-blur-sm"></div>
      </div>

      {/* Animated Background Decorations */}
      {!prefersReducedMotion && (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-24 -right-24 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-30"
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ willChange: 'transform' }}
          />
          <motion.div
            className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary-200 rounded-full blur-3xl opacity-30"
            animate={{
              scale: [1.15, 1, 1.15],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ willChange: 'transform' }}
          />
        </div>
      )}

      <div className="container-page relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ willChange: 'transform, opacity' }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.4, delay: prefersReducedMotion ? 0 : 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-purple-600 to-secondary-600">IDEAL TUTOR</span> For Everyone
            </motion.h2>
            <motion.p
              className="text-lg text-slate-600 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.4, delay: prefersReducedMotion ? 0 : 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Every student deserves a tutor who can adapt to their unique learning style.
              Our tutors are carefully selected for their expertise, patience, and ability to connect.
            </motion.p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              {...cardAnimation}
              initial={{ ...cardAnimation.initial, y: prefersReducedMotion ? 0 : 40 }}
              transition={{
                duration: cardAnimation.transition.duration,
                ease: cardAnimation.transition.ease,
                delay: prefersReducedMotion ? 0 : index * 0.1
              }}
              whileHover={hoverAnimation}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-primary-200"
              style={{ willChange: 'transform, opacity', transformStyle: 'preserve-3d' }}
            >
              {/* Animated Icon */}
              <motion.div
                className={`w-16 h-16 rounded-2xl ${feature.color} bg-opacity-10 flex items-center justify-center mb-6 relative overflow-hidden`}
                whileHover={prefersReducedMotion ? {} : { rotate: 360, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }}
                style={{ willChange: 'transform' }}
              >
                {!prefersReducedMotion && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    style={{ willChange: 'transform' }}
                  />
                )}
                {!prefersReducedMotion && (
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    style={{ willChange: 'transform' }}
                  >
                    <feature.icon className={`w-8 h-8 ${feature.color.replace('bg-', 'text-')} relative z-10`} />
                  </motion.div>
                )}
                {prefersReducedMotion && (
                  <feature.icon className={`w-8 h-8 ${feature.color.replace('bg-', 'text-')} relative z-10`} />
                )}
              </motion.div>

              <motion.h3
                className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors"
                whileHover={prefersReducedMotion ? {} : { x: 4, transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] } }}
              >
                {feature.title}
              </motion.h3>

              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Animated Bottom Border */}
              <motion.div
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-purple-500 to-secondary-500 rounded-b-2xl"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: prefersReducedMotion ? 0 : index * 0.08 + 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                style={{ transformOrigin: 'left', willChange: 'transform' }}
              />

              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/0 to-secondary-500/0 group-hover:from-primary-500/5 group-hover:to-secondary-500/5 transition-all duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
